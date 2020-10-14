import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/patient',
    name: 'Jornada do Paciente',
    component: () => import('../views/Patient.vue')
  },
  {
    path: '/medical',
    name: 'Jornada do Médico',
    component: () => import('../views/Medical.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
