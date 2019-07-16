<template>
  <div class="wrapper">
    <upload-image />
    <div class="actions">
      <div id="btnPost">POST</div>
    </div>
  </div>
</template>

<script>
import { postRequest } from "../utils";
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

      let newPost = {
        challangeId: "1111111",
        userId: "5616516sa1d651sa651",
        image: "Base 64 Image lalal", //BASE64_CONTENT
        text: "Text is nice",
        reviews: 0
      };

      fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
      }).then(() => {
        console.log("New post");
      });
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
