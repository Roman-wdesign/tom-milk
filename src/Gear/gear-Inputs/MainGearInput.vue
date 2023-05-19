<script setup lang="ts">
import type { IGearInput } from '@/shared/models/GearModel'
export interface Props {
  modelValue: IGearInput<number>
}
const props = defineProps<Props>()

const emit = defineEmits<{
  update: [modelValue: number]
}>()

// defineProps(['modelValue'])
// defineEmits(['update:modelValue'])
</script>

<template>
  <input
    class="border-2 border-amber-800"
    type="number"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
