<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark px-4">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav gap-2">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Inicio</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/aboutMe" class="nav-link">Sobre mí</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/projects" class="nav-link">Proyectos</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link">Contacto</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar{
  width: 100vw;
  height: 5vh;
  position: fixed;
  top: 0;
  z-index: 1000;
}
.nav-link{
  border-radius: 5px;
}
</style>

