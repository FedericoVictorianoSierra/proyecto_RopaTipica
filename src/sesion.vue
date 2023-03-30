<script>
// Importa los subcomponentes necesarios
import InicioSesion from './components/inicio.vue'

export default {
    
  // Registra los subcomponentes 
  components: {
    InicioSesion
  },
  // Define los datos de la aplicación
  data() {
    return {
      loggedIn: false // Indica si el usuario está autenticado o no
    }
  },watch: {
    // Navega a la ruta "/hola" si el usuario está autenticado
    loggedIn(newVal) {
      if (newVal) {
        this.$router.push('/menu')
      }
    }
  },
  created() {
    // Comprueba el valor de loggedIn al crear el componente
    if (this.loggedIn) {
      this.$router.push('/menu')
    }
  }
}
</script>


<!-- Define el componente de la aplicación web -->
<template>
      <!-- Si el usuario no está autenticado, muestra el componente de inicio de sesión -->
      <div v-if="!loggedIn">
        <InicioSesion @Eventologin="loggedIn = $event"></InicioSesion>
      </div>
      <div v-else>
        <!-- Si el usuario está autenticado, se cambia a App.vue -->
        <router-view></router-view>
        <!--<router-link to="/hola" exact-path>Ir a la ruta Hola</router-link>-->
    </div>
</template>
