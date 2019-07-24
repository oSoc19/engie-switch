<template>
  <ion-card class="feedcard">
    <ion-card-header>
      <div class="feedcard__header">
        <div class="feedcard__header__profilepiccontainer">
          <img
            :src="post.user.profilePic"
            class="feedcard__header__profilepiccontainer__profilepic"
          />
        </div>
        <div class="feedcard__header__details">
          <div class="feedcard__header__details__name">{{post.user.username}}</div>
          <div class="feedcard__header__details__time">{{formatDate(post.dateTime)}}</div>
        </div>
      </div>
      <ion-card-title class="feedcard__header__challenge">{{post.challenge.title}}</ion-card-title>
    </ion-card-header>

    <ion-card-content class="feedcard__content">
      <div class="feedcard__content__imagecontainer">
        <img
          id="feedcard__image"
          :src="post.image"
          :alt="post.challenge"
          class="feedcard__content__imagecontainer__image"
          :class="{blur__image:isNude}"
        />
        <div id="imageBlurText" class="blur__image__text" :class="{blur__image__text__show:isNude}">
          <p id="text__p">
            Son, bad image here!
            <br />Tap to show
          </p>
        </div>

        <div id="btnHide" class="hideNude__button">
          <img src="@/assets/icons/eye-slash-solid.svg" alt />
        </div>
      </div>
      <div class="feedcard__content__likes">
        <div class="feedcard__content__likes__heart">
          <div class="badge" color="#111">
            <div class="badge__container">
              <img
                src="@/assets/icons/tree.svg"
                alt="tree"
                class="like"
                :id="'likebutton'+post._id"
                v-on:click="likePost();"
              />
              <div class="badge__text">{{this.post.reviews.plus.length}}</div>
            </div>
          </div>
          <div class="badge" color="#111">
            <div class="badge__container">
              <img
                src="@/assets/icons/cross.svg"
                alt="cross"
                class="dislike"
                :id="'dislikebutton'+post._id"
                v-on:click="dislikePost();"
              />
              <div class="badge__text">{{this.post.reviews.minus.length}}</div>
            </div>
          </div>
        </div>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script type="text/javascript">
import api from "@/utils/api";
import error from "@/utils/error";
export default {
  name: "FeedCard",
  props: ["post"],
  data() {
    return {
      isNude: this.post.nsfwjs.porn >= 0.75
    };
  },
  methods: {
    likePost() {
      api.getUser().then(() => {
        api
          .postPlus(this.post._id)
          .then(data => (this.post = data))
          .catch(error.bind(this));
      });
    },
    dislikePost() {
      api.getUser().then(() => {
        api
          .postMinus(this.post._id)
          .then(data => (this.post = data))
          .catch(error.bind(this));
      });
    },
    formatDate(datetime) {
      let dt = new Date(datetime);
      let now = new Date();
      let diff = Math.round((now.getTime() - dt.getTime()) / 1000);
      if (diff < 60) {
        return diff + " sec ago";
      }
      diff = Math.floor(diff / 60);
      if (diff < 60) {
        return diff + " min ago";
      }
      diff = Math.floor(diff / 60);
      if (diff < 24) {
        return diff + " hour" + (diff > 1 ? "s" : "") + " ago";
      }
      diff = Math.floor(diff / 24);
      if (diff < 7) {
        return diff + " day" + (diff > 1 ? "s" : "") + " ago";
      }
      return dt.toLocaleString();
    },
    showNudeImage() {
      let nudeImageText = document.getElementById("imageBlurText");
      let nudeImage = document.getElementById("feedcard__image");
      let p = document.getElementById("text__p");
      let btnHide = document.getElementById("btnHide");
      nudeImageText.addEventListener("click", () => {
        nudeImage.classList.add("blur__image__text__remove");
        nudeImage.classList.add("unblur__image");
        p.style.display = "none";
        //show hide btn
        btnHide.style.display = "flex";

        console.log("hidee some");
      });
    },
    hideNudeImage() {
      let nudeImage = document.getElementById("feedcard__image");
      let p = document.getElementById("text__p");
      let btnHide = document.getElementById("btnHide");
      btnHide.addEventListener("click", () => {
        nudeImage.classList.remove("blur__image__text__remove");
        nudeImage.classList.remove("unblur__image");
        p.style.display = "block";
        btnHide.style.display = "none";
      });
    }
  },
  mounted() {
    this.showNudeImage();
    this.hideNudeImage();
  }
};
</script>

<style>
.feedcard {
  margin-top: 0px !important;
}
.feedcard__content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 8px;
  padding-top: 0px;
}
.feedcard__content__imagecontainer {
  width: 100%;
  height: 190px;
  position: relative;
}
.blur__image__text {
  color: var(--red);
  font-size: 16px;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: none;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.blur__image__text p {
  background-color: rgba(235, 251, 252, 0.5);
  width: 100%;
  padding: 5px 0;
}
.blur__image__text__show {
  display: flex;
}
.remove {
  display: none;
}
.blur__image {
  filter: blur(20px);
}
.unblur__image {
  filter: blur(0px);
}
.feedcard__content__imagecontainer__image {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
}
.feedcard__header {
  display: flex;
  flex-direction: row;
  margin: 0px;
  align-items: center;
}
.feedcard__header__details {
  display: flex;
  flex-direction: column;
  color: #444444 !important;
  margin-left: 10px;
  text-align: left;
}
.feedcard__header__details__name {
  font-size: 13px;
  font-weight: bold;
}
.feedcard__header__details__time {
  font-size: 9px;
  color: #000;
}
.feedcard__header__challenge {
  font-size: 12px !important;
  color: #444444;
  text-align: left;
  margin-top: 5px;
}
.feedcard__header__profilepiccontainer {
  width: 32px;
  height: 32px;
  background-color: rgb(222, 231, 238);
}
.feedcard__header__profilepiccontainer__profilepic {
  width: 100%;
  height: 100%;
  border-radius: 50px;
  object-fit: cover;
}
.feedcard__content__likes {
  display: flex;
  width: 100%;
  justify-content: left;
  margin-top: 5px;
  font-size: 12px;
  color: #000;
  align-items: center;
}
.feedcard__content__likes__heart {
  display: flex;
  justify-self: left;
  width: 20px;
  margin-right: 5px;
  width: 100%;
}
.badge {
  display: flex;
  background-color: #eee;
  margin: 5px;
  width: auto !important;
  border: 1px solid #ddd;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
}
.badge__container {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
}
.like {
  width: 19px !important;
}
.dislike {
  width: 16px !important;
}
.badge__text {
  margin-left: 5px;
  font-weight: bold;
  font-size: 13px;
}
.hideNude__button {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: white;
  color: var(--red);
  text-align: center;
  border-radius: 50%;
  display: none;
  justify-content: center;
  align-items: center;
  top: 5px;
  right: 5px;
}
.hideNude__button img {
  max-width: 70%;
  max-height: 70%;
}
</style>