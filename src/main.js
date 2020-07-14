import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vcomp from "./components/index"
import vueParticles from "vue-particles"

// videojs-markers
import "videojs-markers"
//引入样式
import "videojs-markers/dist/videojs.markers.css"

Vue.config.productionTip = false

Vue.use(Vcomp)
Vue.use(vueParticles)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
