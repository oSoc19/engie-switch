<template>
  <div class="hello">
    <h1>Challenges</h1>

  <daily-challenge-card />

    <challengecard v-for="challenge in challenges" v-bind:key="challenge._id" v-bind:challenge="challenge"/>

  </div>
</template>

<script>

export default {
  name: "Challenges",
  props: {
    msg: String
  },
  methods: {
    getChallenges: function() {
      window.$.getJSON("http://localhost:3000/challenges", (data) => {
        this.challenges = data
        window.console.log(data)
      });
    }
  },
  data() {
    return {
      'challenges': this.getChallenges()
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
