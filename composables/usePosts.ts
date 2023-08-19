import { ref, watch } from 'vue';
import { Post } from 'types/post';

export default function usePosts(currentPage: number) {
  const isPostsLoading = ref(false);
  const postLimit = ref(10);
  const posts = ref<Post[]>([]);
  const totalPages = ref(0);

  function fetchPosts() {
    try {
      isPostsLoading.value = true;
      setTimeout(async () => {
        const { data, error, pending } = await useFetch<Post>(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _limit: postLimit.value,
              _page: currentPage,
            },
          }
        );

        posts.value = data;
        isPostsLoading.value = false;
        totalPages.value = Math.ceil(
          response.headers['x-total-count'] / postLimit.value
        );
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  }

  watch(currentPage, () => fetchPosts(), { immediate: true });

  onMounted(fetchPosts);

  return {
    isPostsLoading,
    posts,
    totalPages,
  };
}
