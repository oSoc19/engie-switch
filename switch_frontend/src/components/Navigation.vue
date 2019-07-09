<template class="navigation">
  <ion-tabs @IonTabsWillChange="beforeTabChange" @IonTabsDidChange="afterTabChange">
    <ion-tab tab="home" :routes="'Home'"></ion-tab>

    <ion-tab tab="leaderboard" :routes="'Leaderboard'"></ion-tab>

    <ion-tab tab="challenges" :routes="'ListChallenges'"></ion-tab>

    <ion-tab tab="profile" :routes="'Profile'"></ion-tab>

    <!-- Use v-slot:bottom with Vue ^2.6.0 -->
    <template slot="bottom">
      <ion-tab-bar class="navigation__bar">
        <ion-tab-button tab="home" :to="{name: 'Home'}">
          <ion-label>
            <img src="@/assets/icons/home-solid.svg" alt="home" class="navigation__bar__icon" />
          </ion-label>
        </ion-tab-button>

        <!-- Provide a custom route to navigate to -->
        <ion-tab-button tab="challenges" :to="{ name: 'ListChallenges' }">
          <ion-label>
            <img
              src="@/assets/icons/list-ol-solid.svg"
              alt="list of challenges"
              class="navigation__bar__icon"
            />
          </ion-label>
        </ion-tab-button>

        <!-- Provide extra data to route -->
        <ion-tab-button tab="leaderboard" :to="{ name: 'Leaderboard', params: { id: '2' } }">
          <ion-label>
            <img src="@/assets/icons/trophy-solid.svg" alt="ranking" class="navigation__bar__icon" />
          </ion-label>
        </ion-tab-button>

        <!-- Provide custom click handler -->
        <ion-tab-button tab="profile" :to="{name:'Profile', params: {id: '2'}}">
          <ion-label>
            <img src="@/assets/icons/user-solid.svg" alt="profile" class="navigation__bar__icon" />
          </ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </template>
  </ion-tabs>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    beforeTabChange() {},
    afterTabChange() {}
  }
};
</script>

<style>
.navigation {
  position: fixed !important;
}

.navigation__bar {
  border-radius: 5px;
  box-shadow: 0px -6px 9px -6px rgba(153, 153, 153, 0.6);
  height: 40px;

}

.navigation__bar__icon {
  height: 23px;
}
</style>

