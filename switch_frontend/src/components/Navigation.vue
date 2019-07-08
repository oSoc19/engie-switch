<template>
    <ion-tabs @IonTabsWillChange="beforeTabChange" @IonTabsDidChange="afterTabChange">
    <ion-tab tab="home">
      <Schedule />
    </ion-tab>

    <!-- Match by "app.speakers" route name -->
    <ion-tab tab="ranking" :routes="'Next'">
      <card />
    </ion-tab>

    <!-- Match by an array of route names -->
    <ion-tab tab="list" :routes="['app.map', 'app.other.route']">
      <Map />
    </ion-tab>

    <!-- Get matched routes with a helper method -->
    <ion-tab tab="profile" :routes="getMatchedRoutes">
      <About />
    </ion-tab>

    <!-- Use v-slot:bottom with Vue ^2.6.0 -->
    <template slot="bottom">
      <ion-tab-bar class="navigation">
        <ion-tab-button tab="home">
          <ion-label><img src="@/assets/img/home-solid.svg" alt="home" class="navigation__icon"/></ion-label>
        </ion-tab-button>

        <!-- Provide a custom route to navigate to -->
        <ion-tab-button tab="list" :to="{ name: 'Next' }">
          <ion-label><img src="@/assets/img/list-ol-solid.svg" alt="list of challenges" class="navigation__icon"/></ion-label>
        </ion-tab-button>

        <!-- Provide extra data to route -->
        <ion-tab-button tab="ranking" :to="{ name: 'app.map', params: { mode: 'dark' } }">
          <ion-label><img src="@/assets/img/trophy-solid.svg" alt="ranking" class="navigation__icon"/></ion-label>
        </ion-tab-button>

        <!-- Provide custom click handler -->
        <ion-tab-button  tab="setting" @click="goToAboutTab">
          <ion-label><img src="@/assets/img/user-solid.svg" alt="profile" class="navigation__icon"/></ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </template>
  </ion-tabs>
</template>

<script>
export default {
    name: "Navigation"
}
</script>

<style>

.navigation{
    border-radius: 5px;
    box-shadow: 0px -6px 9px -6px rgba(153,153,153,0.49);
    padding: 0px 15px;
}

.navigation__icon{
    width: 30px;
}
</style>

