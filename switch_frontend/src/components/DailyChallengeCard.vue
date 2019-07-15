<template>
  <router-link to="/uploadpost/5">
    <div class="fullcard">
      <h2>{{card_title}}</h2>
      <ion-card class="card">
        <div class="card__content">
          <img id="img" class="card__content--img" src="../assets/img/laundry.jpg" alt />
          <ion-card-title class="challenge__title">Hang clothes</ion-card-title>
          <ion-card-content>Founded in 1829 on an isthmus between Lake Monona and Lake Mendota.</ion-card-content>
        </div>
      </ion-card>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "DailyChallengeCard",
  props: {
    msg: String,
    card_title: String,
    card_intro: String,
    card_description: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/variables.css";
a {
  text-decoration: none !important;
  margin: 0 !important;
  padding: 0 !important;
}
h2 {
  color: white;
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

.sc-ion-card-ios-s img {
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