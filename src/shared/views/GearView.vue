<script setup lang="ts">
import { shallowRef, onMounted } from 'vue'
import Обрат from '@/shared/views/GearCalcSour.vue'
import Сырое from '@/shared/views/GearRawView.vue'

const tabs = [
  { name: 'Обрат', comp: Обрат },
  { name: 'Сырое', comp: Сырое }
]

const currentTab = shallowRef(tabs[0])
onMounted(() => {
  currentTab.value
})
</script>

<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <h1 class="text-2xl md:text-3xl lg:text-4xl mt-16">Посчитать</h1>
    </div>
    <div class="demo flex flex-row justify-center mt-16">
      <div>
        <button
          v-for="(tab, i) in tabs"
          class="px-6 py-2 border border-sky-500 rounded focus-within:bg-blue-700 hover:bg-gray-400 bg-gray-200 text-slate-700"
          :key="tab.name"
          :class="['bind', { active: currentTab.name === tab.name }]"
          @click="currentTab = tabs[i]"
        >
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
