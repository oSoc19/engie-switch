<template>
  <div class="wrapper">
    <upload-image />
    <div class="actions">
      <div id="btnPost">POST</div>
    </div>

    <div class="challenge__detail">
      <div class="challenge__title">{{challenge.title}}</div>
      <div class="challenge__image"></div>
      <div class="challenge__description"></div>
    </div>
  </div>
</template>

<script>
import { postRequest, getRequest } from "../utils";

export default {
  name: "UploadPost",
  props: {
    msg: String
  },
  methods: {
    getChallengeById: function() {
      let challenge = getRequest(
        "http://localhost:3000/challenges/" + this.$route.params.challengeId
      );
      this.challenge = challenge;
    }
  },
  data() {
    return {
      userId: "5d25cb9464ac96e8c233f474",
      challengeId: this.$route.params.challengeId,
      challenge: "",
      postAble: true
    };
  },
  mounted() {
    //set data
    this.challengeId = this.$route.params.challengeId;
    //get token from localstorage

    let btnPost = document.getElementById("btnPost");

    btnPost.addEventListener("click", e => {
      e.preventDefault();

      let imageBase64 = localStorage.getItem("imagePost");

      if (this.postAble) {
        //new post object
        let newPost = {
          challenge: this.challengeId,
          user: this.userId,
          image: imageBase64, //BASE64_CONTENT
          text: "This text is very nice",
          reviews: 0
        };

        postRequest("http://localhost:3000/posts", newPost, "post").then(() => {
          this.postAble = false;
          //redirect to home
          this.$router.push("/");
        });
      } else {
        alert("Use a good image!");
      }
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
