<template>
  <div class="container mx-auto">
    <div class="flex flex-row justify-center mt-16">
      <div class="my-4 mx-4">
        <RouterLink
          class="active:text-emerald-600 focus:shadow-xl text-cyan-600 active:opacity-75"
          to="/gear/calc"
          ><p>Обрат</p></RouterLink
        >
      </div>
      <div class="my-4 mx-4">
        <RouterLink
          class="active:text-emerald-600 focus:shadow-xl text-cyan-600 active:opacity-75"
          to="/gear/raw"
          ><p>Сырое молоко</p></RouterLink
        >
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>
