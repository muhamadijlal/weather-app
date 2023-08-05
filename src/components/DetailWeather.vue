<script setup>
defineProps({
  humidity: Number,
  feelslikeC: Number,
});
</script>

<template>
  <table class="text-slate-800 font-medium text-xl w-56">
    <tbody>
      <tr>
        <td colspan="2">Details</td>
      </tr>
      <tr>
        <td>Feels like:</td>
        <td class="text-right">{{ feelslikeC }}°C</td>
      </tr>
      <tr>
        <td>Humidity:</td>
        <td class="text-right">{{ humidity }}%</td>
      </tr>
    </tbody>
  </table>
</template>
