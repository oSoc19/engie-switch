<template>
  <ion-card class="feedcard">
    <ion-card-header>
      <div v-if="isAIConfirmed === true" class="ai__result ai__confirmed">AI confirmed</div>
      <div v-if="isAIConfirmed === false" class="ai__result ai__not__confirmed">Probably fake</div>

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

      <ion-card-title class="feedcard__header__challenge">Challenge: {{post.challenge.title}}</ion-card-title>
    </ion-card-header>

    <ion-card-content class="feedcard__content">
      <div v-on:click="toggleNude">
        <div
          class="feedcard__content__imagecontainer"
          :class="{blur: isNude && !showNude}"
          :style="{ backgroundImage: 'url(' + post.image + ')' }"
        ></div>
        <div v-if="isNude && !showNude" class="blur__image__text">
          <p>
            Nude detected
            <br />Tap to show anyway
          </p>
        </div>
        <div v-if="isNude" class="eye__button">
          <img v-if="!showNude" src="@/assets/icons/eye-solid.svg" alt />
          <img v-if="showNude" src="@/assets/icons/eye-slash-solid.svg" alt />
        </div>
      </div>
      <div class="feedcard__content__likes">
        <div class="feedcard__content__likes__heart">
          <div class="badge" color="#111" v-on:click="likePost();">
            <div class="badge__container">
              <img src="@/assets/icons/tree.svg" alt="tree" class="like" />
              <div class="badge__text">{{this.post.reviews.plus.length}}</div>
            </div>
          </div>
          <div class="badge" color="#111" v-on:click="dislikePost();">
            <div class="badge__container">
              <img src="@/assets/icons/cross.svg" alt="cross" class="dislike" />
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
      isNude: this.post.nsfwjs.porn >= 0.5,
      showNude: false,
      isAIConfirmed: null
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
    toggleNude() {
      this.showNude = !this.showNude;
    }
  },
  mounted() {
    if (this.post.score) {
      if (this.post.score.good > 0) {
        this.isAIConfirmed = true;
      }
      if (this.post.score.bad > 0) {
        this.isAIConfirmed = false;
      }
    }
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
  height: 0;
  padding-top: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
}
.blur__image__text {
  color: var(--black);
  position: absolute;
  width: 88%;
  height: 88%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.blur__image__text p {
  background-color: rgba(255, 255, 255, 0.4);
  padding: 20px;
}

.blur {
  filter: blur(20px);
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
  cursor: pointer;
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
.eye__button {
  cursor: pointer;
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5px;
  right: 25px;
}
.eye__button img {
  max-width: 70%;
  max-height: 70%;
}
.ai__result {
  float: right;
  margin-top: 5px;
  display: inline-block;
  color: white;
  font-size: 12px;
  padding: 5px;
}

.ai__confirmed {
  background-color: #8BC34A;
}

.ai__not__confirmed {
  background-color: #FF9800;
}

</style>
