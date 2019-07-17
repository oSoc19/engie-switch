<template>
    <ion-card class="leaderboardcard">
        <ion-card-content class="leaderboardcard__content">
            <div class="leaderboardcard__content__position">125</div>
            <div class="leaderboardcard__content__name">Surprised Pikachu</div>
            <div class="leaderboardcard__content__points">10052</div>
        </ion-card-content>
    </ion-card>
</template>
<script>
export default {
    name:"LeaderboardCard"
}
</script>
<style>
.leaderboardcard__content{
    display:flex;
    width: 100% !important;
    flex-direction: row;
}

.leaderboardcard__content__points{
    justify-self: right !important;
    margin-left: 10px
}

.leaderboardcard__content__name{
    justify-self: center !important;
    margin-left: 10px;
}

.leaderboardcard__content__position{
    justify-self: left !important;
}



</style>
