<script setup lang="ts">
import { ref, reactive, onBeforeMount } from 'vue'
import type { Ref } from 'vue'

//open and close links of navbar
const isOpen: Ref<Boolean> = ref(false)

interface viewPos {
  topOfPage: Boolean
}
const viewPosition: viewPos = reactive({
  topOfPage: true
})
// change opacity of navbar, when scrolling
const handleScroll = () => {
  if (window.scrollY > 0) {
    if (viewPosition.topOfPage) viewPosition.topOfPage = false
  } else {
    if (!viewPosition.topOfPage) viewPosition.topOfPage = true
  }
}

onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div :class="{ 'opacity-40': !viewPosition.topOfPage }" class="bg-blue-600 fixed top-0 w-full">
    <header class="sm:flex sm:justify-end sm:items-center sm:px-4 sm:py-3">
      <div class="flex items-center justify-end px-4 py-3 sm:p-0">
        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg class="h-6 w-6 fill-gray-100" viewPositionBox="0 0 24 24">
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
        <RouterLink
          @click="isOpen = !isOpen"
          class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-blue-400 sm:mt-0 sm:ml-2"
          to="/"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </RouterLink>

        <RouterLink
          @click="isOpen = !isOpen"
          class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-blue-400 sm:mt-0 sm:ml-2"
          to="/gear"
        >
          Аппаратный
        </RouterLink>

        <a
          class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-blue-400 sm:mt-0 sm:ml-2"
          @click="isOpen = !isOpen"
          href="https://github.com/Roman-wdesign/tom-milk"
          target="_blank"
        >
          GitHub</a
        >
      </nav>
    </header>
  </div>
</template>
