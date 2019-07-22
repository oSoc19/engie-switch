<template>
    <ion-card class="profilecard">
    <ion-card-header class="profile__header">
      <ion-card-title class="profile__header__title">{{user.username}}</ion-card-title>
    </ion-card-header>

    <ion-card-content class="profile__content">
        <img :src="user.profilePic" :alt="user.username"/>
        <div class="profile__content__points">
            {{user.points}}
            <img src="@/assets/icons/star-solid.svg" alt="star" class="profile__content__star"/>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script>
export default {
    name: "ProfileCard",
    props: ['user'],
}
</script>

<style>
@import "../css/variables.css";

.profilecard{
    width: 86%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--primary-color);
}

.profile__header{
    display: flex;
    flex-direction: column;
}

.profile__header__title{
    font-size: 17px;
    text-align: center;
    color: white;
}

.profile__header__image{
    border-radius: 50px;
    align-self: center;
}

.profile__content__star{
    width: 20px !important;
    padding-left: 4px;
}

.profile__content{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile__content__points{
    display:flex;
    color: white
}
</style>
