 <template>
    <ion-card class="leaderboardcard">
        <ion-card-content class="leaderboardcard__content"
        :class="classes">
            <div class="leaderboardcard__content__position">{{position}}</div>
            <div class="leaderboardcard__content__name">{{user.username}}</div>
            <div class="leaderboardcard__content__points">
                <div>{{user.points}}</div>
                <img src="@/assets/icons/star-solid-white.svg" alt="star" v-if="isTop3(position)" class="leaderboardcard__content__points__star" />
                <img src="@/assets/icons/star-solid.svg" alt="star" v-if="!isTop3(position)" class="leaderboardcard__content__points__star" />
            </div>
        </ion-card-content>
    </ion-card>
</template>
<script>
export default {
    name:"LeaderboardCard",
    props: ['currentUser', 'user', 'position'],
    methods: {
      isTop3(position) {
        return position == 1 || position == 2 || position == 3
      },
    },
    data() {
      return {
        classes: {}
      }
    },
    created() {
      this.classes = {}
      this.classes['rank'+this.position] = true;
      this.classes['yourposition'] = this.currentUser._id == this.user._id;
    }
}
</script>
<style>
.leaderboardcard{
    margin: 16px;
}
.leaderboardcard__content{
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
}
.leaderboardcard__content__points{
    display: flex;
}
.leaderboardcard__content__name{
    font-size: 14px;
}
.leaderboardcard__content__points__star{
    width: 20px !important;
    margin-left: 8px;
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
