<template>
  <div id="app">
    <header/>
    <a href="/">Click Home</a>
    <a href="/next">Im next</a>
    <img alt="Vue logo" src="./assets/logo.png" />

    <router-view></router-view>
    <navigation />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
@import "./css/variables.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary-color);
  margin-top: 60px;
}
</style>
