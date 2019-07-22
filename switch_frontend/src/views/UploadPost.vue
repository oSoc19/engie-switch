<template>
  <div class="wrapper">
    <p>Upload your picture of the challenge</p>
    <upload-image :challengeId="challengeId" />
    <div class="alert">
      <div class="bad__image">X Bad Image</div>
    </div>
    <p>Your challenge</p>
    <ion-card v-if="challenge">
      <img :src="challenge.image+'500'" />
      <ion-card-header>
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
p {
  width: 100%;
  text-align: center;
  margin-bottom: 5px;
}
.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.actions {
  display: flex;
  width: 90%;
  justify-content: flex-end;
  align-items: center;
}

.alert {
  display: flex;
  width: 90%;
  justify-content: flex-end;
  align-items: center;
}

.bad__image {
  width: 100%;
  border: 2px solid var(--red);
  color: var(--red);
  margin: 5px 0;
  text-align: center;
  padding: 5px;
  border-radius: 7px;
}

#btnPost {
  border-radius: 7px;
  background-color: lightgrey;
  color: grey;
  box-shadow: none;
  padding: 10px 0px;
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
  text-align: center;
}
#btnPost:hover {
  opacity: 0.8;
}
</style>
