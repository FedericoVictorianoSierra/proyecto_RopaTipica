<template>
    <link href="./assets/css/style.min.css" rel="stylesheet">
    <!-- Navbar Start -->
    <div class="container-fluid p-0 nav-bar">
        <nav class="navbar navbar-expand-lg bg-none navbar-dark py-3">
            <a href="index.html" class="navbar-brand px-lg-4 m-0">
                <h1 class="m-0 display-4 text-uppercase text-white">La Mixtequita</h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div class="navbar-nav ml-auto p-4">
                    <router-link to="/menu" exact-path><a class="nav-item nav-link active">INICIO</a></router-link>
                    <router-link to="/Articulos" exact-path><a class="nav-item nav-link">ARTICULOS</a></router-link>
                    <router-link to="/Carrito" exact-path><a class="nav-item nav-link">CARRITO</a></router-link>
                    <router-link to="/Perfil" exact-path><a class="nav-item nav-link">PERFIL</a></router-link>
                </div>
            </div>

        </nav>
    </div>
    <!-- Navbar End -->


    <!-- Page Header Start -->
    <div class="container-fluid page-header mb-4 position-relative overlay-bottom">
        <div class="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style="min-height: 400px">
            <h1 class="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">EXPLORAR ARTICULOS</h1>

        </div>
    </div>
    <!-- Page Header End -->
</template>