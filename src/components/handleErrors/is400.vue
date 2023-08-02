<script setup>
defineProps({
  errMsg: String,
});
</script>

<template>
  <div
    class="grid place-content-center place-items-center h-screen bg-slate-100 space-y-5"
  >
    <h4 class="font-bold text-4xl text-gray-500">
      400 | <span class="font-light">{{ errMsg }}</span>
    </h4>
  </div>
</template>
