<template>
  <div class="hello">
    <header/>
    <h1>Sweeet Home</h1>
    <card />
    <card />
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
@import "../css/variables.css";
</style>
