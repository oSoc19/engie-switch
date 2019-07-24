<template>
  <div id="app">
    <topbar v-if="user" v-bind:userData="user"></topbar>
    <router-view></router-view>
    <ion-toast-controller ref="toastController"></ion-toast-controller>
    <navigation class="navigation" />
  </div>
</template>

<script>
import api from '@/utils/api'

export default {
  name: "app",
  beforeCreate() {
    api.getUser().then(user => this.user = user);
  },
  data() {
    return {
      user: {}
    };
  },
};
</script>

<style>
@import "./css/variables.css";
*{
  box-sizing: border-box;
}

#app {
  font-family: "Montserrat", sans-serif;
  color: var(--primary-color);
  margin-bottom: 60px !important;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.navigation {
  position: fixed;
}
</style>
