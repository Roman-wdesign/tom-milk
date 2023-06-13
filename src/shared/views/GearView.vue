<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-16">
      <div class="flex justify-center my-4">
        <RouterLink class="active:text-emerald-600 text-cyan-600 active:opacity-75" to="/gear/calc"
          ><p>Считать обрат</p></RouterLink
        >
      </div>
      <div class="flex justify-center my-4">
        <RouterLink class="active:text-emerald-600 text-cyan-600 active:opacity-75" to="/gear/raw"
          ><p>Считать сырое молоко</p></RouterLink
        >
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>
