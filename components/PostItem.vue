<template>
  <div class="post">
    <div>
      <div><strong>Id:</strong> {{ post.id }}</div>
      <div><strong>Title:</strong> {{ post.title }}</div>
      <div>
        <strong>Description:</strong>
        {{ post.body }}
      </div>
    </div>

    <div class="post-btns">
      <UIButton @click="$emit('removePost')">Remove post</UIButton>
      <UIButton @click="navigateTo(`/posts/${post.id}`)">Open post</UIButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Post } from 'types/post';

type Props = {
  post: Post;
};

type Emits = {
  (e: 'removePost'): void;
};

defineProps<Props>();
defineEmits<Emits>();
</script>

<style scoped>
.post-btns {
  display: flex;
  gap: 10px;
}
.post {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding: 15px;
  border: 2px solid teal;
}
</style>
