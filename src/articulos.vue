<template>

    <router-view></router-view>

    <head>
        <meta charset="utf-8">
        <title>ARTICULOS</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta content="Free Website Template" name="keywords">
        <meta content="Free Website Template" name="description">

        <!-- Favicon -->
        <link href="./assets/img/favicon.ico" rel="icon">

        <!-- Customized Bootstrap Stylesheet -->
        <link href="./assets/css/style.min.css" rel="stylesheet">
    </head>

    <body>
        <barra></barra>

        <!-- Service Start -->
        <div class="container-fluid pt-5">
            <div class="container">
                <div class="section-title">
                    <h4 class="text-primary text-uppercase" style="letter-spacing: 5px;">Las mejores prendas</h4>
                    <h1 class="display-4">Compra por categoria</h1>
                </div>
                <div class="row">
                    <div class="col-lg-6 mb-5">
                        <div class="row align-items-center">
                            <div class="col-sm-5">
                                <img class="img-fluid mb-3 mb-sm-0" src="./assets/img/blusa.jpg" alt="">
                            </div>
                            <div class="col-sm-7">
                                <h4>BLUSAS</h4>
                                <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Ingresar</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-5">
                        <div class="row align-items-center">
                            <div class="col-sm-5">
                                <img class="img-fluid mb-3 mb-sm-0" src="./assets/img/vestidos.jpg" alt="">
                            </div>
                            <div class="col-sm-7">
                                <h4>VESTIDOS</h4>
                                <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Ingresar</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-5">
                        <div class="row align-items-center">
                            <div class="col-sm-5">
                                <img class="img-fluid mb-3 mb-sm-0" src="./assets/img/top.jpg" alt="">
                            </div>
                            <div class="col-sm-7">
                                <h4>TOP'S</h4>
                                <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Ingresar</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-5">
                        <div class="row align-items-center">
                            <div class="col-sm-5">
                                <img class="img-fluid mb-3 mb-sm-0" src="./assets/img/playera.jpg" alt="">
                            </div>
                            <div class="col-sm-7">
                                <h4>PLAYERAS</h4>
                                <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Ingresar</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-5">
                        <div class="row align-items-center">
                            <div class="col-sm-5">
                                <img class="img-fluid mb-3 mb-sm-0" src="./assets/img/cal.jpeg" alt="">
                            </div>
                            <div class="col-sm-7">
                                <h4>REBOZOS</h4>
                                <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Ingresar</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-5">
                        <div class="row align-items-center">
                            <div class="col-sm-5">
                                <img class="img-fluid mb-3 mb-sm-0" src="./assets/img/pantalon.png" alt="">
                            </div>
                            <div class="col-sm-7">
                                <h4>PANTALONES</h4>
                                <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Ingresar</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-5">
                        <div class="row align-items-center">
                            <div class="col-sm-5">
                                <img class="img-fluid mb-3 mb-sm-0" src="./assets/img/camisa.jpeg" alt="">
                            </div>
                            <div class="col-sm-7">
                                <h4>CAMISAS</h4>
                                <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Ingresar</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-5">
                        <div class="row align-items-center">
                            <div class="col-sm-5">
                                <img class="img-fluid mb-3 mb-sm-0" src="./assets/img/huarache.jpg" alt="">
                            </div>
                            <div class="col-sm-7">
                                <h4>HUARACHES</h4>
                                <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#.html">Ingresar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Service End -->


        <!-- Footer Start -->
        <div class="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
            <div class="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5"
                style="border-color: rgba(256, 256, 256, .1) !important;">
                <p class="mb-2 text-white">Ropa Tipica &copy; <a class="font-weight-bold" href="#">LaMixtequita</a>.<a>
                        Todos
                        los derechos reservados.</a></p>

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