<template>
    <ion-card class="feedcard">
        <ion-card-header>
            <div class="feedcard__header">
                <div class="feedcard__header__profilepic"></div>
                <div class="feedcard__header__details">
                    <div class="feedcard__header__details__name">Jos Vermeiren</div>
                    <div class="feedcard__header__details__time">20 min ago</div>
                </div>    
            </div>
            <ion-card-title class="feedcard__header__challenge">Hang your laundry</ion-card-title>
        </ion-card-header>

        <ion-card-content class="feedcard__content">
            <div class="feedcard__content__image"></div>
            <div class="feedcard__content__likes">
                <div class="feedcard__content__likes__heart">
                    <img src="@/assets/img/heart-regular.svg" alt="heart" />
                </div>
                <div>1258</div>
            </div>
            <ion-button v-on:click.native="handleClick('help')">Tertiary</ion-button>

            <a v-on:click="handleClick('help')">Click me!</a>
                            
        </ion-card-content>
    </ion-card>
</template>

<script>
export default {
    name: "FeedCard",
    methods: {
        handleClick: function(text) {
            alert(text)
        }
    } 
}


</script>

<style>

.feedcard__content{
    display:flex;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 8px;
    padding-top: 0px;
}

.feedcard__content__image{
    width: 100%;
    background-color: #258471;
    height: 190px;
    background-image: url("../assets/img/laundry.jpg");
    background-size: cover;
    background-position: center;
    border-radius: 5px;

}

.feedcard__header{
    display:flex;
    flex-direction: row;
    margin: 0px;
    
    align-items: center;
}

.feedcard__header__details{
    display: flex;
    flex-direction: column;
    color: #444444 !important;
    margin-left: 10px;
    text-align: left;
}

.feedcard__header__details__name{
    font-size: 13px;
    font-weight: bold;
    
}

.feedcard__header__details__time{
    font-size: 9px;
    color: #000;
}

.feedcard__header__challenge{
    font-size: 12px !important;
    color: #444444;
    text-align: left;
    margin-top: 5px;
}

.feedcard__header__profilepic{
    background-image: url("../assets/img/person.png");
    width: 32px;
    height: 32px;
    border-radius: 50px;
    background-size: cover;
    background-position: center;
}

.feedcard__content__likes{
    display: flex;
    width: 100%;
    justify-content: left;
    margin-top: 5px;
    font-size: 12px;
    color: #000;
    align-items: center;
}

.feedcard__content__likes__heart{
    justify-self: left;
    width: 20px;
    margin-right: 5px;

}
</style>
