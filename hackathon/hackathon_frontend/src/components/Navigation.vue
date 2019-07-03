<template>
    <nav>
        <a href="#">Challenges</a>
        <a href="#">Home</a>
        <a href="#">Review</a>
    </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style>
    nav a{
    margin: 5%;
    color: black;
    text-decoration: none;
    
}
nav{
    
    display: flex;
    justify-content: center;
    align-items:center;
    position: sticky; 
    bottom:0; 
    left: 0;
    width: 100%;
    background-image: linear-gradient(to right, #2193B0, #73CFE7);
}
</style>
