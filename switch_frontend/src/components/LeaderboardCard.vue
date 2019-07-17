<template>
    <ion-card class="leaderboardcard">
        <ion-card-content class="leaderboardcard__content">
            <div class="leaderboardcard__content__position">125</div>
            <div class="leaderboardcard__content__name">Surprised Pikachu</div>
            <div class="leaderboardcard__content__points">
                <div>1052</div>
                <img src="@/assets/icons/star-solid.svg" alt="star" class="leaderboardcard__content__points__star"/>
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
    font-size: 13px;
}


.leaderboardcard__content__position{
    justify-self: left !important;
}

.leaderboardcard__content__points__star{
    width: 20px !important;
    margin-left: 5px;    
}
</style>
