<template>
  <vue-chart type="line" :data="chartData"></vue-chart>
</template>
<script>
import VueChart from 'vue-chart-js'
export default {
  nAMe: 'App',
  components: {
    VueChart
  },
  data: () => ({
    chartData: {
      labels: ['12:00 AM', '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00PM'],
      datasets: [
        {
          label: 'Visited Website',
          data: [40, 32, 25, 21, 29, 48, 64, 79, 92, 120, 153, 189, 149]
        },
        {
          label: 'Chat Button Clicked',
          data: [28, 20, 10, 7, 15, 29, 42, 61, 78, 92, 132, 160, 145]
        },
        {
          label: 'Chat Initiated',
          data: [24, 17, 10, 4, 10, 25, 38, 56, 60, 81, 104, 145, 122]
        }
      ]
    }
  })
}
</script>