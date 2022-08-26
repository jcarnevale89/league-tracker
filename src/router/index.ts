import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'error',
  //   component: ErrorPage,
  // },
]

// Auth guards
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
