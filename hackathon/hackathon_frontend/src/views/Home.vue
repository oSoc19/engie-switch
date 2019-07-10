
<template>
  <div class="app__wrapper">
    <switch-header></switch-header>
    <daily-challenge-card challenge_title="Challenge of the day" />
    <switch-navigation />
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.description {
  text-align: left;
  margin: 0 10% 0 10%;
}
.app__wrapper {
  background-color: white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}

</style>
