<script setup>
import WeatherWidget from "@/widget/WeatherWidget.vue";
import { useStateStore } from "@/store/useStateStore.js";

const { fetchData } = useStateStore();

fetchData();
</script>

<template>
  <div>
    <weather-widget />
  </div>
</template>
