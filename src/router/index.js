import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashBoardAdmin from '../components/DashBoardAdmin.vue'
import Login from '../components/Login.vue'
import CrearUsuario from '../views/CrearUsuario.vue'
import EditarUsuario from '../views/EditarUsuario.vue'
import EliminarUsuario from '../views/EliminarUsuario.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
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
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
