import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashBoardAdmin from '../components/DashBoardAdmin.vue'
//import LoginView from '../components/LoginView.vue'
import CrearUsuario from '../views/CrearUsuario.vue'
import EditarUsuario from '../views/EditarUsuario.vue'
import EliminarUsuario from '../views/EliminarUsuario.vue'
//servicios
import CrearServicio from '../views/CrearServicio.vue'
import EditarServicio from '../views/EditarServicio.vue'
import EliminarServicio from '../views/EliminarServicio.vue'
//estándares
import CrearEstandar from '../views/CrearEstandar.vue'
import EditarEstandar from '../views/EditarEstandar.vue'
import EliminarEstandar from '../views/EliminarEstandar.vue'
//criterios
import CrearCriterios from '../views/CrearCriterios.vue'




const routes = [
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
    path: '/CrearUsuario',
    name: 'CrearUsuario',
    component: CrearUsuario
  },
  {
    path: '/EliminarUsuario',
    name: 'EliminarUsuario',
    component: EliminarUsuario
  },
  {
    path: '/EditarUsuario',
    name: 'EditarUsuario',
    component: EditarUsuario
  },
  {
    path: '/CrearServicio',
    name: 'CrearServicio',
    component: CrearServicio
  },
  {
    path: '/EditarServicio',
    name: 'EditarServicio',
    component: EditarServicio
  },
  {
    path: '/EliminarServicio',
    name: 'EliminarServicio',
    component: EliminarServicio
  },
  {
    path: '/CrearEstandar',
    name: 'CrearEstandar',
    component: CrearEstandar
  },
  {
    path: '/EditarEstandar',
    name: 'EditarEstandar',
    component: EditarEstandar
  },
  {
    path: '/EliminarEstandar',
    name: 'EliminarEstandar',
    component: EliminarEstandar
  },
  {
    path: '/CrearCriterios',
    name: 'CrearCriterios',
    component: CrearCriterios
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
