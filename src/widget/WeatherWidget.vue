<script setup>
import Row from "@/widget/components/Row.vue";
import TemperatureWeather from "@/components/TemperatureWeather.vue";
import DetailWeather from "@/components/DetailWeather.vue";
import CityWeather from "@/components/CityWeather.vue";
import IconWeather from "@/components/IconWeather.vue";
import { useStateStore } from "@/store/useStateStore";
import { storeToRefs } from "pinia";
import Skeleton from "@/widget/components/Skeleton.vue";
import connectionError from "@/components/handleErrors/connectionError.vue";
import is400 from "@/components/handleErrors/is400.vue";

const { loading, location, current, error } = storeToRefs(useStateStore());
</script>

<template>
  <connection-error
    v-show="error.response === 'ERR_NETWORK'"
    :errMsg="error.errMsg"
  />

  <is400 v-show="error.response === 400" :errMsg="error.errMsg" />
  <!-- <div
    v-if="error"
    class="grid place-content-center place-items-center h-screen bg-slate-100 space-y-5"
  >
    <svg xmlns="http://www.w3.org/2000/svg" height="12em" viewBox="0 0 640 512">
      <path
        d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
      />
    </svg>
    <h4 class="font-bold text-2xl text-gray-500">
      {{ errMsg }}
    </h4>
  </div> -->

  <Skeleton v-if="loading" />

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
