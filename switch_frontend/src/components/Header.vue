<template>
    <div class="header">
        <div class="header__text">
            <img src="@/assets/img/logo.png" alt="Logo switch"/>Switch
        </div>
        <div class="header__coloredbar"></div>
    </div>
    
</template>

<script>
export default {
    name: "Header"
}
</script>

<style>
.header{
    background-color: white; 
}

.header__coloredbar {
    background-image: src("@/assets/img/Component.png");
    background-size: cover;
}
</style>
