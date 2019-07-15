<template>
    <router-link v-bind:to="'/upload/' + challenge._id" class="challenge" v-on:click="toUpload(challenge._id)">
        <div class="challenge__content">
            <div class="challenge__content__imagecontainer">
              <img v-bind:src="challenge.image + '200'" v-bind:alt="challenge.title" class="challenge__content__imagecontainer__image"/>
            </div>
            <div class="challenge__content__text">
                <p class="challenge__content__text__title">{{ challenge.title }}</p>
                <p class="challenge__content__text__description">{{challenge.description | truncate(100, '...')}}</p>
            </div>
        </div>
    </router-link>
    
</template>

<script>
export default {
    name: "ChallengeCard",
    props: ['challenge'],
    methods: {
        toUpload: function(id) {
            window.console.log("id is: " + id);
            
        }
    } 
}

</script>

<style>
.challenge {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  text-decoration: none;
}

.challenge__content {
  display: flex;
  width: 88%;
  box-shadow: 0px 4px 16px -10px rgb(102, 102, 102);
  border-radius: 8px;
  height: 110px;
  padding-right: 10px;
}

.challenge__content__imagecontainer{
    margin: 12px;
    width: 36%;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    contain:content;
    display: flex;
    align-items: center;
}

.challenge__content__text {
  width: 64%;
  height: 100px;
  display: flex;
  flex-direction: column;
}

.challenge__content__text__title {
  color: #444444;
  font-weight: bolder;
  text-align: left;
  margin-bottom: 3px;
  font-size: 14px;
  margin-top: 10px;
}

.challenge__content__text__description {
  font-size: 12px;
  color: #444444;
  text-align: left;
  margin-top: 0px;
}

.challenge__content__imagecontainer__image{
  width: 150%;
}

</style>
