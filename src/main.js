import { createApp } from 'vue'
import sesion from './App.vue'


import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'


/*
import $ from './assets/lib/jquery-3.4.1.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/lib/easing/easing.min.js';
import './assets/lib/waypoints/waypoints.min.js';
import './assets/lib/owlcarousel/owl.carousel.min.js';
import './assets/lib/tempusdominus/js/moment.min.js';
import './assets/lib/tempusdominus/js/moment-timezone.min.js';
import './assets/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js';
import './assets/lib/mail/jqBootstrapValidation.min.js';
import './assets/lib/mail/contact.js';
import './assets/js/main.js';*/

/*
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
<script src="lib/easing/easing.min.js"></script>
<script src="lib/waypoints/waypoints.min.js"></script>
<script src="lib/owlcarousel/owl.carousel.min.js"></script>
<script src="lib/tempusdominus/js/moment.min.js"></script>
<script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
<script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

<script src="mail/jqBootstrapValidation.min.js"></script>
<script src="mail/contact.js"></script>

<script src="js/main.js"></script>*/



import router from './router'

import './assets/main.css'

const app = createApp(sesion)
app.use(router)

app.mount('#app')