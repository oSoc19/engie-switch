<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Go to <a href="/home">Home</a>.
    </p>
    <h2>This is a test</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor perferendis modi atque et facilis vel tempora odit, sapiente dolorem! Vero quisquam magnam esse laborum molestiae exercitationem accusantium. Id, expedita?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor perferendis modi atque et facilis vel tempora odit, sapiente dolorem! Vero quisquam magnam esse laborum molestiae exercitationem accusantium. Id, expedita?</p>
    <nav>
        <a href="#">Test 1</a>
        <a href="#">Test 2</a>
        <a href="#">Test 3</a>
        <a href="#">Test 4</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
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
  color: #789654;
}
nav a{
    margin: 5%;
    color: black;
    text-decoration: none;
    
}
nav{
    display: flex;
    justify-content: center;
    align-items:center;
    position: fixed; 
    bottom:0; 
    left: 0;
    width: 100%;
    background-color: #25c2e6;
}
</style>
