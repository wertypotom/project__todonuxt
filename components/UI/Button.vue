<template>
  <button class="btn" type="button">
    <slot>Click</slot>
  </button>
</template>

<style scoped>
.btn {
  padding: 10px 5px;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
}
</style>
