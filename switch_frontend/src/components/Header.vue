<template>
    <div class="header">
        <div class="header__content">
            <img src="@/assets/img/switch.svg" alt="Logo switch" class="header__content__image"/>
            <div class="header__content__text">SWITCH</div>
            <div class="header__content__points">
                <div>1058</div>
                <img src="@/assets/icons/star-solid.svg" alt="star" width="17px"/>
            </div>
        </div>
        <img src="@/assets/img/coloredbar.png" alt="Colored bar" class="header__coloredbar"/>
    </div>
    
</template>

<script>
export default {
    name: "TopBar"
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

.header{
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
}

.header__content{
    display: flex;
    align-items: center;
}

.header__coloredbar {
    width: 107%;
    align-self: center;
}

.header__content__image{
    height: 30px;
    padding: 0px 10px;
    padding: 0px 0px 10px 18px;
}

.header__content__text{
    font-weight: bold;
    padding: 0px 0px 5px 9px;
}

.header__content__points{
    justify-self: right;
    color: black;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    display: flex;
    align-items: center;
}
</style>
