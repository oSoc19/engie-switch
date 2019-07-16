<template>
    <ion-card class="feedcard">
        <ion-card-header>
            <div class="feedcard__header">
                <div class="feedcard__header__profilepiccontainer">
                    <img src="@/assets/img/person.png" alt="profilepic" class="feedcard__header__profilepiccontainer__profilepic"/>
                </div>
                <div class="feedcard__header__details">
                    <div class="feedcard__header__details__name">{{post.userId.name}}</div>
                    <div class="feedcard__header__details__time">{{post.time}}</div>
                </div>    
            </div>
            <ion-card-title class="feedcard__header__challenge">{{post.challengeId.title}}</ion-card-title>
        </ion-card-header>

        <ion-card-content class="feedcard__content">
            <div class="feedcard__content__imagecontainer">
                <img :src="post.image" :alt="post.challenge" class="feedcard__content__imagecontainer__image"/>
            </div>
            <div class="feedcard__content__likes">
                <div class="feedcard__content__likes__heart">
                    <img src="@/assets/img/heart-regular.svg" alt="heart" id="heart" v-on:click="likePost();"/>
                </div>
                <div>{{post.reviews}}</div>
            </div>
                            
        </ion-card-content>
    </ion-card>
</template>

<script type="text/javascript" >
var boolLiked = false;
export default {
    name: "FeedCard",
    data: function(){
        return {
            post: {
                _id: 1,
                challengeId: 3894398768756,
                userId: 16848646498823,
                image: "https://images.unsplash.com/photo-1558603806-c2a807b9a662",
                reviews: 201,
                time: '11/07/2019 12:05:54'
            } ,
            img_url: '@/assets/img/heart-regular.svg',
            //counter: likes, //PUT AMOUNT OF LIKES OUT OF DATABASE
            
        } 
    },
    methods: {
        likePost: function() { 
            var heart = document.getElementById("heart");
            if (boolLiked == true){
                heart.src = '@/assets/img/heart-regular.svg';
                this.post.reviews -= 1;
                boolLiked = false;
            }else{
                heart.src = '@/assets/img/heart-solid.svg';
                this.post.reviews+= 1;
                boolLiked = true;
            }
            
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

.feedcard__content__imagecontainer{
    width: 100%;
    height: 190px;
}

.feedcard__content__imagecontainer__image{
    width: 100%;
    height: 100%;
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

.feedcard__header__profilepiccontainer{
    width: 32px;
    height: 32px;
}

.feedcard__header__profilepiccontainer__profilepic{
    width: 100%;
    height: 100%;
    border-radius: 50px;
    object-fit: cover;
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
