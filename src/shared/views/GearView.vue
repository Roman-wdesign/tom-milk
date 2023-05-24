<script setup lang="ts">
import { ref } from 'vue'
import MainGearInput from '@/Gear/gear-Inputs/MainGearInput.vue'

const firstMessageInput = ref('')
const secondMessageInput = ref('')
const thirdMessageInput = ref('')
const fifthMessageInput = ref('')
</script>

<template>
  <div class="about flex justify-center">
    <h5 class="text-2xl mt-16">Калькулятор обрата</h5>
  </div>
  <div class="grid grid-cols-4 gap-4">
    <div class="first__block">
      <MainGearInput label="введите число" v-model.number="firstMessageInput">
        <template #header>Сметана 10%</template>
      </MainGearInput>
      <p>{{ firstMessageInput }}</p>
    </div>
    <div class="second__block">
      <MainGearInput label="введите число" v-model.number="secondMessageInput">
        <template #header>Сметана 15%</template>
      </MainGearInput>
      <p>{{ secondMessageInput }}</p>
    </div>
    <div class="third__block">
      <MainGearInput label="введите число" v-model.number="thirdMessageInput">
        <template #header>Сметана 20%</template>
      </MainGearInput>
      <p>{{ thirdMessageInput }}</p>
    </div>
    <div class="third__block">
      <MainGearInput label="введите число" v-model.number="fifthMessageInput">
        <template #header>Сметана 25%</template>
      </MainGearInput>
      <p>{{ fifthMessageInput }}</p>
    </div>
  </div>
</template>
