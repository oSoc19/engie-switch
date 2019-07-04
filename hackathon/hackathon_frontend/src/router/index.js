import Vue from 'vue'
import VueRouter from 'vue-router'


import HelloNobody from '@/components/HelloNobody'
import PageNotFound from '@/components/PageNotFound'
import UploadImage from '@/components/UploadImage'
import HomeView from '@/views/Home'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/nobody',
      name: 'HelloNobody',
      component: HelloNobody
    },
    {
      path: '/tip/:id',
      name: 'Tip',
      component: HelloNobody
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    },
    {
      path: '/upload',
      name: 'UploadImage',
      component: UploadImage
    }
  ]
})