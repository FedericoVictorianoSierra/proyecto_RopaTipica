import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import Carrito from "./Carrito.vue"
import Venta from "./Venta.vue"
import Perfil from "./Perfil.vue"

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes:routes
})

export default router
