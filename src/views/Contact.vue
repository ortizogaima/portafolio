<template>
  <section class="contact d-flex align-items-center justify-content-center text-center min-vh-100 bg-light">
    <div class="container">
      <h1 class="display-5 fw-bold mb-4">Contacto</h1>

      <div class="d-flex justify-content-center gap-4 fs-1">
        <a href="https://wa.link/nj2c8b" target="_blank" class="text-success">
          <i class="fa-brands fa-whatsapp" style="color: #212529;"></i>
        </a>
        <a href="https://www.linkedin.com/in/imanol-ortiz-oga" target="_blank" class="text-primary">
          <i class="fa-brands fa-linkedin-in" style="color: #212529;"></i>
        </a>
        <a href="mailto:ortizogaimanol.labase@gmail.com" class="text-dark">
          <i class="fa-regular fa-envelope" style="color: #212529;"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.contact {
  width: 60vw;
}
a{
  border-radius: 12px;
}
a:hover {
  text-decoration: none;
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
  background-color: #42b883;
}
</style>
