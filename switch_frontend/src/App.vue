<template>
  <div id="app">
    <topbar v-if="userData" v-bind:userData="userData"></topbar>
    <router-view></router-view>
    <navigation class="navigation" />
  </div>
</template>

<script>
window.$ = require("jquery");
window.JQuery = require("jquery");
import { postRequest, getCurrentUserData } from "./utils";
export default {
  name: "app",
  data() {
    return {
      userData: {}
    };
  },
  async created() {
    //check if there is token in localstorage+

    if (localStorage.getItem("switch_token") === null) {
      //register new user with random Name if no token in localstorage
      let newUser = {
        username: "John Cena Juuu",
        profilePic: "BASE NNNNNNNNNNNNNNnn",
        points: 0
      };

      let newUserData = await postRequest(
        "http://localhost:3000/users",
        newUser
      );
      // console.log(newUserData);

      localStorage.setItem("switch_token", newUserData.token);

      //get that new user data
      let userDataAll = await getCurrentUserData(
        "http://localhost:3000/users/login",
        localStorage.getItem("switch_token")
      );

      this.userData = {
        username: userDataAll.username,
        points: userDataAll.points,
        profilePic: userDataAll.profilePic
      };
    } else {
      //get token and get userData
      let userDataAll = await getCurrentUserData(
        "http://localhost:3000/users/login",
        localStorage.getItem("switch_token")
      );

      this.userData = {
        username: userDataAll.username,
        points: userDataAll.points,
        profilePic: userDataAll.profilePic
      };

      //console.log(this.userData);
    }
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
