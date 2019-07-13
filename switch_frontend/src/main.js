import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Ionic from '@ionic/vue'
import DailyChallengeCard from '@/components/DailyChallengeCard'
import Navigation from '@/components/Navigation'
import TopBar from '@/components/Header'
import ChallengeCard from '@/components/ChallengeCard'
import UploadImage from '@/components/UploadImage'


Vue.component('daily-challenge-card', DailyChallengeCard)
Vue.component('navigation', Navigation)
Vue.component('topbar', TopBar)
Vue.component('challengecard', ChallengeCard)

Vue.component('upload-image', UploadImage)


Vue.use(Ionic)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)

}).$mount('#app')