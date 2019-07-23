<template>
  <div class="hello">
    <h1>Your profile</h1>
    <profile-card v-bind:user="user"></profile-card>
  </div>
</template>

<script>
import api from '@/utils/api'
import error from '@/utils/error'
export default {
  name: "Profile",
  data() {
    return {
      'user': []
    }
  },
  created() {
    api.getUser().then(data => this.user = data).catch(error.bind(this))
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
