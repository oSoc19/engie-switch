<template>
  <div class="fullcard">
    <ion-card class="card">
      <ion-card-header>
        <ion-card-title class="challenge_title">Madison, WI</ion-card-title>
      </ion-card-header>
      <ion-card-content>Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.</ion-card-content>
    </ion-card>
  </div>
</template>



<script>
export default {
  name: "DailyChallengeCard",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/variables.css";

.he {
  color: red;
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
  width: 90% !important;
  height: 50% !important;
  margin: 20px !important;
  border-radius: 7px !important;
}
</style>