<template>
    <div>
     <table class=" table-hover table-bordered" id="tablar" style="width: 80%">
      <thead>
        <tr>
          <th>Artículo</th>
          <th>Cantidad</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(fila, index) in fila" :key="index">
          <td>{{ fila.columna1 }}</td>
          <td>{{ fila.columna2 }}</td>
          <td>{{ fila.columna3 }}</td>
        </tr>
      </tbody>
   
     </table>
   
    </div>
  </template>
   
   <script>
   export default {
     name: "TablaCarrito",
     data () {
       return {
        fila:[
        { columna1: "Artículo 1", columna2: "X1", columna3: "$100" },
        { columna1: "Artículo 2", columna2: "X2", columna3: "$200" },
        { columna1: "Artículo 3", columna2: "X3", columna3: "$300" },
        { columna1: "Artículo 4", columna2: "X1", columna3: "$100" }]
      }
    }
  }
  </script>
   
  <style scoped>
  #tablar{
    background-color: transparent;
    border-color:white;  
    
    height: 250px;
    align-items: center;
    justify-content: center;
  }
  </style>