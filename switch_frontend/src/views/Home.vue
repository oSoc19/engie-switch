<template>
  <div>
    <div class="welcome">
      <div>Complete challenges to reduce your energy consumption!</div>
      <div class="bar"> </div>
    </div>
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
.welcome{
  color: var(--black);
  text-align: center;
  padding: 24px;
  font-size: 14px;
  line-height: 150%;
}

.bar{
  background: var(--primary-color);
  width: 16%;
  height: 5px;
  margin-top: 8px;
  border-radius: 5px;
  margin-left: 42%;
}
</style>
