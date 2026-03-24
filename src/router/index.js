import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import UnicaPage from '../pages/UnicaPage.vue'
import ListaPage from '../pages/ListaPage.vue'

const routes = [
  { path: '/', name: 'landing', component: LandingPage },
  { path: '/unica', name: 'unica', component: UnicaPage },
  { path: '/lista', name: 'lista', component: ListaPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
