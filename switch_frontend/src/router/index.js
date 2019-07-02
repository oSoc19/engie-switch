import Vue from 'vue'
import Router from 'vue-router'

import HelloNobody from '@/components/HelloNobody'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Nobody',
      component: HelloNobody,
      alias: '/nobody'
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
