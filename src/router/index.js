import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import DashBoardAdmin2 from '../components/DashBoardAdmin2.vue'
import DashBoardUser from '../components/DashBoardUser.vue'
import DashBoardAuditor from '../components/DashBoardAuditor.vue'

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
    path: '/DashBoardAdmin2',
    name: 'DashBoardAdmin2',
    component: DashBoardAdmin2
  },
  {
    path: '/DashBoardUser',
    name: 'DashBoardUser',
    component: DashBoardUser
  },
  {
    path: '/DashBoardAuditor',
    name: 'DashBoardAuditor',
    component: DashBoardAuditor
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
