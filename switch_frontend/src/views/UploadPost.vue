<template>
  <div class="wrapper">
    <upload-image />
    <div class="actions">
      <div id="btnPost">POST</div>
    </div>
  </div>
</template>

<script>
import CheckImage from "../utils/checkImage";
export default {
  name: "UploadPost",
  props: {
    msg: String
  },
  methods: {},
  mounted() {
    let btnPost = document.getElementById("btnPost");

    btnPost.addEventListener("click", e => {
      e.preventDefault();
    });

   
  }
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
.actions {
  display: flex;
  width: 90%;
  justify-content: flex-end;
  align-items: center;
}
#btnPost {
  border-radius: 7px;
  background-color: lightgrey;
  color: grey;
  box-shadow: none;
  padding: 10px 0px;
  width: 150px;
  margin-top: 10px;
  cursor: pointer;
}

#btnPost:hover {
  opacity: 0.8;
}
</style>
