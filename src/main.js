
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueChart from 'vue-chart-js'
import App from './App'
import router from './router'
import Chatna from './components/DevTeam/Chatna.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCcbhhzdauWThKyvwTjGYgp5wRERGdSz3k',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})
Vue.use(Vuetify)
Vue.use(VueChart)
Vue.component('chat-na-dialog', Chatna)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: {
    VueChart
  }
})
