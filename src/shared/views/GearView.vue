<script setup lang="ts">
import { ref } from 'vue'
import Обрат from '@/Gear/GearCalcSour.vue'
import Сырое from '@/Gear/GearRaw.vue'

const tabs = [
  { name: 'Обрат', comp: Обрат },
  { name: 'Сырое', comp: Сырое }
]

const currentTab = ref(tabs[0])
</script>

<template>
  <div class="container mx-auto px-4 ">
    <div class="flex justify-center">
      <h1 class="text-2xl md:text-3xl lg:text-4xl mt-16">Посчитать</h1>
    </div>
    <div class="flex flex-row justify-center mt-16">
      <div>
        <button v-for="(tab, i) in tabs" :key="tab.name" class="px-6 py-2 rounded-none text-slate-700"
          :class="{ 'bg-blue-300': tab.name === currentTab.name }" @click="currentTab = tabs[i]">
          {{ tab.name }}
        </button>
      </div>
    </div>
    <div>
      <KeepAlive>
        <component :is="currentTab.comp"></component>
      </KeepAlive>
    </div>
  </div>
</template>
