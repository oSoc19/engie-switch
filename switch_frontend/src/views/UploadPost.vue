<template>
  <div class="wrapper">
    <ion-card v-if="challenge">
      <img :src="challenge.image" />
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

export default {
  name: "UploadPost",
  props: {
    msg: String
  },
  methods: {
    getChallengeById: function() {
      api.getChallenge(this.challengeId).then(challenge => this.challenge = challenge);
    },
  },
  data() {
    return {
      challengeId: this.$route.params.challengeId,
      challenge: {},
      postAble: true
    };
  },
  mounted() {
    // fetch challenge data
    this.getChallengeById();
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
