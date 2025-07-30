<template>
  <section class="home d-flex align-items-center justify-content-center text-center min-vh-100">
    <div class="container">
      <h1 class="display-4 fw-bold mb-2">Imanol Ortiz Oga</h1>
      <h2 class="h4 text-muted mb-4">Desarrollador Web</h2>
      
      <p class="lead mb-2">Apasionado por la tecnología, estudiante y autodidacta.</p>
      <p class="lead mb-4">Con ganas de seguir creciendo profesionalmente.</p>

      <div class="row justify-content-center g-1 mb-5 align-items-center gap-3">
        <div class="col-lg-3" v-for="skill in skills" :key="skill.name">
          <i class="iconSkill" :class="skill.icon"></i>
        </div>
      </div>
      
      <div class="d-flex justify-content-center flex-wrap gap-3">
        <a href="https://wa.link/nj2c8b" target="_blank" class="btn btn-dark px-4">
          WhatsApp
        </a>
        <a href="/Ortiz Oga - Desarrollador Web.pdf" download class="btn btn-dark">
          Descargar CV
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      skills: [
        { name: 'JavaScript', icon: 'bi bi-javascript' },
        { name: 'Vue', icon: 'fa-brands fa-vuejs' },
        { name: 'React', icon: 'fa-brands fa-react' },
        { name: 'Python', icon: 'fa-brands fa-python' },
        { name: 'HTML', icon: 'fa-brands fa-html5' },
        { name: 'CSS', icon: 'fa-brands fa-css3-alt' },
      ]
    }
  }
}
</script>

<style scoped>
.home{
  background-color: #f8f9fa;
  width: 60vw;
  height: 80vh;
  padding: 0;
}
.iconSkill {
  font-size: 8vh;
  color: #343a40;
}

@media (hover: hover) {
  .btn:hover {
    background-color: #42b883;
    border-color: #42b883;
  }
}
</style>
