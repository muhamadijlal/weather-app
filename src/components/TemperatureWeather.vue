<script setup>
defineProps({
  tempC: Number,
});
</script>

<template>
  <h4 class="text-8xl font-bold text-slate-800">{{ tempC }}°C</h4>
</template>
