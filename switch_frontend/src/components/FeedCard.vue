<template>
    <ion-card class="feedcard">
        <ion-card-header>
            <div class="feedcard__header">
                <div class="feedcard__header__profilepiccontainer">
                    <img :src="post.user.profilePic" class="feedcard__header__profilepiccontainer__profilepic"/>
                </div>
                <div class="feedcard__header__details">
                    <div class="feedcard__header__details__name">{{post.user.username}}</div>
                    <div class="feedcard__header__details__time">{{formatDate(post.dateTime)}}</div>
                </div>
            </div>
            <ion-card-title class="feedcard__header__challenge">{{post.challenge.title}}</ion-card-title>
        </ion-card-header>

        <ion-card-content class="feedcard__content">
            <div class="feedcard__content__imagecontainer">
                <img :src="post.image" :alt="post.challenge" class="feedcard__content__imagecontainer__image"/>
            </div>
            <div class="feedcard__content__likes">
                <div class="feedcard__content__likes__heart">
                    <img src="@/assets/img/heart-regular.svg" alt="heart" :id="'likebutton'+post._id" v-on:click="likePost();"/>
                    <div hidden :id="'bool' + post._id">0</div>
                </div>
                <div>{{post.reviews}}</div>
            </div>

        </ion-card-content>
    </ion-card>
</template>

<script type="text/javascript">
export default {
    name: "FeedCard",
    props: ['post'],
    methods: {
        likePost() {
            var button = document.getElementById("likebutton" + this.post._id);
            var hiddenBool = document.getElementById("bool" + this.post._id)
            window.console.log(button.src);
            if (hiddenBool.innerHTML == '1'){
                button.src = require('@/assets/img/heart-regular.svg');
                this.post.reviews -= 1;
                hiddenBool.innerHTML = '0'
            }else{
                button.src = require('@/assets/img/heart-solid.svg');
                this.post.reviews+= 1;
                hiddenBool.innerHTML = '1'
            }
        },
        formatDate(datetime) {
            let dt = new Date(datetime);
            let now = new Date();
            let diff = Math.round( (now.getTime() - dt.getTime()) / 1000);
            if(diff < 60) {
              return diff + ' sec ago';
            }
            diff = Math.floor(diff / 60);
            if(diff < 60) {
              return diff + ' min ago';
            }
            diff = Math.floor(diff / 60);
            if(diff < 24) {
              return diff + ' hour' + (diff > 1 ? 's' : '') + ' ago';
            }
            diff = Math.floor(diff / 24);
            if(diff < 7) {
              return diff + ' day' + (diff > 1 ? 's' : '') + ' ago';
            }
            return dt.toLocaleString();
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
    object-fit: cover;
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
