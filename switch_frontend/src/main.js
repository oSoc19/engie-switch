import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Ionic from '@ionic/vue'
import DailyChallengeCard from '@/components/DailyChallengeCard'
import Navigation from '@/components/Navigation'
import TopBar from '@/components/Header'
import ChallengeCard from '@/components/ChallengeCard'
import FeedCard from '@/components/FeedCard'
import UploadImage from '@/components/UploadImage'
import LeaderboardCard from '@/components/LeaderboardCard'



Vue.component('daily-challenge-card', DailyChallengeCard)
Vue.component('navigation', Navigation)
Vue.component('topbar', TopBar)
Vue.component('challengecard', ChallengeCard)
Vue.component('feed-card', FeedCard)
Vue.component('leaderboard-card', LeaderboardCard)
Vue.component('upload-image', UploadImage)

Vue.filter('truncate', (text, length, clamp) => {
  clamp = clamp || '...';
  return text.length > length ? text.slice(0, length) + clamp : text;
});

Vue.use(Ionic)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)

}).$mount('#app')
