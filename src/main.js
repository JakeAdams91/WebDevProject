import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont: 'md'
})
Vue.filter('currencyFmt', (number) => {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
})
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
