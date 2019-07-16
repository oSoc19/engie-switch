<template>
  <div class="wrapper">
    <upload-image />
    <div class="actions">
      <div id="btnPost">POST</div>
    </div>

    <div class="challenge__detail">
      <div class="challenge__title"></div>
      <div class="challenge__image"></div>
      <div class="challenge__description"></div>
    </div>
  </div>
</template>

<script>
import { postRequest, getBase64Image, getRequest } from "../utils";

export default {
  name: "UploadPost",
  props: {
    msg: String
  },
  methods: {
    getChallengeById: function() {
      let challenge = getRequest(
        "http://localhost:3000/challenges/5d2c4f320356bd1fde524947"
      );
    }
  },
  data() {
    return {
      userId: "",
      challengeId: ""
    };
  },
  mounted() {
    let btnPost = document.getElementById("btnPost");
    let imageToPost = document.getElementById("img");

    btnPost.addEventListener("click", e => {
      e.preventDefault();

      let imageBase64 = localStorage.getItem("imageToPost");

      //new post object
      let newPost = {
        challenge: "5d2c4f320356bd1fde524944",
        user: "5d25cb9464ac96e8c233f474",
        image: imageBase64, //BASE64_CONTENT
        text: "This text is very nice",
        reviews: 99
      };

      postRequest("http://localhost:3000/posts", newPost, "post");
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
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
}

#btnPost:hover {
  opacity: 0.8;
}
</style>
