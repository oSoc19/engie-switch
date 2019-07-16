<template>
  <div class="hello">
    <h1>Sweeet Home</h1>
    <daily-challenge-card />
    <daily-challenge-card />


    <feed-card v-for="post in posts" v-bind:key="post._id" v-bind:post="post"></feed-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  },
  methods: {
    getPosts: function() {
      window.$.getJSON("http://localhost:3000/posts", (data) => {
        this.posts = data
        window.console.log(data)
      });
    }
  },
  
  data() {
    return {
      'posts': this.getPosts()
    }
  }       
  
};

//IN FEED-CARD TAG PROPPEN: v-for="post in posts" v-bind:key="post._id" v-bind:post="post"

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/variables.css";
</style>
