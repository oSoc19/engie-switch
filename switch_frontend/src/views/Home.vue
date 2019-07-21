<template>
  <div class="hello">
    <daily-challenge-card />
    <feed-card v-for="post in posts" v-bind:key="post._id" v-bind:post="post"></feed-card>
  </div>
</template>

<script>
import api from '@/utils/api'
import error from '@/utils/error'

export default {
  name: "Home",
  data() {
    return {
      posts: [],
    };
  },
  created() {
    api.getPosts().then(data => this.posts = data).catch(error.bind(this));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
