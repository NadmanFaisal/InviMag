import { createRouter, createWebHistory } from 'vue-router'
import { Api } from '@/Api'

import Home from './views/Home.vue'
import LogIn from './views/loginPage.vue'
import SignUp from './views/SignUp.vue'

const routes = [
  { path: '/', name: 'home', component: Home, meta: { requiresAuth: true } },
  { path: '/login', name: 'login', component: LogIn, meta: { requiresAuth: false } },
  { path: '/signup', name: 'signup', component: SignUp, meta: { requiresAuth: false } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

async function isAuthenticated() {
  try {
    const response = await Api.get('/check-auth')
    return response.status === 200
  } catch (error) {
    return false
  }
}

router.beforeEach(async (to, from, next) => {
  const isAuth = await isAuthenticated() // Check if the user is authenticated

  // If the route requires authentication and the user is not authenticated, redirect to login
  if (to.meta.requiresAuth && !isAuth) {
    next({ name: 'login' })
  } else if (!to.meta.requiresAuth && isAuth) {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
