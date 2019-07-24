<template>
  <div v-if="currentUser" class="hello">
    <h2>Your position</h2>
    <leaderboard-card position="" v-bind:user="currentUser" v-bind:currentUser="currentUser"></leaderboard-card>

    <h1>Ranks</h1>
    <leaderboard-card v-for="(user, index) in topten" v-bind:position="index + 1" v-bind:key="user._id" v-bind:user="user"  v-bind:currentUser="currentUser" id="card"></leaderboard-card>
  </div>
</template>

<script>
import api from '@/utils/api'
import error from '@/utils/error'

export default {
  name: "Leaderboard",
  props: {
    position: Number
  },
  created() {
    api.getUser().then(user => this.currentUser = user).catch(error.bind(this));
    api.getTop10().then(data => this.topten = data).catch(error.bind(this));
  },
  data() {
    return {
      topten: [],
      currentUser: null
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h1{
  padding-left: 24px;
  font-size: 16px;
  color: var(--black);
}
h2{
  padding-left: 24px;
  font-weight: lighter !important;
  font-size: 16px;
  color: var(--black);
  padding-top: 16px;
}
</style>
