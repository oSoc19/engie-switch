<template>
  <div>
    <header />

    <daily-challenge-card card_title="Upload Image" />
    <img id="img" src="../assets/img/nips.jpg" alt />
  </div>
</template>

<script>
import SensorImage from "../utils/SensorImage";
export default {
  name: "Home",
  props: {
    msg: String
  },
  mounted() {
    SensorImage();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/variables.css";
</style>
