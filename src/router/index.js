import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'all',
    component: Home
  },
  {
    path: '/done',
    name: 'done',
    component: Home
  },
  {
    path: '/undone',
    name: 'undone',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
