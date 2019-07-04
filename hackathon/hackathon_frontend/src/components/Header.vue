<template>
  <div class="switch__header">
    <img alt="Switch logo" src="../assets/images/switch_logo.svg" />
    <div class="logo__name">SWITCH</div>
  </div>
</template>

<script>
export default {
  name: "SwitchHeader"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.switch__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: #fff;
  width: 85%;
}

img {
  width: 45px;
}
.logo__name {
  font-size: 24px;
  font-weight: bold;
  margin: 5px;
  color: #2193b0;
}
</style>
