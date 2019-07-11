<template class="navigation">
  <ion-tabs @IonTabsWillChange="beforeTabChange" @IonTabsDidChange="afterTabChange">
    <ion-tab tab="home" :routes="'Home'"></ion-tab>

    <ion-tab tab="leaderboard" :routes="'Leaderboard'"></ion-tab>

    <ion-tab tab="challenges" :routes="'ListChallenges'"></ion-tab>

    <ion-tab tab="profile" :routes="'Profile'"></ion-tab>

    <!-- Use v-slot:bottom with Vue ^2.6.0 -->
    <template slot="bottom">
      <ion-tab-bar class="navigation__bar">
        <ion-tab-button class="tab" tab="home" :to="{name: 'Home'}">
          <img src="@/assets/icons/home-solid.svg" alt="home" class="navigation__bar__icon" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <!-- Provide a custom route to navigate to -->
        <ion-tab-button tab="challenges" :to="{ name: 'ListChallenges' }">
          <img
            src="@/assets/icons/list-ol-solid.svg"
            alt="list of challenges"
            class="navigation__bar__icon"
          />
          <ion-label class="tab__lable">Leaderboard</ion-label>
        </ion-tab-button>

        <!-- Provide extra data to route -->
        <ion-tab-button tab="leaderboard" :to="{ name: 'Leaderboard', params: { id: '2' } }">
          <img src="@/assets/icons/trophy-solid.svg" alt="ranking" class="navigation__bar__icon" />
          <ion-label>Challenges</ion-label>
        </ion-tab-button>

        <!-- Provide custom click handler -->
        <ion-tab-button tab="profile" :to="{name:'Profile', params: {id: '2'}}">
          <img src="@/assets/icons/user-solid.svg" alt="profile" class="navigation__bar__icon" />
          <ion-label>Profile</ion-label>
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
  top: auto !important; 
  bottom: 0px !important;
  left: 0 !important;
  height: 40px !important;
}

.navigation__bar {
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px -6px 9px -6px rgba(153, 153, 153, 0.6);
  height: 45px;
}

.navigation__bar__icon {
  height: 18px;
}
.tab {
  display: flex;
  justify-content: center;
  align-items: center;
}

ion-tab-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
ion-label {
  font-size: 10px;
  color: var(--primary-color);
  margin-top: 5px;
  margin-bottom: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>

