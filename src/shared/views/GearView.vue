<script setup lang="ts">
import { ref, computed } from 'vue'
import MainGearInput from '@/Gear/gear-Inputs/MainGearInput.vue'
import { fatSourCream } from '@/shared/helpers/vars'
import { firstSourCream } from '@/shared/helpers/vars'
import { secondSourCream } from '@/shared/helpers/vars'
import { thirdSourCream } from '@/shared/helpers/vars'
import { fourthSourCream } from '@/shared/helpers/vars'

const firstMessageInput = ref(0)
const secondMessageInput = ref(0)
const thirdMessageInput = ref(0)
const fifthMessageInput = ref(0)
const inputFormulaFirst = computed<number>(() =>
  Math.round(firstMessageInput.value - (firstMessageInput.value * firstSourCream) / fatSourCream)
)

const inputFormulaSecond = computed<number>(() =>
  Math.round(secondMessageInput.value - (secondMessageInput.value * secondSourCream) / fatSourCream)
)

const inputFormulaThird = computed<number>(() =>
  Math.round(thirdMessageInput.value / thirdSourCream)
)

const inputFormulaFourth = computed<number>(() =>
  Math.round(fifthMessageInput.value - (fifthMessageInput.value * fourthSourCream) / fatSourCream)
)
const totalFormula = computed<number>(
  () =>
    inputFormulaFirst.value +
    inputFormulaSecond.value +
    inputFormulaThird.value +
    inputFormulaFourth.value
)
</script>

<template>
  <div class="container mx-auto">
    <div class="flex justify-center mt-6 my-4">
      <h5 class="text-2xl mt-16">Калькулятор обрата</h5>
    </div>
    <div class="flex justify-center my-8 font-bold">
      <h3>Итого: {{ totalFormula }}</h3>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="first__block flex justify-center my-4">
        <div>
          <MainGearInput label="введите число" v-model.number="firstMessageInput">
            <template #header>Сметана 10%</template>
          </MainGearInput>
          <div class="font-semibold text-lg">{{ inputFormulaFirst }}</div>
        </div>
      </div>

      <div class="second__block flex justify-center my-4">
        <div>
          <MainGearInput label="введите число" v-model.number="secondMessageInput">
            <template #header>Сметана 15%</template>
          </MainGearInput>
          <div class="font-semibold text-lg">{{ inputFormulaSecond }}</div>
        </div>
      </div>

      <div class="third__block flex justify-center my-4">
        <div>
          <MainGearInput label="введите число" v-model.number="thirdMessageInput">
            <template #header>Сметана 20%</template>
          </MainGearInput>
          <div class="font-semibold text-lg">{{ inputFormulaThird }}</div>
        </div>
      </div>

      <div class="fifth__block flex justify-center my-4">
        <div>
          <MainGearInput label="введите число" v-model.number="fifthMessageInput">
            <template #header>Сметана 25%</template>
          </MainGearInput>
          <div class="font-semibold text-lg">{{ inputFormulaFourth }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
