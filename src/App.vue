<script setup>
let showSlidebar = false;
</script>

<template>

  <div>
    <header>
      <img alt="Background" class="background" src="./assets/Background.png" />
      <nav>
        <li class="showSlidebar" @click="showSlidebar=!showSlidebar">
          <img class="imgSlidebarArrow" alt="SlidebarArrow" src="./assets/SlidebarArrow.png"/>
          <ul class="slidebar" v-if="showSlidebar">
            <li><a href="">Home</a></li>
            <li><a href="">About me</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </li>
      </nav>
    </header>
    <div class="filter"></div>
    <div class="container">
      <div class="greeting"><div class="letterI">I</div><div class="space">&nbsp;</div><div class="letterA">a</div><div class="letterM">m</div></div>
    </div>
  </div>

</template>

<style scoped>

* {
  padding: 0;
  margin: 0;
}

/* Background style */
.background {
  display: flex;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
}


/* End Backgraund style */
/* Nav style */
li{
  display: flex;
  justify-content: center;
  width: 80px;
}

.slidebar{
  display: flex;
  align-content: space-around;
  position: absolute;
  color: white;
  height: 500px;
  width: 200px;
}

.showSlidebar{
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  width: 50px;
  height: 50px;
  top: 20px;
  left: 20px;
  z-index: 5;
  cursor: pointer;
  border: 1px;
}
.imgSlidebarArrow{
  display: flex;
  position: absolute;
  width: 80%;
  height: 80%;
  margin: auto;
}

/* End Nav style */

.container{
  display: flex;
  top: 500px;
  justify-content: center;
  align-items: center;
  height: 15rem;
  z-index: 5;
}

.greeting{
  display: flex;
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
  z-index: 2;
  color: white;
  font-size: 100px;
}

.letterI{
  display: flex;
  position: relative;
  animation-name: animationI;
  animation-duration: 2s;
  animation-delay: 2s;
}
@keyframes animationI {
  0% {right:0;left: 0;}
  50% {right:0px;left: 30px;}
  100% {right:30px;left: 0px;}
}

.letterA{
  display: flex;
  position: relative;
  animation-name: animationA;
  animation-duration: 2s;
  animation-delay: 2s;

}
@keyframes animationA {
  0% {bottom:0;left: 0;}
  33% {bottom:60px;left: 0;}
  66% {bottom:60px;left: 60px;}
  100% {bottom:0px;left: 60px;}
}

.letterM{
  display: flex;
  position: relative;
  animation-name: animationM;
  animation-delay: 2.5s;
  animation-duration: 1.5s;
}

@keyframes animationM {
  0% {right: 0;}
  100% {right: 85px;}
}

</style>

