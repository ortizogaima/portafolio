<script setup>

</script>

<template>

  <div>
    <img alt="Background" class="background" src="./assets/Background.png" />
    <ul class="slidebar" style="list-style:none" >
      <li>Home</li>
      <li>About me</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
    <div class="filter"></div>
    <div class="container">
      <!-- <div class="hi">Hi!</div> -->
      <div class="saludo"><div class="i">I</div><div class="space">&nbsp;</div><div class="a">a</div><div class="m">m</div></div>
    </div>
  </div>

</template>

<style scoped>

.slidebar{
  display: flex;
  align-content: space-around;
  position: absolute;
}

.background {
  display: flex;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
}

.filter{
  display: flex;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.2;
}

.container{
  display: flex;
  top: 300px;
  justify-content: center;
  align-items: center;
  /* background-color: aqua; */
  height: 15rem;
}

.saludo{
  display: flex;
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
  z-index: 2;
  color: white;
  font-size: 100px;
}

/* .i{
  display: flex;
  position: relative;
  animation-name: animationI;
  animation-duration: 2s;
}

@keyframes animationI {
  0% {right:0;left: 0;}
  50% {right:0px;left: 30px;}
  100% {right:30px;left: 0px;}
} */
.a{
  display: flex;
  position: relative;
  animation-name: animationA;
  animation-duration: 2s;
}


@keyframes animationA {
  0% {bottom:0;left: 0;}
  33% {bottom:60px;left: 0;}
  66% {bottom:60px;left: 50px;}
  100% {bottom:0px;left: 50px;}
}

.m{
  display: flex;
  position: relative;
  animation-name: animationM;
  animation-delay: 0.5s;
  animation-duration: 1.5s;
}

@keyframes animationM {
  0% {right: 0;}
  100% {right: 70px;}
}

.slidebar{
  display: flex;
  color: white;
}

li{
  display: flex;
  justify-content: center;
  width: 80px;
}

</style>

