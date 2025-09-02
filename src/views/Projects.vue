<template>
  <section class="projects d-flex align-items-center justify-content-center text-center min-vh-100">
    <div class="container">
      <h1 class="display-5 fw-bold mb-4">Proyectos</h1>

      <div class="row g-3 containerProjects">
        <div class="row g-3 vfor" v-for="project in projects" :key="project.name">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
                <div class="left">
                  <h5 class="card-title">{{ project.name }}</h5>
                  <p class="card-text">{{ project.description }}</p>
                  <a :href="project.link" target="_blank" class="btn btn-dark">
                    Ver proyecto
                  </a>
                </div>
                <div class="right">
                  <img :src="project.img" class="card-img-top img-fluid rounded" alt="Vista previa del proyecto" />
                </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          name: 'Grabbbit',
          description: 'Sistema de envío de paquetes, página y backend.',
          link: 'https://grabbbitapp.com/',
          img: './flipi.png'
        },
        {
          name: 'Taqadam',
          description: 'Visualización de datos AI-Ready, página y sistema.',
          link: 'https://taqadam.io/',
          img: './taqadam.png'
        },
        {
          name: 'GoPic',
          description: 'Sistema que imprime fotos desde Instagram.',
          link: 'https://www.instagram.com/gopic_ok/',
          img: './gopic.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60vw;
  padding: 10vh 5vh;
  background-color: #f8f9fa;
}
h1 {
  margin-top: 32vh;
}
.containerProjects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card-body {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.card-title {
  font-weight: bold;
}
img {
  object-fit: contain;
  height: 18vh;
}
.right{
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 15vw;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1vh;
}
@media (hover: hover) {
  .btn:hover {
    background-color: #42b883;
    border-color: #42b883;
  }
}
</style>
