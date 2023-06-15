<script setup lang="ts"></script>

<template>
  <main>
    <div class="container mx-auto">
      <div class="flex justify-center">
        <h1 class="text-4xl md:text-6xl lg:text-8xl mt-16">Главная</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-16">
        <div class="flex justify-center my-4">
          <RouterLink class="active:text-emerald-600 text-cyan-600 active:opacity-75" to="/gear"
            ><p>Аппаратный</p></RouterLink
          >
        </div>
        <div class="flex justify-center my-4">
          <a
            class="mt-1 block px-2 py-1 text-cyan-600 font-semibold sm:mt-0 sm:ml-2"
            href="https://github.com/Roman-wdesign/tom-milk"
            target="_blank"
          >
            GitHub</a
          >
        </div>
      </div>
    </div>
  </main>
</template>
