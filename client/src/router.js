import { createRouter, createWebHistory } from 'vue-router'
import { Api } from '@/Api'

import Home from './views/Home.vue'
import LogIn from './views/loginPage.vue'
import SignUp from './views/SignUp.vue'
import Settings from './views/SettingsPage.vue'


const routes = [
  { path: '/', name: 'home', component: Home, meta: { requiresAuth: true } },
  { path: '/login', name: 'login', component: LogIn, meta: { requiresAuth: false } },
  { path: '/signup', name: 'signup', component: SignUp, meta: { requiresAuth: false } },
  { path: '/settings', name: 'settings', component: Settings, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

async function isAuthenticated() {
  try {
    const response = await Api.get('http://localhost:3000/v1/api/check-auth')
    return response.status === 200
  } catch (error) {
    return false
  }
}

router.beforeEach(async (to, from, next) => {
  const isAuth = await isAuthenticated() // Check if the user is authenticated

  if (to.meta.requiresAuth && !isAuth) { // if page is requires authentication and user not authorized
    next({ name: 'login' }) // send him to login (or allow him to use unauthorized screens as long as he is unauthorized)
  } else if (!to.meta.requiresAuth && isAuth) { // if page does not require authentication and user is authorized
    next({ name: 'home' }) // send him home
  } else { // otherwise
    next() // allow him to access authorized pages as an authorized user or access unauthorized pages as an unauthorized user
  }
})

export default router
