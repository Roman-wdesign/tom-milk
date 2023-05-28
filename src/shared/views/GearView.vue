<script setup lang="ts">
import { ref } from 'vue'
import MainGearInput from '@/Gear/gear-Inputs/MainGearInput.vue'

const firstMessageInput = ref('')
const secondMessageInput = ref('')
const thirdMessageInput = ref('')
const fifthMessageInput = ref('')
</script>

<template>
  <div class="container mx-auto">
    <div class="flex justify-center mt-6 my-4">
      <h5 class="text-2xl mt-16">Калькулятор обрата</h5>
    </div>
    <div class="flex justify-center my-8 font-bold">
      <h3>Итого:</h3>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="first__block flex justify-center my-4">
        <div>
          <MainGearInput label="введите число" v-model.number="firstMessageInput">
            <template #header>Сметана 10%</template>
          </MainGearInput>
          <div class="font-semibold text-lg">{{ firstMessageInput }}</div>
        </div>
      </div>

      <div class="second__block flex justify-center my-4">
        <div>
          <MainGearInput label="введите число" v-model.number="secondMessageInput">
            <template #header>Сметана 15%</template>
          </MainGearInput>
          <div class="font-semibold text-lg">{{ secondMessageInput }}</div>
        </div>
      </div>

      <div class="third__block flex justify-center my-4">
        <div>
          <MainGearInput label="введите число" v-model.number="thirdMessageInput">
            <template #header>Сметана 20%</template>
          </MainGearInput>
          <div class="font-semibold text-lg">{{ thirdMessageInput }}</div>
        </div>
      </div>

      <div class="fifth__block flex justify-center my-4">
        <div>
          <MainGearInput label="введите число" v-model.number="fifthMessageInput">
            <template #header>Сметана 25%</template>
          </MainGearInput>
          <div class="font-semibold text-lg">{{ fifthMessageInput }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
