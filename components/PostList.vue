<template>
  <div v-if="posts.length > 0">
    <h3>Posts list:</h3>
    <TransitionGroup name="list">
      <PostItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @removePost="$emit('removePost', post.id)"
      />
    </TransitionGroup>
  </div>
  <h2 v-else>Empty list...</h2>
</template>

<script lang="ts" setup>
import { Post } from 'types/post';

type Props = {
  posts: Post[];
};

type Emits = {
  (e: 'removePost', id: number): void;
};

defineProps<Props>();
defineEmits<Emits>();
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
