<template>
  <body class="body">
    <link href='https://fonts.googleapis.com/css?family=Didact+Gothic' rel='stylesheet' type='text/css'>
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <div class="pagina-inicio mx-auto">
      <div class="container">
        <form class="form" v-if="!mostrarRegistro" @submit.prevent="login">
          <header class="head-form">
            <h2>Inicio de sesión</h2>
            <p>Inicia sesión usando tu nombre de usuario y contraseña</p>
          </header>
          <div class="field-set">
            <label for="email">Correo electrónico</label>
            <input type="email" class="form-control" id="email" v-model="email" placeholder="correo@gmail.com" required>
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" class="form-control" id="password" v-model="password" placeholder="1234" required>
          </div>
          <br>
          <center>
            <button type="submit" class="log-in">Iniciar sesión</button>
            <button type="button" class="btn btn-link" @click="mostrarRegistroFunc()">Registrarse</button>

            <button href="#"><i class="fa fa-facebook"></i>Facebook</button>
            <button href="#"><i class="fa fa-google-plus"></i>Google +</button>
            <button href="#"><i class="fa fa-twitter"></i>Twitter</button>
          </center>
        </form>
        <div class="mt-3">
          <registro v-if="mostrarRegistro" @submit.prevent="login" @registroComp="registroCompletado = $event"></registro>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import registro from './registro.vue'

export default {
  name: 'InicioSesion',
  data() {
    return {
      email: '',
      password: '',
      loggedIn: false,
      mostrarRegistro: false,
      registroCompletado: false
    }
  },
  methods: {
    login() {
      if (this.email === 'correo@gmail.com' && this.password === '1234' || this.registroCompletado === true) {
        alert('Bienvenido!')
        this.loggedIn = true
        //Se emite el evento que recibira App.vue
        this.$emit('Eventologin', true);
      } else {
        alert('Correo electrónico o contraseña incorrectos. Por favor, inténtelo de nuevo.')
      }
    },
    mostrarRegistroFunc() {
      this.mostrarRegistro = true;
    },
  },
  components: {
    registro
  }
}






</script>


<style>
.fa-facebook {
  color: #4F79A7;
}

.fa-google-plus {
  color: #D64E3C;
}

.fa-twitter {
  color: #4ECDED;
}

.fa-facebook,
.fa-google-plus,
.fa-twitter {
  padding: 8px;
}

/* End Global rules */

/* Start body rules */
.body {
  background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  background-attachment: fixed;
  background-repeat: no-repeat;

  font-family: 'Vibur', cursive;
  /*   the main font */
  font-family: 'Abel', sans-serif;
  opacity: .95;
  /* background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%); */
}

/* End body rules */

/* Start form  attributes */
.form {
  width: 450px;
  min-height: 500px;
  height: auto;
  border-radius: 5px;
  margin: 2% auto;
  box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
  padding: 2%;
  background-image: linear-gradient(-225deg, #E3FDF5 50%, #FFE6FA 50%);
}

/* form Container */
.form .con {
  display: -webkit-flex;
  display: flex;

  -webkit-justify-content: space-around;
  justify-content: space-around;

  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;

  margin: 0 auto;
}

/* the header form form */
header {
  margin: 2% auto 10% auto;
  text-align: center;
}

/* Login title form form */
header h2 {
  font-size: 250%;
  font-family: 'Playfair Display', serif;
  color: #3e403f;
}

header p {
  letter-spacing: 0.05em;
}

.input-item {
  background: #fff;
  color: #333;
  padding: 14.5px 0px 15px 9px;
  border-radius: 5px 0px 0px 5px;
}

/* inputs form  */
input[class="form-input"] {
  width: 240px;
  height: 50px;

  margin-top: 2%;
  padding: 15px;

  font-size: 16px;
  font-family: 'Abel', sans-serif;
  color: #5E6472;

  outline: none;
  border: none;

  border-radius: 0px 5px 5px 0px;
  transition: 0.2s linear;

}

input[id="txt-input"] {
  width: 250px;
}

/* focus  */
input:focus {
  transform: translateX(-2px);
  border-radius: 5px;
}

button {
  display: inline-block;
  color: #252537;

  width: 280px;
  height: 50px;

  padding: 0 20px;
  background: #fff;
  border-radius: 5px;

  outline: none;
  border: none;

  cursor: pointer;
  text-align: center;
  transition: all 0.2s linear;

  margin: 7% auto;
  letter-spacing: 0.05em;
}

/* Submits */
.submits {
  width: 48%;
  display: inline-block;
  float: left;
  margin-left: 2%;
}

/*       Forgot Password button FAF3DD  */
.frgt-pass {
  background: transparent;
}

/*     Sign Up button  */
.sign-up {
  background: #B8F2E6;
}


/* buttons hover */
button:hover {
  transform: translatey(3px);
  box-shadow: none;
}

/* buttons hover Animation */
button:hover {
  animation: ani9 0.4s ease-in-out infinite alternate;
}</style>