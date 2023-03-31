import { createRouter, createWebHistory } from "vue-router"
import App from "./principal.vue"
import Carrito from "./Carrito.vue"
import Venta from "./Venta.vue"
import Perfil from "./Perfil.vue"
import Articulos from "./articulos.vue"

const routes = [
    {
        name: 'Inicio',
        path: '/menu',
        component: App
    },
    {
        name: 'carrito',
        path: '/Carrito',
        component: Carrito
    },
    {
        name: 'venta',
        path: '/Venta',
        component: Venta
    },
    {
        name: 'perfil',
        path: '/Perfil',
        component: Perfil
    },
    {
        name: 'articulos',
        path: '/Articulos',
        component: Articulos
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes:routes
})

export default router
