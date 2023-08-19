<template>
  <div class="pagination__wrapper">
    <div
      class="pagination__btn"
      :class="{ active: activePage === page }"
      v-for="page in pages"
      :key="page"
      @click="selectPage(page)"
    >
      {{ page }}
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  pages: number;
  activePage: number;
};

type Emits = {
  (e: 'selectPage', page: number): void;
};

defineProps<Props>();
const emits = defineEmits<Emits>();

const selectPage = (page: number) => {
  emits('selectPage', page);
};
</script>

<style scoped>
.pagination__wrapper {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}
.pagination__btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 10px;
  border: 1px solid teal;
}

.active {
  background: paleturquoise;
  font-weight: bold;
}
</style>
