<template>
  <div class="barchart">
    <canvas id="bar-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import barChartData from "@/chart/bar_chart_data.js";
export default {
  name: "BarChart",
  data() {
    return {
      barChartData,
    };
  },
  mounted() {
    const ctx = document.getElementById("bar-chart");
    ctx.height = 180;
    new Chart(ctx, this.barChartData);
  },
};
</script>

<style scoped></style>
