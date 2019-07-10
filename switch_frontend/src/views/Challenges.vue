<template>
  <div class="hello">
    <h1>Challenges</h1>

  <daily-challenge-card />
    <daily-challenge-card />

    <challengecard />
    <challengecard />
    <challengecard />
    <challengecard />

  </div>
</template>

<script>
export default {
  name: "Challenges",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
