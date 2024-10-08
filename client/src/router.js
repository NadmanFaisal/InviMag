import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Create from './views/SignUp.vue'
import Settings from './views/SettingsPage.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/signup', name: 'create', component: Create },
  { path: '/settings', name: 'settings', component: Settings }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
