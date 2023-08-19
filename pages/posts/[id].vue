<template>
  <h1 v-if="!post?.id" class="error-msg">No post found</h1>
  <h1 v-else>Post is {{ post?.id }} - {{ post?.title }}</h1>
</template>

<script setup lang="ts">
import { Post } from 'types/post';

const route = useRoute();

const { data: post } = await useFetch<Post>(
  `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
);

useHead({
  title: 'Post ' + post.value?.title,
  meta: [
    { name: 'description', content: 'Post title is ' + post.value?.title },
  ],
});

definePageMeta({
  validate: async (route) => {
    return /^\d+$/.test(route.params.id as string);
  },
});
</script>
