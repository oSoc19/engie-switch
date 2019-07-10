<template>
    <div class="feedcard">
        <div class="feedcard__content">
            <div class="feedcard__content__header">
                <div class="feedcard__content__header__profilepic"/>
            </div>
            <div class="feedcard__content__image">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quisquam illo? Eveniet voluptas quis, libero odio necessitatibus 
                accusantium sapiente vel id possimus earum! Illum ea inventore vel dicta molestiae perferendis.
            </div>
            <div class="feedcard__content__likes">
                heart 4871
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FeedCard"
}
</script>

<style>
.feedcard{    
    display: flex;
    justify-content: center;  
}

.feedcard__content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    border-radius: 8px;
    height: 336px;
    box-shadow: 0px 5px 10px -5px rgba(170,170,170,1);
}

.feedcard__content__image{
    width: 90%;
    background-color: #258471;
    height: 208px;
}

.feedcard__content__header__profilepic{
    background-image: url("../assets/img/person.png");
    width: 32px;
    height: 32px;
    border-radius: 50px;
    background-size: cover;
    background-position: center;
    margin: 10px;
}
</style>
