<template>
  <div id="app">
    <topbar></topbar>
    <router-view></router-view>
    <navigation class="navigation" />
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
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary-color);
  /* margin-top: 60px; */
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
