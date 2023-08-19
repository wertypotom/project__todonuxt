<template>
  <div class="app">
    <div class="header__btns">
      <UIButton @click="showDialog = true">Create post</UIButton>
      <UISelect :options="select.options" v-model="select.value" />
    </div>
    <UIInput placeholder="Search posts..." v-model="searchValue" />
    <UIModal v-model:show="showDialog">
      <PostForm @submitPost="submitPost" />
    </UIModal>

    <h2 class="error-msg" v-if="error">
      Can not load posts. Please try reload the window
    </h2>

    <div v-else>
      <PostList :posts="searchedPosts" @removePost="removePost" />
      <PostPagination
        :pages="totalPages"
        @selectPage="selectPage"
        :activePage="page"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Post } from 'types/post';

useHead({
  title: 'Posts Nuxt3',
  meta: [{ name: 'description', content: 'My amazing site.' }],
});

const showDialog = ref(false);
const searchValue = ref('');
const page = ref(1);
const postLimit = ref(10);
const totalPages = ref(10);

const select = reactive({
  value: '',
  options: [
    {
      name: 'By name',
      value: 'title',
    },
    {
      name: 'By description',
      value: 'body',
    },
  ],
});

watch(
  () => select.value,
  (newV, prevV) => {
    (posts.value as Post[]).sort((a, b) =>
      (a[newV as keyof Post] as string).localeCompare(
        b[newV as keyof Post] as string
      )
    );
  }
);

const { data: posts, error } = await useFetch<Post[]>(
  'https://jsonplaceholder.typicode.com/posts',
  {
    watch: [page],
    params: {
      _limit: postLimit,
      _page: page,
    },
  }
);

const searchedPosts = computed(() => {
  return [...(posts.value as Post[])].filter((post) =>
    post.title.includes(searchValue.value.toLowerCase())
  );
});

const selectPage = (p: number) => {
  page.value = p;
};

const removePost = (id: number) => {
  posts.value = (posts.value as Post[]).filter((post) => post.id !== id);
};

const submitPost = (newPost: Post) => {
  (posts.value as Post[]).unshift(newPost);
  showDialog.value = false;
};
</script>

<style>
.header__btns {
  display: flex;
  justify-content: space-between;
}
</style>
