<template>
  <div class="hello">
    <daily-challenge-card />
    <challengecard v-for="challenge in challenges" v-bind:key="challenge._id" v-bind:challenge="challenge"/>
  </div>
</template>

<script>
import api from '@/utils/api'
import error from '@/utils/error'

export default {
  name: "Challenges",
  data() {
    return {
      'challenges': []
    }
  },
  created() {
    api.getChallenges().then(data => this.challenges = data).catch(error.bind(this))
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
