import Vue from 'vue'
import router from './router'
import App from './App.vue'

import HelloWorld from '@/components/HelloWorld'
import HelloNobody from '@/components/HelloNobody'
import DailyChallengeCard from '@/components/DailyChallengeCard'

// rename component
Vue.component('hello-world', HelloWorld)
Vue.component('hello-nobody', HelloNobody)
Vue.component('daily-challenge-card', DailyChallengeCard)

Vue.config.productionTip = false

new Vue({
  router,
  // first component:
  components: {
    App
  },
  template: '<App/>'
}).$mount('#app')