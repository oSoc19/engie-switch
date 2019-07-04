<template>
  <div class="hello">
    <div class="logo">
      <img alt="Vue logo" src="../assets/switch.svg" width="15%">
      <div class="logo__name">SWITCH</div>
    </div>
    <h1>{{ msg }}</h1>
    <div>
      <img src="../assets/laundry.jpg" class="cotd" alt="laundry"/>
      <div class="description">
      <h3>Hang your laundry</h3>
      <p>Hang your clothes outside on a sunny day! You will save money and the planet!</p>
      <div class="sm">
        <img src="../assets/person.jpg" class="person"/>
        <img src="../assets/person2.jpg" class="person"/> <span class="people">and 152 more have completed this challenge</span>
      </div>
      </div>
    </div>
    <h2>Challenges</h2>
    <div class="challengecontainer">
      <img src="../assets/bbq.jpg" alt="bbq" class="challenge"/>
      <h3>Cook outside</h3>
      <p>Cook outside on a sunny day so you don't heat up your house! Save cooling costs!</p>
      <div class="sm">
        <img src="../assets/trumpy.jpg" class="person"/>
        <img src="../assets/person.png" class="person"/> <span class="people">and 152 more have completed this challenge</span>
      </div>
    </div>
    <Navigation />
  </div>
  
  
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {Navigation}
}

import Navigation from "../components/Navigation"

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.description{
  text-align: left;
  margin: 0 10% 0 10%;
}
h3 {
  margin: 20px 0 0;
}

.cotd{
  width: 75%;
  border: 5px solid #2c3e50;
  
}

.person{
  vertical-align: middle;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 2px;
  border: 2px solid #2c3e50;
}

.people{
  font-size: 11px;
}

.sm {
  display: flex;
}

.challenge{
  width: 25%;
  height: 25%;
  align-self: auto;
  order: 0;


}
.challengecontainer{
  display:flex;
}

.logo{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo__name{
  font-size: 24px;
  font-weight: bold;
  margin: 5px;
}
.hello{
  width: 100%;
}




</style>
