<template>
  <nav>
    <a href="/upload">
      <img src="../assets/trophy-solid.svg" width="25px" />
    </a>
    <a href="/">
      <img src="../assets/home-solid.svg" width="25px" />
    </a>
    <a href="#">
      <img src="../assets/cog-solid.svg" width="25px" />
    </a>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style>
nav a {
  margin: 5%;
  color: #2193b0;
  text-decoration: none;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: fixed;
  bottom: -10px;
  width: 85%;
  background-color: white;
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
}
</style>
