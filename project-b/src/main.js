import Vue from 'vue'
import App from './App.vue'
import './public-path' // 作为子应用时需要引入

Vue.config.productionTip = false

let instance = null
function render () {
  instance = new Vue({
    render: h => h(App)
  }).$mount('#one')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 生命周期 - 挂载前
export async function bootstrap () {
  console.log('son bootstrap')
}
// 生命周期 - 挂载后
export async function mount () {
  console.log('son mount')
  // 渲染
  render()
}
// 生命周期 - 解除挂载
export async function unmount () {
  instance.$destroy()
  console.log('son unmount')
}