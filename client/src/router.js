import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue' // Both Home.vue and SignUp.vue are in the same folder
import SignUp from './views/loginPage.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'signup', component: SignUp } // Add the SignUp route
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
