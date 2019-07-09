import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "@/views/Home.vue";
import Next from "@/views/Next.vue";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/next',
            name: 'Next',
            component: Next
        }

    ]
})