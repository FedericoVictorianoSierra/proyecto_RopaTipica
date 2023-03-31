<script>
//import navegador from './components/navegador.vue'

import TablaCarrito from './components/tablacarrito.vue'
import barra from './Barra.vue'

export default {
  // Registra los subcomponentes 
  components: {
    barra, TablaCarrito
  }
}
</script>


<template>
  <barra></barra>
  <div class="carrito">   
    
    <!--<img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />-->
    <header>
    <h1 id="titulos">Shopping Car</h1>
        <div>
            <img id="carritoimg" src="img/carrito-de-compras.png" alt="">
            
            <div id="numero"></div>
        </div>
    </header>

    <main>
        <div id="contenedor" class="contenedor"></div>
    </main>
    
    <div id="contenedorCompra">
        <div class="informacionCompra" id="informacionCompra">
            <h2 id="cesta">Cesta</h2>
            
            <img id="botonTrash1" class="botonTrash" src="img/trash.png" alt="">
            <TablaCarrito class="tablas" striped></TablaCarrito><br><br><br><br>
            
          </div>

        
        <div id="total">Total $700</div>
        <!--<navegador></navegador>-->
        
        <b-button class="boton1"><router-link to="/Venta" exact-path id="boton1">Continuar al pago</router-link></b-button><br><br><br>
         
        <router-view></router-view>
    </div>

    
    
    
  </div>
  
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

#cesta{
    color:aliceblue;
}

.informacionCompra{
    width: 500px;
    height: 500px;
    background-color: #2D4263;
    border-radius: 25px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
}

.botonTrash{
  display: flex;
  align-items: center;
  height: 48px;
  width: 24px;

}


#botonTrash1{
    background-color: rgba(0, 0, 0, 0);
    border:none;
   
    justify-content: center;
    top:122px;
    left: -69px;
    align-items: center;
}
#botonTrash2{
    background-color: rgba(0, 0, 0, 0);
    border:none;
   
    justify-content: center;
    top:212px;
    left: -116px;
    align-items: center;
}
#botonTrash3{
    background-color: rgba(0, 0, 0, 0);
    border:none;
    
    justify-content: center;
    top:302px;
    left:-162px;
    align-items: center;
}
#botonTrash4{
    background-color: rgba(0, 0, 0, 0);
    border:none;
    
    justify-content: center;
    top:382px;
    left: -138px;
    align-items: center;
}
#carritoimg {
    width: 50px;
    height: 50px;
    top:1px;
    left: -630px;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;
}
 
  
  .boton1{
    
    text-decoration: none;
    font-family: sans-serif;
    justify-content: center;
    text-align: center;
    padding: 50 50px;
    position: flex;
    left: -4.4%;
    width: 150px;
    top: 172px;
    border-radius: 10px;

    z-index: 1;
    background-color: #00b5ff;
    width: 250px;
    height: 35px;
    border-radius: 10px ;
    border: none;

    
  }

  #boton1{
    font-size: 17px;
    font-weight: 300;
    color: #fff;
    top: 3px;
  }

  .carrito{
    display: flex;
    
    align-items: center;
    justify-content: center;
  }

  #titulos{
    font-size: 50px;
    color: black;
    padding-bottom: 0px;
    left: -2%;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    margin: 30px 0px;
  }

  #subtitulo{
    font-size: 30px;
    color: black;
    padding-top: 80px;
    padding-bottom: 20px;
  }


  .tablas{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
    top:72px;
    left: -75px;
    width: 2000px;
  
    font-size: 17px;
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

  #titulos{
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

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
#cuerpo {
    font-family: 'Space Grotesk', sans-serif;
    background-color: #141C29;
    padding-top: 80px;
}

img {
    width: 320px;
    height: 340px;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;
}
header{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:15%;
    height: 70px;
    top: 0;
    position: fixed;
    width: 100%;

}
.scroll{
    background-color: aliceblue;
    box-shadow: .1rem .2rem .3rem #333;
}
.scroll img{
    filter: invert(15%);
}           
.scroll h1{
    color: #141C29;
}
.carrito{
    
    
    height: auto;
    
    top: 14px;
    cursor: pointer;
}
.contenedor{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
    
    margin-bottom: 20px;
}
.contenedor>div{
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    background-color: #2D4263;
    border-radius: 20px;
}
.contenedor>div:hover{
    background-color: #11294d;
}

.informacion{
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:15px;
}
.informacion>p:first-child{
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;
    font-weight: 300;
}
.informacion .precio {
    font-size: 20px;
    font-weight: 500;
}
.informacion .precio span{
    font-size: 17px;
    font-weight: 300;
}
.informacion button{
    background-color: #263143;
    width: 100px;
    height: 35px;
    border-radius: 10px;
    border: none;

    font-size: 17px;
    font-weight: 300;
    cursor: pointer;
}
.informacion button:hover{
    background-color: #2D4263;
}

.infromacio button:active{
    background-color: white;
    color: black;
}

.diseñoNumero {
    padding: 10px;
    background-color: red;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    font-size: 10px;
    position: relative;
    top: -12px;

    left: 30px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

#contenedorCompra{
    display: flex;
    justify-content: center;
    align-items: center;
    left: -200px;
    width: 100%;
    height: 100%;
    position: fixed;
    top:0px;
    
    background-color: rgba(51, 51, 51, 0.6);
    
    gap:35px;
}

.informacionCompra{
    width: 500px;
    height: 500px;
    background-color: #2D4263;
    border-radius: 25px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
}

.informacionCompra h2{
    font-weight: 300;
    margin: 50px 0px 0px 50px;
    top:-40px;
    font-size: 32px;
    width: 100%;
}

.x{
    padding-top: 30px;
    padding-right: 30px;
    cursor: pointer;
    font-size: 20px;
    color: white;
}

.productosCompra{
    font-size: 17px;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 450px;
    height: 30%;
    overflow-y: auto;
    margin-top: 50px;
}

.productosCompra > div {
    margin: 0px 45px;
    padding: 20px 0px;
    width: auto;
    border-bottom: 1px dotted black;
    display: flex;
    justify-content: space-between;
}

.productosCompra::-webkit-scrollbar{
    width: 7px;
    background-color: #141C29;
    border-radius: 5px;
}

.productosCompra::-webkit-scrollbar-thumb{
    background: white ;
    border-radius: 3px;
}

.img{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.productosCompra img{
    width: 25px;
    height: auto;
    margin-right:10px;
    border-bottom: none ;
    cursor: pointer;
}

#total{
    z-index: 1;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    color: aliceblue;;
    gap: 150px;
    top:100px;
    left: 250px;
    font-size: 27px;
    font-weight: 700;
}

#total span{
    font-weight: 300;
}

#contenedorCompra > button{
    z-index: 1;
    background-color: #263143;
    width: 300px;
    height: 45px;
    border-radius: 10px ;
    border: none;
    
    font-size: 17px;
    font-weight: 300;
}

#contenedorCompra > button:hover{
    background-color: white;
    color: black;
    
}

.none>div,
.none button, 
.none p{
    width: 0px;
    height: 0px;
    font-size: 0px;
    border: 0px;
}

.soldOut{
    background-color: red;
    padding: 7px 10px;
    border-radius: 10px;
}

</style>