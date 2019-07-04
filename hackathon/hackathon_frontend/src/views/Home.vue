
<template>
  <div class="app__wrapper">
    <switch-header></switch-header>

    <daily-challenge-card
      v-for="challenge in challenges"
      v-bind:key="challenge.id"
      v-bind:challenge_title="challenge.title"
    />

    <switch-navigation />
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  },
  data() {
    return {
      challenges: [{ id: 1, title: "Nawang" }, { id: 2, title: "Tendar" }]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.description {
  text-align: left;
  margin: 0 10% 0 10%;
}
.app__wrapper {
  background-color: white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}
h3 {
  margin: 20px 0 0;
}

.cotd {
  width: 75%;
  border: 5px solid #2c3e50;
}

.person {
  vertical-align: middle;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 2px;
  border: 2px solid #2c3e50;
}

.people {
  font-size: 11px;
}

.sm {
  display: flex;
}

.challenge {
  width: 25%;
  height: 25%;
  align-self: auto;
  order: 0;
}
.challengecontainer {
  display: flex;
}

.logo__name {
  font-size: 24px;
  font-weight: bold;
  margin: 5px;
}
</style>
