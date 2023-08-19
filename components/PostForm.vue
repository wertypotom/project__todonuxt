<template>
  <form @submit.prevent="createPost">
    <h4>Create post</h4>
    <UIInput v-focus placeholder="title" v-model.trim="title" />
    <UIInput placeholder="body" v-model.trim="body" />

    <UIButton
      @click="createPost"
      :style="{
        alignSelf: 'flex-end',
        marginTop: '10px',
      }"
      >Add post</UIButton
    >
  </form>
</template>

<script lang="ts" setup>
import { Post } from '@/types/post';

type Emits = {
  (e: 'submitPost', value: Post): void;
};

const emits = defineEmits<Emits>();

const title = ref('');
const body = ref('');

const createPost = () => {
  const newPost: Post = {
    id: Date.now(),
    title: title.value,
    body: body.value,
  };

  title.value = '';
  body.value = '';

  emits('submitPost', newPost);
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
