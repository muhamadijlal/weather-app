<script setup>
defineProps({
  locationCountry: String,
  locationName: String,
  weatherCondition: String,
});
</script>

<template>
  <h4 class="text-4xl text-slate-800 font-bold">
    <span>{{ locationCountry }} ({{ locationName }})</span>
    <p class="text-xl font-medium text-slate-500">{{ weatherCondition }}</p>
  </h4>
</template>
