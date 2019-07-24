<template>
  <div class="hello wrapper">
    <p class="upload__text">Upload your picture of the challenge</p>
    <upload-image :challengeId="challengeId" />
    <ion-card class="challenge__card" v-if="challenge">
      <div class="challenge__image" :style="{ backgroundImage: 'url(' + challenge.image + '500)' }"></div>
      <ion-card-header class="challenge__card__header">
        <!--ion-card-subtitle>{{ challenge.title }}</ion-card-subtitle-->
        <ion-card-title>{{ challenge.title }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>{{ challenge.description }}</ion-card-content>
    </ion-card>
  </div>
</template>

<script>
import api from "@/utils/api";
import error from "@/utils/error";

export default {
  name: "UploadPost",
  data() {
    return {
      challengeId: this.$route.params.challengeId,
      challenge: {}
    };
  },
  created() {
    // fetch challenge data
    api
      .getChallenge(this.challengeId)
      .then(challenge => (this.challenge = challenge))
      .catch(error.bind(this));
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.upload__text {
  text-align: center;
  width: 100%;
  padding: 0;
  margin: 16px 0 0 0;
}

.wrapper {
  width: 95%;
  display: flex;
  flex-wrap: wrap;
}

.challenge__image{
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 0;
    padding-top: 75%;
}

.challenge__card{
  margin: 16px;
  padding: 0;
}

.challenge__card__header {
  padding-bottom: 0;
}
</style>
