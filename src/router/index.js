import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashBoardAdmin from '../components/DashBoardAdmin.vue'
//import LoginView from '../components/LoginView.vue'
//usuarios
import EditarUsuario from '../views/EditarUsuario.vue'
//servicios
import EditarServicio from '../views/EditarServicio.vue'
//estándares

import EditarEstandar from '../views/EditarEstandar.vue'
//criterios
import EditarCriterio from '../views/EditarCriterio.vue'

//login
import LoginView from '../components/LoginView.vue'


const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/DashBoardAdmin',
    name: 'DashBoardAdmin',
    component: DashBoardAdmin
  },
  {
    path: '/EditarUsuario',
    name: 'EditarUsuario',
    component: EditarUsuario
  },
  {
    path: '/EditarServicio',
    name: 'EditarServicio',
    component: EditarServicio
  },
  {
    path: '/EditarEstandar/:id',
    name: 'EditarEstandar',
    component: EditarEstandar
  },
  {
    path: '/EditarCriterio/:ide/:ids',
    name: 'EditarCriterio',
    component: EditarCriterio
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
