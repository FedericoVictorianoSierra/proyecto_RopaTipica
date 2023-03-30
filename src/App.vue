<script>
// Importa los subcomponentes necesarios
import navbar from './components/navegador.vue'
import tabla from './components/tabla.vue'

export default {
  // Registra los subcomponentes 
  components: {
    navbar,
    tabla
  }
}
</script>

<template>
  <div id="app">
    <div class="container">
      <navbar></navbar>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
      <h1>Esto es un mensaje</h1>
      <tabla></tabla>
    </div>
  </div>
</template>