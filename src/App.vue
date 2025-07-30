<!-- <script setup>
import { ref } from 'vue'
import Slidebar from './components/Slidebar.vue'
import Background from './components/Background.vue'


const clickIt = ref(false)
const changeClickIt = () => {
  clickIt.value = !clickIt.value
}


</script>

<template>
  <header>
    <div class="wrapper" @click="changeClickIt">
      <Slidebar :clickIt="clickIt" />
    </div>
  </header>

  <main>
    <Background />
  </main>
</template>

<style scoped>
.wrapper{
  background-color: blueviolet;
}

</style> -->


<template>
  <div class="main">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.main {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
</style>

    
