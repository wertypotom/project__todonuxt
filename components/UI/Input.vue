<template>
  <input class="input" type="text" :value="modelValue" @input="updateInput" />
</template>

<script setup lang="ts">
type Props = {
  modelValue: string;
};

type Emits = {
  (e: 'update:modelValue', value: string): void;
};

defineProps<Props>();
const emits = defineEmits<Emits>();

const updateInput = (event: Event) => {
  emits('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 15px;
  margin-top: 10px;
}
</style>
