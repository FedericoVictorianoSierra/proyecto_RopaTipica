<template>
    <div class="registro">
      <form @submit.prevent="register" class="form"> 
        <header class="head-form">
          <h2>Registro de Usuario</h2>
          <p>Ingresa tus datos</p>
        </header>
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input type="text" class="form-control" id="nombre" v-model="nombre" required>
        </div>
        <div class="form-group">
          <label for="apellidoPaterno">Apellido Paterno</label>
          <input type="text" class="form-control" id="apellidoPaterno" v-model="apellidoPaterno" required>
        </div>
        <div class="form-group">
          <label for="apellidoMaterno">Apellido Materno</label>
          <input type="text" class="form-control" id="apellidoMaterno" v-model="apellidoMaterno" required>
        </div>
        <div class="form-group">
          <label for="telefono">Teléfono</label>
          <input type="tel" class="form-control" id="telefono" v-model="telefono" required>
        </div>
        <div class="form-group">
          <label for="pais">País</label>
          <input type="text" class="form-control" id="pais" v-model="pais" required>
        </div>
        <div class="form-group">
          <label for="estado">Estado</label>
          <input type="text" class="form-control" id="estado" v-model="estado" required>
        </div>
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirmar Contraseña</label>
          <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" required>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="aceptaTerminos" v-model="aceptaTerminos" required>
          <label class="form-check-label" for="aceptaTerminos">Acepto los términos y condiciones</label>
        </div>
        <center><button type="submit" class="log-in">Crear Cuenta</button></center>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Registro',
    data() {
      return {
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        telefono: '',
        pais: '',
        estado: '',
        email: '',
        password: '',
        confirmPassword: '',
        aceptaTerminos: false
      }
    },
    methods: {
      register() {
        // Validar que la contraseña sea igual a la confirmación
        if (this.password !== this.confirmPassword) {
          alert('La contraseña y la confirmación no coinciden')
          return
        }
        
        // Validar que los campos no estén vacíos
        if (this.nombre === '' || this.apellidoPaterno === '' || this.apellidoMaterno === '' ||
            this.telefono === '' || this.pais === '' || this.estado === '' || this.email === '' ||
            this.password === '' || this.confirmPassword === '') {
          alert('Por favor, complete todos los campos')
          return
        }
        
        // Validar que el correo electrónico tenga formato válido
        if (!/\S+@\S+\.\S+/.test(this.email)) {
          alert('El correo electrónico no es válido')
          return
        }
        
        // Validar que se hayan aceptado los términos y condiciones
        if (!this.aceptaTerminos) {
          alert('Debe aceptar los términos y condiciones')
          return
        }
        
        // Si todos los campos son válidos, enviar el formulario
        alert('Registro exitoso!')
        //emitir evento
        this.$emit('registroComp', true);
        
        // Limpiar los campos del formulario
        this.nombre = ''
        this.apellidoPaterno = ''
        this.apellidoMaterno = ''
        this.telefono = ''
        this.pais = ''
        this.estado = ''
        this.email = ''
        this.password = ''
        this.confirmPassword = ''
        this.aceptaTerminos = false
      }
    }
  }
  </script>