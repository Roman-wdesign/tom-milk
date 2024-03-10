<script setup lang="ts">
import { ref, computed } from 'vue'
import MainGearInput from '@/Gear/gear-Inputs/MainGearInput.vue'


const volumeMilkReqInput = ref(0); // i
const volumeMilkAvailInput = ref(0); // j
const volumeFatReqInput = ref(0); // k
const volumeFatAvailInput = ref(0); // c



const finalProduct = computed<number>(() => volumeMilkReqInput.value * volumeFatReqInput.value); // x= i*k
const currentProduct = computed<number>(() => volumeMilkAvailInput.value * volumeFatAvailInput.value); // y= j*c
const overProduct = computed<number>(() => finalProduct.value - currentProduct.value); // z= x-y
const overVolume = computed<number>(() => volumeMilkReqInput.value - volumeMilkAvailInput.value)   //v= i-j
const overFat = computed<number>(() => Number(overProduct.value / overVolume.value));// f=z/v


</script>


<template>
    <div class="container mx-auto bg-blue-300">
        <div class="flex justify-center">
            <h5 class="text-xl mt-16">Нужный жир в танке</h5>
        </div>
        <div class="flex justify-center my-8 font-bold">
            <h3>Итого: {{ overFat.toFixed(1) }} %</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="first__block flex justify-center my-4">
                <div>
                    <MainGearInput label="введите число" v-model.number="volumeMilkReqInput">
                        <template #header>Надо молока в танке</template>
                    </MainGearInput>
                    <div class="font-semibold text-lg">{{ volumeMilkReqInput }}</div>
                </div>
            </div>

            <div class="second__block flex justify-center my-4">
                <div>
                    <MainGearInput label="введите число" v-model.number="volumeFatReqInput">
                        <template #header>Надо жира в танке</template>
                    </MainGearInput>
                    <div class="font-semibold text-lg">{{ volumeFatReqInput }}</div>
                </div>
            </div>

            <div class="third__block flex justify-center my-4">
                <div>
                    <MainGearInput label="введите число" v-model.number="volumeMilkAvailInput">
                        <template #header>Объём молока в танке</template>
                    </MainGearInput>
                    <div class="font-semibold text-lg">{{ volumeMilkAvailInput }}</div>
                </div>
            </div>

            <div class="fifth__block flex justify-center my-4">
                <div>
                    <MainGearInput label="введите число" v-model.number="volumeFatAvailInput">
                        <template #header>Жир в танке</template>
                    </MainGearInput>
                    <div class="font-semibold text-lg">{{ volumeFatAvailInput }}</div>
                </div>
            </div>
        </div>
    </div>
</template>