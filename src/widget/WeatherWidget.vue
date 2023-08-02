<script setup>
import Row from "@/widget/components/Row.vue";
import TemperatureWeather from "@/components/TemperatureWeather.vue";
import DetailWeather from "@/components/DetailWeather.vue";
import CityWeather from "@/components/CityWeather.vue";
import IconWeather from "@/components/IconWeather.vue";
import { useStateStore } from "@/store/useStateStore";
import { storeToRefs } from "pinia";
import Skeleton from "@/widget/components/Skeleton.vue";

const weather = {
  location: {
    name: "Indonesia",
    tz_id: "Asia/Jakarta",
  },
  current: {
    temp_c: 31.0,
    temp_f: 87.8,
    condition: {
      text: "Partly Cloudy",
      icon: "http://cdn.weatherapi.com/weather/64x64/day/116.png",
    },
    last_updated: "2023-08-02 16:00",
    humidity: 71,
    feelslike_c: 33.8,
  },
};
</script>

<template>
  <div class="grid place-content-center h-screen">
    <div
      class="bg-slate-800 space-y-5 rounded-3xl px-10 py-14 shadow-2xl shadow-slate-500"
    >
      <row>
        <city-weather
          :location-name="weather.location.name"
          :weather-condition="weather.current.condition.text"
        />

        <icon-weather :weather-icon="weather.current.condition.icon" />
      </row>

      <footer class="text-end text-slate-400 font-light">
        {{ weather.current.last_updated }}
      </footer>
    </div>
  </div>
</template>
