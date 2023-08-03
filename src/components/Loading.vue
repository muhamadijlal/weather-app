<template>
  <div
    class="h-screen grid space-y-5 place-content-center bg-gray-200 place-items-center"
  >
    <div class="text-9xl">⛅</div>
    <div class="relative w-60 h-1 rounded-full bg-gray-300">
      <div class="absolute h-1 w-0 bg-gray-500 rounded-full loading"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes proggress-bar {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
.loading {
  animation: proggress-bar 2s ease-in-out;
}
</style>
