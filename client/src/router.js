import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Create from './views/SignUp.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/signup', name: 'create', component: Create }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
