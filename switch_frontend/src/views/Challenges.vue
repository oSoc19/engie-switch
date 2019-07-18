<template>
  <div class="hello">
    <daily-challenge-card />

    <challengecard v-for="challenge in challenges" v-bind:key="challenge._id" v-bind:challenge="challenge"/>


  </div>
</template>

<script>
import api from '@/utils/api'

export default {
  name: "Challenges",
  props: {
    msg: String
  },
  methods: {
    getChallenges() {
      api.getChallenges().then((data) => {
        this.challenges = data
        window.console.log(data)
      }).catch(() => {
        // TODO display error
        window.console.log('error loading challenges');
      })
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
