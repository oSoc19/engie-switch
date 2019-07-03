import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import HelloNobody from '@/components/HelloNobody'
import PageNotFound from '@/components/PageNotFound'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
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
    }
  ]
})
