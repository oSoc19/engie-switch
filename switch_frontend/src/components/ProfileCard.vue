<template>
    <ion-card class="profilecard">
    <ion-card-header class="profile__header">
      <ion-card-title class="profile__header__title">{{user.username}}</ion-card-title>
    </ion-card-header>

    <ion-card-content class="profile__content" >
        <div class="profile__profilepic" :style="{ backgroundImage: 'url(' + user.profilePic + ')' }">
        </div>
        <div class="profile__content__points">
            <span>{{user.points}}</span>
            
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
.profilecard{
    margin: 16px;
    background: var(--primary-color);
}

.profile__header__title{
    font-size: 17px;
    text-align: center;
    color: white;
}
.profile__content__star{
    width: 20px !important;
    padding-left: 4px;
}

.profile__content{
    width: 100%;
    padding: 0 32px 32px 32px;
    box-sizing: border-box;
}

.profile__profilepic{
    border-radius: 50%;
    width: 45%;
    padding-top: 45%;
    background-position: center;
    background-size: cover;
    margin-left: 27.5%;
    background-color: rgb(222, 231, 238);
}

.profile__content__points{
    display:flex; 
    color: white;
    align-items: center;
    justify-content:center;
    margin-top: 16px;
}
</style>
