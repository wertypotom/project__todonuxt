<template>
  <select :value="modelValue" @change="changeValue">
    <option disabled value="">Выберите один из вариантов</option>

    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts" setup>
import { Options } from '@/types/select';

type Props = {
  modelValue: string;
  options: Options[];
};
type Emits = {
  (e: 'update:modelValue', value: string): void;
};

defineProps<Props>();
const emits = defineEmits<Emits>();

const changeValue = (event: Event) => {
  emits('update:modelValue', (event.target as HTMLSelectElement).value);
};
</script>

<style scoped></style>
