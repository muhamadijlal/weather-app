import { defineStore } from "pinia";
import axios from "axios";
import { is400, is401, is403, is404 } from "@/utils/response.js";

export const useStateStore = defineStore("weather", {
  state: () => ({
    country: "Indonesia",
    location: {},
    current: {},
    loading: false,
    error: {
      response: null,
      errMsg: null,
    },
  }),
  actions: {
    async fetchData() {
      this.loading = true;
      await axios
        .get("http://api.weatherapi.com/v1/current.json", {
          params: {
            key: import.meta.env.VITE_KEY_WEATHERAPI, // credential key
            q: this.country, // country
            aqi: "yes", // air quality
          },
        })
        .then((response) => {
          this.$state = {
            location: response.data.location,
            current: response.data.current,
          };
        })
        .catch((err) => {
          this.error = is400(err);
          if (is400(err) || is403(err) || is401(err) || is404(err)) {
            this.$state.error = {
              response: err.response.status,
              errMsg: err.message,
            };
          } else {
            this.$state.error = {
              response: err.code,
              errMsg: err.message,
            };
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
});
