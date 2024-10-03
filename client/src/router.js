import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import InventoryPage from './views/InventoryPage.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  {path: '/inventoryPage', name:'inventoryPage', component: InventoryPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
