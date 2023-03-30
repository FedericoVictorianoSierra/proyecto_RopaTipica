<template>
        <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                                <a class="navbar-brand" href="#">Bienvenido</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li class="nav-item">
                                                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                                                </li>
                                                <li class="nav-item">
                                                        <div class="container">

                                                        </div>
                                                        <a class="nav-link">
                                                                <router-link to="/Carrito" exact-path>Carrito</router-link></a>
                                                </li>
                                                <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle" href="#" role="button"
                                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                                Descargas
                                                        </a>
                                                        <ul class="dropdown-menu">
                                                                <li><a class="dropdown-item" href="#">Recientes</a></li>
                                                                <li><a class="dropdown-item" href="#">Portafolio</a></li>
                                                                <li>
                                                                        <hr class="dropdown-divider">
                                                                </li>
                                                                <li><a class="dropdown-item" href="#">Novedades</a></li>
                                                        </ul>
                                                </li>
                                                <li class="nav-item">
                                                        <a class="nav-link">
                                                                <router-link to="/Perfil" exact-path>Perfil</router-link></a>
                                                </li>
                                        </ul>
                                        <form class="d-flex" role="search">
                                                <input class="form-control me-2" type="search" placeholder="Search"
                                                        aria-label="Search">
                                                <button class="btn btn-outline-success" type="submit">Search</button>
                                        </form>
                                        <router-view></router-view>
                                </div>
                        </div>
                </nav>

        </div>
</template> 

<style></style>