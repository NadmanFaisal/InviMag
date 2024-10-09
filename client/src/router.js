import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'

import InventoryPage from './views/InventoryPage.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  {path: '/inventoryPage', name:'InventoryPage', component: InventoryPage},
  { path: '/signup', name: 'create', component: Create }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
