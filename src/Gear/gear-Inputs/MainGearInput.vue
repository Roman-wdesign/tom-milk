<script setup lang="ts">
import type { IGearInput } from '@/shared/models/GearModel'
export interface Props {
  modelValue: IGearInput<number>
  label: string
}
const props = defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <slot name="header"></slot>
  <input
    class="input border-2 border-amber-800"
    :placeholder="props.label"
    type="input"
    :value="modelValue"
    @input="updateValue"
  />
</template>
