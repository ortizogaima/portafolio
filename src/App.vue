<script setup>

</script>

<template>

  <div>
    <img alt="Background" class="background" src="./assets/Background.jpg" />
    <div class="filter"></div>
    <div> Soy la slidebar</div>
    <div class="container"><div class="saludo">Hola, Soy imanol</div></div>
  </div>

</template>

<style scoped>

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
  opacity: 0.3;
}

.container{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;
  height: 15rem;
}

.saludo{
  display: flex;
  background-color: blueviolet;
}

</style>

