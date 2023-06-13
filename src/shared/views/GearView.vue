<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-16">
      <div class="flex justify-center my-4">
        <RouterLink to="/gear/calc"><p>Калькулятор обрата</p></RouterLink>
      </div>
      <div class="flex justify-center my-4">
        <RouterLink to="/gear/raw"><p>Калькулятор сырого молока</p></RouterLink>
      </div>
    </div>
  </div>

  <router-view></router-view>
</template>
