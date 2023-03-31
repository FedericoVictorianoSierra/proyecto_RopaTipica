<template>
    <b-button class="boton2" id="paypal">Paypal</b-button>
    <br><br>
    <b-button class="boton2" id="tarjeta-c">Tarjeta de Crédito</b-button>
    <br><br>
    <b-button class="boton2" id="tarjeta-d">Tarjeta de Débito</b-button>
    <br><br>
    <b-button class="boton2"  id="deposito">Depósito</b-button>
    <br><br>
</template>

<script>
    
</script>

<style>
    .boton2{
        border: 1px solid;
        font-size: 15px;
        color: #fff;
        text-decoration: none;
        font-family: sans-serif;
        background-color: #00b5ff;
        text-align: center;
        padding: 50 50px;
        display: flex;
        left: -160px;
        top:40px;
        
        height: auto;
        border-radius: 4px;
        
    }

    #paypal{
    background-color: #00b5ff;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 60px;
    
    }

  #tarjeta-c{
    background-color: #00b5ff;
    align-items: center;
    justify-content: center;
    text-align: center;
    left: -40px;
    width: 140px;
    top: -34px;
  }
  
  #tarjeta-d{
    background-color: #00b5ff;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 140px;
    top: -107px;
    left: 150px;
  }

  #deposito{
    background-color: #00b5ff;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 80px;
    top: -181.2px;
    left: 334px;
  }
</style>