<template>
  <div class="wrapper">
    <upload-image />
    <button id="btnPost" disabled>POST</button>
  </div>
</template>

<script>
import CheckImage from "../utils/checkImage";
export default {
  name: "UploadPost",
  props: {
    msg: String
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/variables.css";
.test__img {
  max-width: 100%;
}

.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
