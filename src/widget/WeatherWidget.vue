<script setup>
import Row from "@/widget/components/Row.vue";
import TemperatureWeather from "@/components/TemperatureWeather.vue";
import DetailWeather from "@/components/DetailWeather.vue";
import CityWeather from "@/components/CityWeather.vue";
import IconWeather from "@/components/IconWeather.vue";
import { useStateStore } from "@/store/useStateStore";
import { storeToRefs } from "pinia";
import Skeleton from "@/widget/components/Skeleton.vue";
import errorResponse from "@/components/handleErrors/errorResponse.vue";
import SearchCountry from "@/components/SearchCountry.vue";

const { loading, location, current, error } = storeToRefs(useStateStore());
</script>

<template>
  <errorResponse
    v-if="error.response"
    :response="error.response"
    :errMsg="error.errMsg"
  />

  <Skeleton v-if="loading" />

  <div v-else class="grid bg-gray-300 place-content-center h-screen space-y-10">
    <SearchCountry />

    <div
      class="bg-slate-100 max-w-2xl h-96 rounded-3xl px-10 py-14 shadow-2xl shadow-slate-500 space-y-8"
    >
      <row>
        <city-weather
          :location-country="location.country"
          :location-name="location.name"
          :weather-condition="current.condition.text"
        />

        <icon-weather :weather-icon="current.condition.icon" />
      </row>

      <row>
        <temperature-weather :tempC="current.temp_c" />

        <detail-weather
          :last-updated="current.last_updated"
          :humidity="current.humidity"
          :feelslikeC="current.feelslike_c"
        />
      </row>
      <footer class="text-end text-slate-400 font-light">
        {{ current.last_updated }}
      </footer>
    </div>
  </div>
</template>

<style>
svg {
  fill: #6b7280;
}
</style>
