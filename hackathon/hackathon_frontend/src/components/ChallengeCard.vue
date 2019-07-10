<template>

  <div class="card">
    <div class="card__wrapper">
      <a href="/tip/6">
        <div class="card__challenge">
          <div class="challenge__box">
            <img src="../assets/bbq.jpg" alt="Image of challenge" srcset />
            <div class="card__challenge__title">Cook outside!</div>
            <div class="card__challenge__description">Cook outside to avoid heating up your house in the summer!</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChallengeCard",
  props: {
    challenge_title: String,
    challenge_description: String,
    image_path: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 100vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.card__title {
  width: 100%;
}
.card__wrapper {
  width: 85%;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.card__challenge {
  width: 100%;
  height: 80%;
  background: white;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  flex-wrap: wrap;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}

.challenge__box {
  width: 100%;
  height: 100%;
  background: #2193b0;
  display: flex;
  justify-content: left;
  border-radius: 8px;
  flex-wrap: wrap;
}
.card__challenge img {
  width: 30%;
  max-width: 35%;
  max-height: 35%;
  border-radius: 5px;
  border: 1.5px solid white;
  margin: 5% 5%;
}

.card__challenge__title {
  font-size: 1.1em;
  width: 90%;
  max-width: 95%;
  margin-top: 10px;
  color: white;
}
.card__challenge__description {
  font-size: 0.8em;
  width: 90%;
  max-width: 95%;
  margin-bottom: 5%;
  color:white;
}
h2 {
  width: 85%;
  color: white;
  margin-bottom: 5px;
  font-size: 1.5em;
  margin-top: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
  color: black;
}
</style>
