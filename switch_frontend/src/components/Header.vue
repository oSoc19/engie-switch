<template>
  <div class="header">
    <div class="header__content">
      <div class="header__content__left">
        <img src="@/assets/img/switch.svg" alt="Logo switch" class="header__content__left__image" />
        <div class="header__content__left__text">SWITCH</div>
      </div>
      <div class="header__content__points">
        <div>1058</div>
        <img src="@/assets/icons/star-solid.svg" alt="star" width="17px" />
      </div>
    </div>
    <img src="@/assets/img/colored_bar.png" alt="Colored bar" class="header__coloredbar" />
  </div>
</template>

<script>
export default {
  name: "TopBar"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

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
}

.header__content__left {
  display: flex;
  align-items: center;
}

.header__coloredbar {
  width: 100%;
  align-self: flex-end;
}

.header__content__left__image {
  height: 30px;
  padding-left: 18px;
}

.header__content__left__text {
  font-weight: bold;
}

.header__content__points {
  color: black;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding-right: 18px;
}
</style>
