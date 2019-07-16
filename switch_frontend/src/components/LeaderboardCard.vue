<template>
    <div>
        <ion-card class="leaderboardcard">
            <ion-card-content class="leaderboardcard__content">
                <div class="leaderboardcard__content__position">125</div>
                <div class="leaderboardcard__content__name">Surprised Pikachu</div>
                <div class="leaderboardcard__content__points">10052</div>
            </ion-card-content>
        </ion-card>
    </div>

</template>
<script>
export default {
    name:"LeaderboardCard"
}
</script>
<style>


.leaderboardcard__content{
    display: flex;
    justify-content: space-around;
    justify-items: center;
    align-content: space-around;        
}

    .leaderboardcard__content__position{
        justify-self: left;font-size: 12px;
    }

    .leaderboardcard__content__name{
        justify-self:center;font-size: 12px;
    }

    .leaderboardcard__content__points{
        justify-self:right;font-size: 12px;
    }

</style>
