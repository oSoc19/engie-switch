<template>
  <div id="app">
    <topbar></topbar>
    <router-view></router-view>
    <navigation class="navigation" />
  </div>
</template>

<script>
window.$ = require("jquery");
window.JQuery = require("jquery");

export default {
  name: "app",
  created() {
    //check if there is token in localstorage
    //get token
    //register new user with random Name if no token in localstorage
  }
};
</script>

<style>
@import "./css/variables.css";

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
