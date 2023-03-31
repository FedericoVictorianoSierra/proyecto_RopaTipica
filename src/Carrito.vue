<script>
//import navegador from './components/navegador.vue'

import TablaCarrito from './components/tablacarrito.vue'
import barra from './Barra.vue'

export default {
  // Registra los subcomponentes 
  components: {
    barra
  }
}
</script>


<template>
  <barra></barra>
  <div class="carrito">   
    
    <!--<img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />-->
      <h1 id="titulo">Carrito</h1>

    <h3 id="subtitulo">Articulos</h3><br>
    
    <!--<navegador></navegador>-->
    <TablaCarrito class="tabla" striped></TablaCarrito><br>
    <b-button id="boton1" class="boton" variant="primary">Quitar artículo de la lista</b-button>
    <b-button id="boton2" class="boton" variant="primary">Agregar nuevo artículo</b-button>
    <b-button id="boton3" pill variant="outline-secondary" class="boton1"><router-link to="/Venta" exact-path>Continuar al pago</router-link></b-button><br><br><br>
    <router-link to="/menu" exact-path>Inicio</router-link>
    <p></p>
    
    <router-view></router-view>
    
  </div>
  
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

  .boton{
    border: 1px solid;
    font-size: 15px;
    color: #fff;
    text-decoration: none;
    font-family: sans-serif;
    background-color: #00b5ff;
    text-align: center;
    padding: 50 50px;
    position: flex;
    left: 2%;
    width: 190px;
    border-radius: 10px;
    justify-content: space-between;
  }
  
  .boton1{
    border: 1px solid;
    font-size: 15px;
    color: #fff;
    text-decoration: none;
    font-family: sans-serif;
    background-color: #00b5ff;
    text-align: center;
    padding: 50 50px;
    position: flex;
    left: 42.4%;
    width: 150px;
    top: -54px;
    border-radius: 10px;
  }

  .carrito{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #titulo{
    font-size: 50px;
    color: black;
    padding-bottom: 0px;
    left: 0%;
    text-align: center;
  }

  #subtitulo{
    font-size: 30px;
    color: black;
    padding-top: 80px;
    padding-bottom: 20px;
  }

  #boton1{
    background-color: #00b5ff;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: auto;
    top: 1.4px;
  }

  #boton2{
    background-color: #00b5ff;
    align-items: center;
    justify-content: center;
    text-align: center;
    left: 650px;
    height: auto;
    top: -26.4px;
  }
  
  #boton3{
    background-color: #00b5ff;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: auto;
  }

  .tabla{
    justify-content: center;
    display: flex;
    text-align: center;
    width: 1000px;
    flex-wrap: wrap;
    font-size: 20px;
  }

  .carrito{
    display: grid;
    justify-content: center;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 50px;
    padding-bottom: 20px;
    flex-wrap: wrap;
  }

  #titulo{
    font-size: 50px;
    color: black;
  }

  #subtitulo{
    font-size: 30px;
    position: relative;
    left: 0%;
    padding-top: 80px;
    padding-bottom: 20px;
    text-align: start;
  }

</style>