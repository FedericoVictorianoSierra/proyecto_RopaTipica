<template>
     <router-view></router-view>
<head>
    <meta charset="utf-8">
    <title>KOPPEE - Coffee Shop HTML Template</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="Free Website Template" name="keywords">
    <meta content="Free Website Template" name="description">

    <!-- Favicon -->
    <link href="./assets/img/favicon.ico" rel="icon">

    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"> 

    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="./assets/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="./assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

    <!-- Customized Bootstrap Stylesheet -->
    <link href="./assets/css/style.min.css" rel="stylesheet">
</head>

<body>
    <!-- Navbar Start -->
    <div class="container-fluid p-0 nav-bar">
        <nav class="navbar navbar-expand-lg bg-none navbar-dark py-3">
            <a href="index.html" class="navbar-brand px-lg-4 m-0">
                <h1 class="m-0 display-4 text-uppercase text-white">La Mixtequita</h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
                    <barra></barra>
        </nav>
    </div>
    <!-- Navbar End -->
    <div class="container-fluid p-0 mb-5">
        <div id="blog-carousel" class="carousel slide overlay-bottom" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="./assets/img/caro1.png" height="600" alt="Image">
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h2 class="text-primary font-weight-medium m-0">Atrevete a descubrir tú idendidad</h2>
                        <h1 class="display-1 text-white m-0">ARTÍCULOS</h1>
                        <h2 class="text-white m-0">* Con la mejor calidad del país*</h2>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="./assets/img/caro2.jpg"  height="600" alt="Image">
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h2 class="text-primary font-weight-medium m-0">Di quien eres sin hablar</h2>
                        <h1 class="display-1 text-white m-0">ARTÍCULOS</h1>
                        <h2 class="text-white m-0">* Bordados a mano *</h2>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#blog-carousel" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#blog-carousel" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>
    </div>
    <!-- Menu Start -->
    <div class="container-fluid pt-5">
        <div class="container">
            <div class="section-title">
                <h4 class="text-primary text-uppercase" style="letter-spacing: 5px;">Artículos principales</h4>
                <h1 class="display-4">Blusas bordadas</h1>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="mb-5">Blusas de chaquira</h1>
                    <div class="row align-items-center mb-5">
                        <div class="col-4 col-sm-3">
                            <img class="w-100 rounded-circle mb-3 mb-sm-0" src="./assets/img/menu-1.jpg" alt="">
                            <h5 class="menu-price">$500</h5>
                        </div>
                        <div class="col-8 col-sm-9">
                            <h4>Blusa blanca chaquira</h4>
                            <p class="m-0">Blusa color blanco</p>
                            <p>Escote tipo V</p>
                            <p> Con bordados de chaquira en colores rojo, verde y amarillo</p>
                            <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Agregar al Carrito</a>
                            <p></p><a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Comprar ahora</a>
                        </div>
                    </div>
                    <div class="row align-items-center mb-5">
                        <div class="col-4 col-sm-3">
                            <img class="w-100 rounded-circle mb-3 mb-sm-0" src="./assets/img/menu-4.jpg" alt="">
                            <h5 class="menu-price">$480</h5>
                        </div>
                        <div class="col-8 col-sm-9">
                            <h4>Blusa rosa chaquira</h4>
                            <p class="m-0">Blusa color rosa</p>
                            <p>Escote tipo V</p>
                            <p> Con bordados de chaquira en colores negro,rosa, verde y amarillo</p>
                            <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Agregar al Carrito</a>
                            <p></p><a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Comprar ahora</a>
                        </div>
                    </div>
                    <div class="row align-items-center mb-5">
                        <div class="col-4 col-sm-3">
                            <img class="w-100 rounded-circle mb-3 mb-sm-0" src="./assets/img/menu-3.jpg" alt="">
                            <h5 class="menu-price">$650</h5>
                        </div>
                        <div class="col-8 col-sm-9">
                            <h4>Blusa blanca chaquira con encaje</h4>
                            <p class="m-0">Blusa color blanco</p>
                            <p>Escote tipo V con encaje en las orillas</p>
                            <p> Con bordados de chaquira en colores rojo, verde y amarillo</p>
                            <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Agregar al Carrito</a>
                            <p></p><a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Comprar ahora</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <h1 class="mb-5">Blusas del Itsmo</h1>
                    <div class="row align-items-center mb-5">
                        <div class="col-4 col-sm-3">
                            <img class="w-100 rounded-circle mb-3 mb-sm-0" src="./assets/img/menu-11.jpg" alt="">
                            <h5 class="menu-price">$720</h5>
                        </div>
                        <div class="col-8 col-sm-9">
                            <h4>Blusa negra con blanco</h4>
                            <p class="m-0">Blusa color negro con blanco</p>
                            <p>Corte recto</p>
                            <p> Con bordados a mano en colores amarillo, rosa, rojo, verde y morado</p>
                            <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Agregar al Carrito</a>
                            <p></p><a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Comprar ahora</a>
                        </div>
                    </div>
                    <div class="row align-items-center mb-5">
                        <div class="col-4 col-sm-3">
                            <img class="w-100 rounded-circle mb-3 mb-sm-0" src="./assets/img/menu-2.jpg" alt="">
                            <h5 class="menu-price">$550</h5>
                        </div>
                        <div class="col-8 col-sm-9">
                            <h4>Blusa negra elastica con olan</h4>
                            <p class="m-0">Blusa color negro</p>
                            <p>Corte recto</p>
                            <p> Con bordados a mano en colores rojo, verde, amarillo, morado, azul y rosa</p>
                            <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Agregar al Carrito</a>
                            <p></p><a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Comprar ahora</a>
                        </div>
                    </div>
                    <div class="row align-items-center mb-5">
                        <div class="col-4 col-sm-3">
                            <img class="w-100 rounded-circle mb-3 mb-sm-0" src="./assets/img/menu-33.jpg" alt="">
                            <h5 class="menu-price">$680</h5>
                        </div>
                        <div class="col-8 col-sm-9">
                            <h4>Blusa negra con transparencia</h4>
                            <p class="m-0">Blusa color negro con transparencia</p>
                            <p>Corte recto</p>
                            <p> Con bordados a mano en colores rojo, verde, amarillo y rosa</p>
                            <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Agregar al Carrito</a>
                            <p></p><a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Comprar ahora</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid pt-5">
        <div class="container">
            <div class="section-title">
                <h4 class="text-primary text-uppercase" style="letter-spacing: 5px;">Artículos principales</h4>
                <h1 class="display-4">Vestidos bordados</h1>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="mb-5">Vestido de chaquira</h1>
                    <div class="row align-items-center mb-5">
                        <div class="col-4 col-sm-3">
                            <img class="w-100 rounded-circle mb-3 mb-sm-0" src="./assets/img/v1.jpg" alt="">
                            <h5 class="menu-price">$800</h5>
                        </div>
                        <div class="col-8 col-sm-9">
                            <h4>Vestido blanco chaquira</h4>
                            <p class="m-0">Vestido color blanco</p>
                            <p>Escote tipo V con cinturilla</p>
                            <p> Con bordados de chaquira en colores rojo, verde y amarillo</p>
                            <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Agregar al Carrito</a>
                            <p></p><a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Comprar ahora</a>
                        </div>
                    </div>
                    <div class="row align-items-center mb-5">
                        <div class="col-4 col-sm-3">
                            <img class="w-100 rounded-circle mb-3 mb-sm-0" src="./assets/img/v2.jpg" alt="">
                            <h5 class="menu-price">$680</h5>
                        </div>
                        <div class="col-8 col-sm-9">
                            <h4>Vestido aqua chaquira</h4>
                            <p class="m-0">Vestido color aqua</p>
                            <p>Corte recto con manga corta</p>
                            <p> Con bordados de chaquira en colores rojo, verde y amarillo</p>
                            <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Agregar al Carrito</a>
                            <p></p><a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Comprar ahora</a>
                        </div>
                    </div>
                    <div class="row align-items-center mb-5">
                        <div class="col-4 col-sm-3">
                            <img class="w-100 rounded-circle mb-3 mb-sm-0" src="./assets/img/v3.jpg" alt="">
                            <h5 class="menu-price">$850</h5>
                        </div>
                        <div class="col-8 col-sm-9">
                            <h4>Vestido azul marino chaquira</h4>
                            <p class="m-0">Vestido color azul marino</p>
                            <p>Escote tipo strapples con olanes en la parte de la espalda</p>
                            <p> Con bordados de chaquira en colores azul, verde y amarillo</p>
                            <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Agregar al Carrito</a>
                            <p></p><a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Comprar ahora</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <h1 class="mb-5">Vestido con bordado itsmeño</h1>
                    <div class="row align-items-center mb-5">
                        <div class="col-4 col-sm-3">
                            <img class="w-100 rounded-circle mb-3 mb-sm-0" src="./assets/img/menu1.jpg" alt="">
                            <h5 class="menu-price">$920</h5>
                        </div>
                        <div class="col-8 col-sm-9">
                            <h4>Vestido amarillo bordado itsmeño</h4>
                            <p class="m-0">Vestido color amarillo con cafe</p>
                            <p>Corte recto</p>
                            <p> Con bordados a mano en colores amarillo, rojo, verde y azul</p>
                            <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Agregar al Carrito</a>
                            <p></p><a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Comprar ahora</a>
                        </div>
                    </div>
                    <div class="row align-items-center mb-5">
                        <div class="col-4 col-sm-3">
                            <img class="w-100 rounded-circle mb-3 mb-sm-0" src="./assets/img/menu2.jpg" alt="">
                            <h5 class="menu-price">$9700</h5>
                        </div>
                        <div class="col-8 col-sm-9">
                            <h4>Traje del Itsmo de Tehuantepec</h4>
                            <p class="m-0">Traje color negro de tres piezas</p>
                            <p>Corte recto</p>
                            <p> Con bordados a mano en colores rojo, verde, amarillo, morado, azul y rosa</p>
                            <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Agregar al Carrito</a>
                            <p></p><a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Comprar ahora</a>
                        </div>
                    </div>
                    <div class="row align-items-center mb-5">
                        <div class="col-4 col-sm-3">
                            <img class="w-100 rounded-circle mb-3 mb-sm-0" src="./assets/img/menu3.jpg" alt="">
                            <h5 class="menu-price">$7980</h5>
                        </div>
                        <div class="col-8 col-sm-9">
                            <h4>Vestido de gala con bordado itsmeño</h4>
                            <p class="m-0">Vestido de gala color blanco</p>
                            <p>Corte tipo sirena</p>
                            <p> Con bordados a mano en colores rojo, verde, amarillo, rosa, morado, naranja y azul</p>
                            <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Agregar al Carrito</a>
                            <p></p>
                            <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Comprar ahora</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Menu End -->


    <!-- Footer Start -->
    <div class="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
        <div class="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5" style="border-color: rgba(256, 256, 256, .1) !important;">
            <p class="mb-2 text-white">Ropa Tipica &copy; <a class="font-weight-bold" href="#">LaMixtequita</a>.<a> Todos los derechos reservados.</a></p>
            
        </div>
    </div>
    <!-- Footer End -->


    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="fa fa-angle-double-up"></i></a>

</body>
</template>

<script>
import '@/assets/css/style.min.css'
import barra from './Barra.vue'

export default {
  // Registra los subcomponentes 
  components: {
    barra
  }
}
</script>