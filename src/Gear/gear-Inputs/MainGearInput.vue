<script setup lang="ts">
import type { IGearInput } from '@/shared/models/GearModel'
export interface Props {
  modelValue: IGearInput<number>
}
// const props = defineProps<Props>()

const emit = defineEmits<{
  //(e: 'update:modelValue', number: string): void
  updateValue: [name: string]
}>()

defineProps(['modelValue'])

//const emit = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
  emit('updateValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <input class="border-2 border-amber-800" type="number" :value="modelValue" @input="updateValue" />
</template>
