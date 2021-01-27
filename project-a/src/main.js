import Vue from 'vue'
import App from './App.vue'
import { loadMicroApp, start } from 'qiankun'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

loadMicroApp(
  { 
    name: 'porject-b', 
    entry: 'http://localhost:8081', 
    container: '#root'
  }
)
