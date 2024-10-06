import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue' // Both Home.vue and SignUp.vue are in the same folder
import LogIn from './views/loginPage.vue'
import Create from './views/SignUp.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'signup', component: LogIn }, // Add the LogIn route
  { path: '/signup', name: 'create', component: Create }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
