<template>
  <router-link :to="'/uploadpost/' + challenge._id">
    <div v-if="challenge">
      <ion-card class="card">
        <div class="card__content">
          <img id="img" class="card__content__img" :src="challenge.image+'500'" alt />
          <h2 class="card__type">Challenge of the day</h2>
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
  color: #3c4c52;
  text-align: center;
  margin-block-end: 8px !important;
}

.card {
  background-color: white;
  height: 50% !important;
  margin: 16px !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card__type{
  font-size: 14px;
  text-align: left;
  background: #f5f5f5;
  padding: 2px 4px;
  display: inline-block;
}

.challenge__title {
  font-size: 20px;
  color: var(--black);
  margin-bottom: 8px;
}

.card__content {
  width: 95%;
}

.card__content__img {
  max-width: 100%;
  width: 98%;

  max-height: 173px;
  margin-top: 8px !important;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  object-fit: center;
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
