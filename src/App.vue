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

    
