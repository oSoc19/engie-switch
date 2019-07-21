<template>
  <div class="hello">
    <daily-challenge-card />
    <div>
      <button @click="start">Start</button>
      <button @click="done">Done</button>
    </div>
    <feed-card v-for="post in posts" v-bind:key="post._id" v-bind:post="post"></feed-card>
  </div>
</template>

<script>
import api from '@/utils/api'
import error from '@/utils/error'
import nprogress from 'nprogress';

export default {
  name: "Home",
  methods: {
    start() {
      nprogress.start();
    },
    done() {
      nprogress.done();
    }
  },
  data() {
    return {
      posts: [],
    };
  },
  created() {
    //api.getPosts().then(data => this.posts = data).catch(error.bind(this));
  },
  //* test for better perceived performance
  beforeRouteEnter(to, from, next) {
    api.getPosts()
      .then(data => {
        next(cmpt => {
          cmpt.posts = data
        })
      })
      .catch(error)
 }//*/
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "/css/variables.css";
</style>
