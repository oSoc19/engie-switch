<template>
  <div class="hello">
    <h2>Your position</h2>
    <leaderboard-card></leaderboard-card>

    <h1>Ranks</h1>
    <leaderboard-card></leaderboard-card>
  </div>
</template>

<script>
export default {
  name: "Leaderboard",
  props: {
    msg: String
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
