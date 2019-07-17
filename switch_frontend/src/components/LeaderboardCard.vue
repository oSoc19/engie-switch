<template>
    <ion-card class="leaderboardcard">
        <ion-card-content class="leaderboardcard__content">
            <div class="leaderboardcard__content__position">125</div>
            <div class="leaderboardcard__content__name">Surprised Pikachu</div>
            <div class="leaderboardcard__content__points">
                <div>1052</div>
                <img src="@/assets/icons/star-solid-white.svg" alt="star" class="leaderboardcard__content__points__star"/>
            </div>
        </ion-card-content>
    </ion-card>
</template>
<script>
export default {
    name:"LeaderboardCard"
}
</script>
<style>
@import "../css/variables.css";

.leaderboardcard__content{
    display:flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    padding-left:2px;
    padding-right: 0px;
    align-items: center;
    
    
}

.leaderboardcard__content__points{
    justify-self: right !important;
    display: flex;
    flex-direction: row;

}

.leaderboardcard__content__name{
    justify-self: center !important;
    text-align: left;
    font-size: 14px;
}


.leaderboardcard__content__position{
    justify-self: left !important;
}

.leaderboardcard__content__points__star{
    width: 20px !important;
    margin-left: 5px;    
}

.yourposition{
    background-color: var(--green);
    color: #fff;
}

.firstplace{
    background: linear-gradient(90deg,var(--goldGradientLeft) 0%,var(--goldGradientRight) 100%);
    color: #fff;
}

.secondplace{
    background: linear-gradient(90deg,var(--silverGradientLeft) 0%,var(--silverGradientRight) 100%);
    color: #fff;
}

.thirdplace{
    background: linear-gradient(90deg,var(--bronseGradientLeft) 0%,var(--bronseGradientRight) 100%);
    color: #fff;
}

</style>
