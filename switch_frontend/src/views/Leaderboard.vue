<template>
  <div class="hello">
    <h2>Your position</h2>
    <leaderboard-card></leaderboard-card>

    <h1>Ranks</h1>
    <leaderboard-card v-for="(user, index) in topten" v-bind:position="index + 1" v-bind:key="user._id" v-bind:user="user"  id="card"></leaderboard-card>
  </div>
</template>

<script>
export default {
  name: "Leaderboard",
  props: {
    position: Number
  },
  methods: {
    getTopTen: function() {
      window.$.getJSON("http://localhost:3000/users/top10users", (data) => {
        this.topten = data;
      });
    
    }
  },
  data() {
    return {
      'topten': this.getTopTen(),
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "/css/variables.css";

.hello{
  width: 98%;
}

h1{
  padding-left: 20px;
  font-weight: bold;
  text-align: left;
  font-size: 16px;
  color: var(--black);
}

h2{
  padding-left: 20px;
  font-weight: lighter !important;
  text-align: left;
  font-size: 16px;
  color: var(--black);
  padding-top: 20px;
}
</style>
