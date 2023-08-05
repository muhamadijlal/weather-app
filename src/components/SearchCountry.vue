<script setup>
import { ref } from "vue";
import { useStateStore } from "../store/useStateStore";
let nation = ref("");

const state = useStateStore();

function search() {
  state.$patch({
    country: this.nation,
  });

  state.fetchData();
}
</script>

<template>
  <div class="flex gap-2">
    <input
      v-model="nation"
      type="text"
      id="first_name"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-lg outline-none rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-5 shadow-2xl shadow-slate-400"
      placeholder="Search country"
      required
    />
    <button
      class="px-3 bg-slate-800 rounded-md text-lg font-semibold text-slate-100"
      @click="search()"
    >
      Submit
    </button>
  </div>
</template>
