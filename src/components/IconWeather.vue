<script setup>
defineProps({
  weatherIcon: String,
});
</script>

<template>
  <img :src="'http:' + weatherIcon" alt="weather-icon" class="w-28" />
</template>
