<!-- src/components/Footer.vue -->
<template>
  <footer>
    <p style="margin: 0;">© 2025 Imanol Ortiz Oga - Desarrollador Web</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  background-color: #222;
  color: #aaa;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  position: fixed;
  height: 5vh;
  width: 100%;
  bottom: 0;
  font-size: 0.9rem;
  user-select: none;
}

</style>
