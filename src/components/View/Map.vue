<template>
  <gmap-map
    :center="center"
    :zoom="7"
    style="width: 1400px; height: 600px"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
  // ///////////////////////////////////////
  // New in 0.4.0
  import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'

Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCcbhhzdauWThKyvwTjGYgp5wRERGdSz3k',
      v: 'OPTIONAL VERSION NUMBER'
      // libraries: 'places', //// If you need to use place input
    }
  })

export default {
    data () {
      return {
        center: {lat: 16.0801031, lng: 120.34976028},
        markers: [{
          position: {lat: 16.0801031, lng: 120.34976028}
        }]
      }
    }
  }
</script>