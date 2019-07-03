import Vue from 'vue'
import router from './router'
import App from './App.vue'

import HelloWorld from '@/components/HelloWorld'
import HelloNobody from '@/components/HelloNobody'

// rename component
Vue.component('hello-world', HelloWorld)
Vue.component('hello-nobody', HelloNobody)

Vue.config.productionTip = false

new Vue({
  router,
  // first component:
  components: { App },
  template: '<App/>'
}).$mount('#app')
