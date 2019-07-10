<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>Destination</ion-card-subtitle>
      <ion-card-title class="he">Madison, WI</ion-card-title>
    </ion-card-header>
    <ion-card-content>Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.</ion-card-content>
  </ion-card>
</template>



<script>
export default {
  name: "Card",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.he {
  color: red;
}
.fullcard {
  background-color: blue;
  width: 100vw;
}
</style>