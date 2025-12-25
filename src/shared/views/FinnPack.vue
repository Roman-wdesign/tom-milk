<script setup lang="ts">
import { ref, computed } from 'vue'

const toDay = ref(new Date())



function formatDateToDDMMYY(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = String(date.getFullYear()).slice(-2)
  return `${day}.${month}.${year}`
}

const computedTomorrow = computed(() => {
  const tomorrow = new Date(toDay.value)
  tomorrow.setDate(tomorrow.getDate() + 1)
  return formatDateToDDMMYY(tomorrow)
})

const computedExpired = computed(() => {
  const expired = new Date(toDay.value)
  expired.setDate(expired.getDate() + 10)
  return formatDateToDDMMYY(expired)
})

const computedMyCost = computed(() => {
  const expired = new Date(toDay.value)
  expired.setDate(expired.getDate() + 13)
  return formatDateToDDMMYY(expired)
})

const computedLama = computed(() => {
  const expired = new Date(toDay.value)
  expired.setDate(expired.getDate() + 15)
  return formatDateToDDMMYY(expired)
})
</script>

<template>
  <div class="container mx-auto px-4 mt-16">
    <div class="flex-col justify-center mb-5">
      <h3 class="text-slate-700 text-decoration-line: underline">9 дней</h3>
      <h3 class="text-slate-700">ДМ, Белорусские мотивы, Семь лужков</h3>

      <h5 class="text-slate-700 font-bold">{{ computedTomorrow.toLocaleString() }}</h5>
      <h5 class="text-slate-700 font-bold">{{ computedExpired.toLocaleString() }}</h5>
    </div>

    <div class="flex-col justify-center mb-5">
      <h3 class="text-slate-700 text-decoration-line: underline">12 дней</h3>
      <h3 class="text-slate-700">Моя цена</h3>

      <h5 class="text-slate-700 font-bold">{{ computedTomorrow.toLocaleString() }}</h5>
      <h5 class="text-slate-700 font-bold">{{ computedMyCost.toLocaleString() }}</h5>
    </div>
    <div class="flex-col justify-center mb-5">
      <h3 class="text-slate-700 text-decoration-line: underline">14 дней</h3>
      <h3 class="text-slate-700">Лама</h3>
      <h3 class="text-slate-700">Только Молоко</h3>
      <h3 class="text-slate-700">Коровкино</h3>
      <h3 class="text-slate-700">Красная цена (кефир и молоко)</h3>

      <h5 class="text-slate-700 font-bold">{{ computedTomorrow.toLocaleString() }}</h5>
      <h5 class="text-slate-700 font-bold">{{ computedLama.toLocaleString() }}</h5>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
