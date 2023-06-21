<script setup lang="ts">
import { ref, computed } from 'vue'
import { rawMilk } from '@/shared/helpers/vars'
import { fatSourCream } from '@/shared/helpers/vars'
import MainGearInput from '@/Gear/gear-Inputs/MainGearInput.vue'

const curVolumeInput = ref(0)
const curFatInput = ref(0)

const fatMilk = computed<number>(() => Math.round(rawMilk - curFatInput.value))

const сalcRawMilk = computed<number>(
  () => Math.round(curVolumeInput.value * fatMilk.value) / fatSourCream
)
const totalCalcRawMilk = computed<number>(() =>
  Math.round(curVolumeInput.value + сalcRawMilk.value)
)
</script>

<template>
  <div class="container mx-auto bg-blue-300">
    <div class="flex justify-center">
      <h5 class="mt-16">Калькулятор обьема сырого молока</h5>
    </div>
    <div class="flex justify-center my-8 font-bold">
      Итого: {{ totalCalcRawMilk }} сырого молока <br />для {{ curFatInput }} % смеси
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
      <div class="flex justify-center my-4">
        <div>
          <MainGearInput label="введите число" v-model.number="curVolumeInput">
            <template #header>Объём</template>
          </MainGearInput>
        </div>
      </div>

      <div class="flex justify-center my-4">
        <div>
          <MainGearInput label="введите число" v-model.number="curFatInput">
            <template #header>Нужный жир</template>
          </MainGearInput>
        </div>
      </div>
    </div>
  </div>
</template>
