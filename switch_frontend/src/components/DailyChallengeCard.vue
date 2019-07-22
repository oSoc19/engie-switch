<template>
  <router-link :to="'/uploadpost/' + challenge._id">
    <div v-if="challenge" class="fullcard">
      <h2>Challenge of the day</h2>
      <ion-card class="card">
        <div class="card__content">
          <img id="img" class="card__content--img" :src="challenge.image+'500'" alt />
          <ion-card-title class="challenge__title">{{challenge.title}}</ion-card-title>
          <ion-card-content>{{challenge.description}}</ion-card-content>
        </div>
      </ion-card>
    </div>
  </router-link>
</template>

<script>
import api from "@/utils/api";
import error from "@/utils/error";

export default {
  name: "DailyChallengeCard",
  data() {
    return {
      challenge: {}
    };
  },
  created() {
    //TODO get random challenge from server
    api
      .getChallenges()
      .then(data => {
        let randomNr = Math.floor(Math.random() * data.length);
        this.challenge = data[randomNr];
      })
      .catch(error.bind(this));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none !important;
  margin: 0 !important;
  padding: 0 !important;
}
h2 {
  color: white;
  text-align: center;
}
.fullcard {
  background-color: var(--primary-color);
  width: 100vw !important;
  margin: 0 !important;
  margin-bottom: 20px !important;
  padding: 20px 0 !important;
}

.card {
  background-color: white;
  height: 50% !important;
  margin: 20px !important;
  border-radius: 7px !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

.challenge__title {
  font-size: 20px;
  color: var(--black);
}

.card__content {
  width: 95%;
}

img.card__content--img {
  max-width: 100% !important;
  width: 98% !important;

  max-height: 173px !important;
  margin-top: 10px !important;
  border-radius: 7px !important;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

ion-card-title {
  text-align: start !important;
  width: 100% !important;
  padding: 0 !important;
  margin-top: 10px !important;
}
ion-card-content {
  text-align: start !important;
  width: 100% !important;
  padding: 0 !important;
  font-size: 14px !important;
  margin-bottom: 10px !important;
}
</style>
