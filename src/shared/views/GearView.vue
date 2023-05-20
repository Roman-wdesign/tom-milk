<script setup lang="ts">
import { ref } from 'vue'
import MainGearInput from '@/Gear/gear-Inputs/MainGearInput.vue'

const message = ref('')
</script>

<template>
  <div class="about flex justify-center">
    <h5 class="text-2xl mt-16">Калькулятор обрата</h5>
  </div>
  <div class="grid grid-cols-4 gap-4">
    <p>Сметана 10%</p>
    <MainGearInput label="введите число" v-model.number="message" />{{ message }}
  </div>
</template>
