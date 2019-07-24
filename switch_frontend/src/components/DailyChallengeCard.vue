<template>
  <router-link :to="'/uploadpost/' + challenge._id">
    <div v-if="challenge">
      <ion-card class="card">
        <img id="img" class="card__content__img" :style="{ backgroundImage: 'url(' + challenge.image + '500)' }" alt />
        <h2 class="card__type">Challenge of the day</h2>
        <ion-card-title class="challenge__title">{{challenge.title}}</ion-card-title>
        <ion-card-content>{{challenge.description}}</ion-card-content>
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
  color: #3c4c52;
  text-align: center;
  margin-block-end: 8px !important;
}

.card {
  margin: 16px !important;
}

.card__type{
  font-size: 14px;
  text-align: left;
  background: rgb(222, 231, 238);
  padding: 4px 6px;
  display: inline-block;
  margin: 10px 7px !important;
  border-radius: 5px;
}

.challenge__title {
  font-size: 20px;
  color: var(--black);
  margin-top: 0 !important;
  margin-bottom: 8px;
}

.card__content__img {
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  width: 100%;
  height: 0;
  padding-top: 75%;
}

ion-card-title {
  text-align: start !important;
  width: 100% !important;
  margin-top: 8px !important;
  padding: 0 8px;

}
ion-card-content {
  text-align: start !important;
  width: 100% !important;
  font-size: 14px !important;
  margin-bottom: 8px !important;
  padding: 0 8px;
}

.card__header{
  display:flex;
  flex-direction: column;
  align-items: center;
}
</style>
