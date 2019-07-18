<template>
  <div class="hello">
    <h2>Your position</h2>
    <leaderboard-card></leaderboard-card>

    <h1>Ranks</h1>
    <leaderboard-card v-for="user in topten" v-bind:position="counter" v-bind:key="user._id" v-bind:user="user"  id="card"></leaderboard-card>
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
        return data;
      });
    },
    getPosition : function(){
      var arrayTopTen = this.getTopTen()
      arrayTopTen.forEach(function(counter) {
        counter = 1;
        return counter;
      });
    }
  },
  data() {
    return {
      'topten': this.getTopTen(),
      'counter' : this.getPosition(0)
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/variables.css";

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
