<template>
  <div class="header">
    <div class="header__content">
      <div class="header__content__left content">
        <img src="@/assets/img/switch.svg" alt="Logo switch" class="header__content__left__image" />
        <div class="header__content__left__text">SWITCH</div>
      </div>
      <div class="header__content__points content">
        <div class="points">{{userData.points}}</div>
        <img src="@/assets/icons/star-solid.svg" alt="star" width="17px" />
      </div>
      <div class="header__line" :style="{ backgroundImage: 'url(' + img_url + ')' }">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  props: ['userData'],
  data(){
    var img_url = require('@/assets/img/colored_bar.svg')
    return{
      img_url
    }
  }
};
</script>

<style scoped>

.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  height: 54px;
  flex-wrap: wrap;
}

.header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  position: relative;


}
.content {
  margin-top: 8px;
}
.header__content__left {
  display: flex;
  align-items: center;
}
.header__line {
  height: 10px;
  width: 100%;
  background-repeat: repeat-x;
}

.header__content__left__image {
  height: 30px;
  padding-left: 18px;
}

.header__content__left__text {
  font-weight: 700;
  margin-left: 7px;
  font-family: "Montserrat", sans-serif;
}

.header__content__points {
  color: black;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding-right: 18px;
}

.points {
  margin-right: 4px;
}
</style>
