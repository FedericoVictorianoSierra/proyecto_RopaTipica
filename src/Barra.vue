<template>
    <link href="./assets/css/style.min.css" rel="stylesheet">
    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
        <div class="navbar-nav ml-auto p-4">
            <router-link to="/menu" exact-path><a class="nav-item nav-link active">INICIO</a></router-link>
            <router-link to="/Articulos" exact-path><a class="nav-item nav-link">ARTICULOS</a></router-link>
            <router-link to="/Particular" exact-path><a class="nav-item nav-link">ARTICULO PARTICULAR</a></router-link>
            <router-link to="/Carrito" exact-path><a class="nav-item nav-link">CARRITO</a></router-link>
            <router-link to="/Perfil" exact-path><a class="nav-item nav-link">PERFIL</a></router-link>

        </div>
    </div>
</template>