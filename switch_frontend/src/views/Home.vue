<template>
  <div class="hello">
    <daily-challenge-card v-if="randomChallenge" v-bind:challenge="randomChallenge" />

    <feed-card v-for="post in posts" v-bind:key="post._id" v-bind:post="post"></feed-card>
  </div>
</template>

<script>
import { getCurrentUserData } from "../utils";
export default {
  name: "Home",
  props: {
    msg: String
  },
  methods: {
    getPosts: function() {
      window.$.getJSON("http://localhost:3000/posts", data => {
        this.posts = data;
        //window.console.log(data);
      });
    },
    getRandomChallenge() {
      window.$.getJSON("http://localhost:3000/challenges", data => {
        let randomNr = Math.floor(Math.random() * data.length);
        this.randomChallenge = data[randomNr];
      });
    }
  },
  data() {
    return {
      posts: this.getPosts(),
      randomChallenge: false
    };
  },
  created() {
    this.getRandomChallenge();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/variables.css";
</style>
