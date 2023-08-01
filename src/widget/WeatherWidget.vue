<script setup>
import Row from "@/widget/components/Row.vue";
import TemperatureWeather from "@/components/TemperatureWeather.vue";
import DetailWeather from "@/components/DetailWeather.vue";
import CityWeather from "@/components/CityWeather.vue";
import IconWeather from "@/components/IconWeather.vue";
</script>

<template>
  <div class="grid place-content-center h-screen">
    <div class="bg-slate-800 space-y-5 rounded-3xl px-10 py-14">
      <row>
        <city-weather />
        <icon-weather />
      </row>

      <row>
        <temperature-weather />

        <detail-weather />
      </row>
    </div>
  </div>
</template>
