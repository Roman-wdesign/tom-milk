<script setup lang="ts">
import { ref } from 'vue'
import Obrat from '@/shared/views/GearCalcSour.vue'
import Raw from '@/shared/views/GearRawView.vue'

const currentTab = ref('Home')
const tabs = { Obrat, Raw }
</script>

<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <h1 class="text-2xl md:text-3xl lg:text-4xl mt-16">Посчитать</h1>
    </div>
    <div class="demo flex flex-row justify-center mt-16">
      <div>
        <button
          v-for="(index, tab) in tabs"
          class="px-6 py-2 mx-4 my-2 rounded-full focus:bg-blue-700 hover:bg-emerald-500 bg-blue-400 text-slate-100"
          :key="tab"
          :class="['tab-button', { active: currentTab === tab }]"
          @click="currentTab = tab"
        >
          {{ tab }}
        </button>
      </div>
    </div>
    <div>
      <KeepAlive>
        <component :is="tabs[currentTab]" class="tab"></component>
      </KeepAlive>
    </div>
  </div>
</template>
