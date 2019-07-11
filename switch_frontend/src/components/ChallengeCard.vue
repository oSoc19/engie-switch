<template>
    <div class="challenge">
        <div class="challenge__content">
            <div class="challenge__content__image" :style="{ backgroundImage: `url('${challenge.image}')` }"/>
            <div class="challenge__content__text">
                <p class="challenge__content__text__title">{{ challenge.title }}</p>
                <p class="challenge__content__text__description">{{ challenge.description}}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ChallengeCard",
    props: ['challenge']
}

</script>

<style>
.challenge {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.challenge__content {
  display: flex;
  width: 88%;
  box-shadow: 0px 4px 16px -10px rgb(102, 102, 102);
  border-radius: 8px;
  height: 110px;
}

.challenge__content__image{
    margin: 12px;
    width: 36%;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
}

.challenge__content__text {
  width: 64%;
  height: 100px;
  display: flex;
  flex-direction: column;
}

.challenge__content__text__title {
  color: #444444;
  font-weight: bolder;
  text-align: left;
  margin-bottom: 3px;
  font-size: 14px;
  margin-top: 10px;
}

.challenge__content__text__description {
  font-size: 12px;
  color: #444444;
  text-align: left;
  margin-top: 0px;
}
</style>
