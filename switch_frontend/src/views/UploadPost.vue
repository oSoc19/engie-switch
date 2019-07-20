<template>
  <div class="wrapper">
    <ion-card v-if="challenge">
      <img :src="challenge.image+'500'" />
      <ion-card-header>
        <!--ion-card-subtitle>{{ challenge.title }}</ion-card-subtitle-->
        <ion-card-title>{{ challenge.title }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>{{ challenge.description }}</ion-card-content>
    </ion-card>
    <upload-image :challengeId="challengeId"/>
    <p>Upload your picture of the challenge</p>
  </div>
</template>

<script>
import api from '@/utils/api'
import error from '@/utils/error'

export default {
  name: "UploadPost",
  data() {
    return {
      challengeId: this.$route.params.challengeId,
      challenge: {},
    };
  },
  created() {
    // fetch challenge data
    api.getChallenge(this.challengeId)
      .then(challenge => this.challenge = challenge)
      .catch(error.bind(this))
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

</style>
