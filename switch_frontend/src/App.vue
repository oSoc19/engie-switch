<template>
  <div id="app">
    <topbar v-if="user" v-bind:userData="user"></topbar>
    <router-view></router-view>
    <ion-toast-controller ref="toastController"></ion-toast-controller>
    <navigation class="navigation" />
  </div>
</template>

<script>
window.$ = require("jquery");
window.JQuery = require("jquery");
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

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
