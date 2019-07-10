<template>
  <div class="card">
    <div class="card__wrapper">
      <a href="/tip/6">
        <div class="card__title">
          <h2>{{challenge_title}}</h2>
        </div>
        <div class="card__challenge">
          <div class="challenge__box">
            <img src="../assets/images/test.jpeg" alt="Image of challenge of day" srcset />
            <div class="card__challenge__title">Something Title</div>
            <div
              class="card__challenge__discription"
            >Do something that save energy discription. Thank you Mr. Nawang</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DailyChallengeCard",
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
  background-color: #2193b0;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
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
  height: 100%;
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
  background: white;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  flex-wrap: wrap;
}
.card__challenge img {
  width: 90%;
  height: 180px;
  max-width: 95%;
  max-height: 70%;
  border-radius: 8px;
  margin-top: 5%;
}

.card__challenge__title {
  font-size: 1.3em;
  width: 90%;
  max-width: 95%;
  margin-top: 10px;
}
.card__challenge__discription {
  font-size: 1em;
  width: 90%;
  max-width: 95%;
  background-color: #fff;
  margin-bottom: 5%;
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
