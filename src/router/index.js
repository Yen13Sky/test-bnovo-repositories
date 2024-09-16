import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/repository/:id',
    name: 'Repository',
    component: () => import('../views/RepositoryView')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
