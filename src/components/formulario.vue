<template>
    <div>
        <form class="formulario">
      <!-- Custom-Files -->
      <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
      <!-- Bootstrap css -->
      <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
      <!-- Main css -->
      <link rel="stylesheet" href="css/fontawesome-all.css">
      <!-- Font-Awesome-Icons-CSS -->
      <link href="css/popuo-box.css" rel="stylesheet" type="text/css" media="all" />
      <!-- pop-up-box -->
      <link href="css/menu.css" rel="stylesheet" type="text/css" media="all" />
          <div class="prin">
      
      <div class="controls form-group">
										<select class="option-w3ls">
											<option>Selecciona el país</option>
											<option v-for="pais in paises" :value="pais">{{pais}}</option>

									  </select>
			</div>
     
      <br><br>
      <div class="controls form-group">
										<select class="option-w3ls">
											<option>Selecciona el estado</option>
											<option v-for="estado in estados" :value="estado">{{ estado }}</option>

									  </select>
			</div>
      
      <br><br>
    </div>
    <div class="sec">
      <div class="controls form-group">
										<select class="option-w3ls">
											<option>Selecciona la ciudad</option>
											<option v-for="ciudad in ciudades" :value="ciudad">{{ ciudad }}</option>

									  </select>
    </div>
    
    
      <br><br>
      <div class="controls form-group">
										<select class="option-w3ls">
											<option>Selecciona la colonia</option>
											<option v-for="colonia in colonias" :value="colonia">{{ colonia }}</option>

									  </select>
       </div>
      
      <br><br>
    </div>
  <div class="ter">
    <div class="controls form-group">
      
		<input id="numcalle" class="billing-address-name form-control" type="text" name="name" placeholder="Numero de calle" required="">
		</div>

    <br><br> 
  </div>
  <div class="cuartdiv">
    <div class="controls form-group">
      
      <input class="billing-address-name form-control" type="text" name="name" placeholder="Correo  electronico" required="">
    </div><br><br>

    
    <div class="controls form-group">
      
      <input class="billing-address-name form-control" type="text" name="name" placeholder="Codigo Postal" required="">
    </div><br><br>
  </div>
  <div class="quintdiv">
    <div class="controls form-group">
      
      <input class="billing-address-name form-control" type="text" name="name" placeholder="Detalles de envio" required="">
    </div><br><br>
    <div class="controls form-group">
      
      <input class="billing-address-name form-control" type="text" name="name" placeholder="Costo de envio" required="">
    </div><br><br>
  </div>

    </form>  
  </div>
</template>
<script>
  export default {
  data() {
    return {
      paises: ['México', 'Estados Unidos', 'Canadá'], // lista de países
      estados: ['Oaxaca', 'Guerrero', 'Nueva York'], // lista de estados, vacía al principio
      ciudades: ['Tlaxiaco','Nochixtlán','Chicago'], // lista de ciudades, vacía al principio
      colonias: ['Centro','Benito Juarez','Thomas Edisson'], // lista de colonias, vacía al principio

    }
  }
}
</script>

<style>
     .formulario{
      display: grid;
      background-color:aliceblue;
      width: 700px;
      height: 300px;
      align-items: center;
      border-radius: 50px ;
      
     }

     #numcalle{
      left:-89px;
     }
     .prin{
      
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: space-around;
      border-radius: 50px ;
      
     }
     .estado{
      
      border-radius: 50px ;
     }

     .ciudad{
      border-radius: 50px ;
      
     }

     .sec{
      
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: space-around;
      border-radius: 50px ;
     }

     .ter{
      
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: space-around;
      border-radius: 50px ;
     }

     .cuartdiv{
      
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: space-around;
      border-radius: 50px ;
     }

     .quintdiv{
      
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: space-around;
      border-radius: 50px ;
     }
</style>