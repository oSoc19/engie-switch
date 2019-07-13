import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "@/views/Home.vue";
import Leaderboard from "@/views/Leaderboard.vue";

import Challenges from "@/views/Challenges.vue";
import Profile from "@/views/Profile.vue";
import UploadPost from "@/views/UploadPost.vue";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/leaderboard',
            name: 'Leaderboard',
            component: Leaderboard
        },
        {
            path: '/challenges',
            name: 'ListChallenges',
            component: Challenges
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/uploadpost/:challengeId',
            name: 'Upload',
            component: UploadPost

        }

    ]
})