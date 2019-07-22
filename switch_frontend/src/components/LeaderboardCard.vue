<template>
    <ion-card class="leaderboardcard">
        <ion-card-content :class="'leaderboardcard__content rank'+position" >
            <div class="leaderboardcard__content__position">{{position}}</div>
            <div class="leaderboardcard__content__name">{{user.username}}</div>
            <div class="leaderboardcard__content__points">
                <div>{{user.points}}</div>
                <img src="@/assets/icons/star-solid.svg" alt="star" :id="'rank'+position" class="leaderboardcard__content__points__star" />
            </div>
        </ion-card-content>
    </ion-card>
</template>
<script>
export default {
    name:"LeaderboardCard",
    props: ['user', 'position'],
    methods: {
        getPosition(){
            var img = document.getElementById('rank1');
            img.src= require("@/assets/icons/star-solid-white.svg")
            var img = document.getElementById('rank3');
            img.src= require("@/assets/icons/star-solid-white.svg")
            var img = document.getElementById('rank2');
            img.src= require("@/assets/icons/star-solid-white.svg")            
        }
    },
    mounted(){
        this.getPosition();
    }
    
}
</script>
<style>
@import "../css/variables.css";

.leaderboardcard{
    margin-top: 10px;
}

.leaderboardcard__content{
    display:flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding-left:12px;
    padding-right: 12px !important;
    align-items: center; 
}

.leaderboardcard__content__points{
    display: flex;
    flex-direction: row;
}

.leaderboardcard__content__name{
    text-align: left;
    font-size: 14px;
}

.leaderboardcard__content__points__star{
    width: 20px !important;
    margin-left: 5px;   
    margin-right: 20px; 
}

.yourposition{
    background-color: var(--green);
    color: #fff;
}

.rank1{
    background: linear-gradient(90deg,var(--goldGradientLeft) 0%,var(--goldGradientRight) 100%) !important;
    color: #fff;
}

.rank2{
    background: linear-gradient(90deg,var(--silverGradientLeft) 0%,var(--silverGradientRight) 100%);
    color: #fff;
}

.rank3{
    background: linear-gradient(90deg,var(--bronseGradientLeft) 0%,var(--bronseGradientRight) 100%);
    color: #fff;
}

</style>
