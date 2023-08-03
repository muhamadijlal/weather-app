import { defineStore } from "pinia";

export const useStateStore = defineStore("weather", {
  state: () => ({
    location: "",
    response: 0,
    loading: false,
  }),
  actions: {
    async fetchData() {
      this.loading = true;
      await axios
        .get("http://api.weatherapi.com/v1/current.json", {
          params: {
            key: "", // credential key
            q: "London", // country
            aqi: "yes", // air quality
          },
        })
        .then((response) => {
          this.$state = {
            data: response.data.location.name,
            response: response.status,
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
