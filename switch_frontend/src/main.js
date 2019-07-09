import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Ionic from '@ionic/vue'
import Card from '@/components/card'
import Navigation from '@/components/Navigation'
import Header from '@/components/Header'



Vue.component('card', Card)
Vue.component('navigation', Navigation)
Vue.component('header', Header)




Vue.use(Ionic)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)

}).$mount('#app')