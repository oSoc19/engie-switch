<template>
    <router-link v-bind:to="'/uploadpost/' + challenge._id" class="challenge">
        <div class="challenge__content">
          <div class="challenge__imagecontainer">
            <div class="challenge__image" :style="{ backgroundImage: 'url(' + challenge.image + '200)' }"></div>
            </div>
            <div class="challenge__content__text">
                <p class="challenge__content__text__title">{{ challenge.title }}</p>
                <p class="challenge__content__text__description">
                  {{challenge.description | truncate(100, '...')}}
                </p>
            </div>
        </div>
    </router-link>

</template>

<script>
export default {
    name: "ChallengeCard",
    props: ['challenge'],
}

</script>

<style>
.challenge {
  display: block;
  text-decoration: none;
  margin: 8px 16px;
}

.challenge__content {
  padding: 8px;
  display: flex;
  box-shadow: 0px 4px 16px -10px rgb(102, 102, 102);
  border-radius: 8px;
}

.challenge__imagecontainer{
  flex: 1;

}

.challenge__image{
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    width: 100%;
    padding-top: 100%;
}

.challenge__content__text {
  padding-left: 8px;
  width: 72%;
}

.challenge__content__text__title {
  color: #444444;
  font-weight: bolder;
  text-align: left;
  margin: 4px 0;
  font-size: 14px;
}

.challenge__content__text__description {
  font-size: 12px;
  color: #444444;
  text-align: left;
  margin: 0;
}
</style>
