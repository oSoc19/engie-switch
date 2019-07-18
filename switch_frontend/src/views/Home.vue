<template>
  <div class="hello">
    <daily-challenge-card v-if="randomChallenge" v-bind:challenge="randomChallenge" />

    <feed-card v-for="post in posts" v-bind:key="post._id" v-bind:post="post"></feed-card>
  </div>
</template>

<script>
import api from '@/utils/api'

export default {
  name: "Home",
  props: {
    msg: String
  },
  methods: {
    getPosts() {
      api.getPosts().then((data) => {
        this.posts = data;
      }).catch(() => {
        // TODO display error
        window.console.log('error loading posts');
      })
    },
    getRandomChallenge() {
      api.getChallenges().then((data) => {
        let randomNr = Math.floor(Math.random() * data.length);
        this.randomChallenge = data[randomNr];
      }).catch(() => {
        // TODO display error
        window.console.log('error loading challenges');
      })
    }
  },
  data() {
    return {
      posts: [],
      randomChallenge: false
    };
  },
  created() {
    this.getRandomChallenge();
    this.getPosts();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/variables.css";
</style>
