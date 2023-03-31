<script>
//import navegador from './components/navegador.vue'
import TablaVenta from './components/tablaventa.vue'
import formulario from './components/formulario.vue'
import metodopago from './components/metodopago.vue'
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
  <div class="venta">
    <h1 id="titulo">
      Venta
    </h1>
    <h3 id="subtitulo">
      Articulos a pagar:
    </h3>
    <TablaVenta class="tabla"></TablaVenta>
    <h5 class="texto" id="texto1">Fecha de<br>compra: 24/03/2023</h5>
    <h6 class="texto" id="texto2">Subtotal: $200 <br>
        Descuento: $150<br>
        Total: $150<br>
        Impuesto: $100</h6><br><br>
        <div>
    <h6 class="texto" id="texto3">Detalles de envío (Aplica impuesto extra a envios internacionales)</h6>
        <formulario id="formulario"></formulario>
      </div>
    <div>
      <h6 class="texto" id="texto4">Método de pago</h6>
      <metodopago class="metodopago"></metodopago>
      <b-button class="botons"><router-link to="/menu" exact-path>Comprar</router-link></b-button>
      
      <router-view></router-view>
    </div>
  </div>
</template>
<style>
  .botons{
    border: 1px solid;
    font-size: 15px;
    color: #fff;
    text-decoration: none;
    font-family: sans-serif;
    background-color: #00b5ff;
    text-align: center;
    padding: 50 50px;
    display: flex;
    left: 42%;
    top:-202px;
    width: 70px;
    border-radius: 10px;
    justify-content: center;
  }

  .texto{

    font-size: 15px;
    color: #000;
    text-decoration: none;
    font-family: sans-serif;

    text-align: start;
    padding: 50 50px;
    position: flex;
    left: -20%;
    top: -36px;
    width: auto;
    

    justify-content: space-between;
    
  }
  #texto1{

    font-size: 15px;
    color: #000;
    text-decoration: none;
    font-family: sans-serif; 
    padding: 50 50px;
    top: 8px;
    border-radius: 10px;
  }
  #texto2{
      
      font-size: 15px;
      color: #000;
      text-decoration: none;
      font-family: sans-serif; 
      padding: 50 50px;
      top: -36px;
      left: 20px;
      border-radius: 10px;
  }
  #texto3{
      
      font-size: 15px;
      color: #000;
      text-decoration: none;
      font-family: sans-serif; 
      padding: 50 50px;
      top: -56px;
      left: -200px;
      border-radius: 10px;
  }
  #texto4{
      
      font-size: 15px;
      color: #000;
      text-decoration: none;
      font-family: sans-serif; 
      padding: 50 50px;
      top: 36px;
      left: -200px;
      border-radius: 10px;
  }

  .metodopago{
    background-color: aliceblue;
    display: flex;
    justify-content: space-between;
  }

  .venta{
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
  
  .tabla{
    justify-content: center;
    display: flex;
    border-color:blue;
    text-align: center;
    font-size: 20px;
    width: 800px;
    flex-wrap: wrap;
  }

  .venta{
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

  #formulario{
    top:-40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>