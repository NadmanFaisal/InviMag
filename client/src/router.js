import { createRouter, createWebHistory } from 'vue-router'
import { Api } from '@/Api'

import Home from './views/Home.vue'
import LogIn from './views/loginPage.vue'
import SignUp from './views/SignUp.vue'
import Settings from './views/SettingsPage.vue'
import InventoryPage from './views/InventoryPage.vue'
import OrderHistoryPage from './views/OrderHistoryPage.vue'
import SuppliersPage from './views/SuppliersPage.vue'
import SupplierDetail from './components/SupplierComponents/SupplierDetail.vue'
import UpdateProductDetails from './components/InventoryComponents/UpdateProductDetails.vue'

// we can specify what pages requires authentication (being logged in), so that unauthorized users cant access it
const routes = [
  { path: '/', name: 'home', component: Home, meta: { requiresAuth: true } },
  { path: '/login', name: 'login', component: LogIn, meta: { requiresAuth: false } },
  { path: '/signup', name: 'signup', component: SignUp, meta: { requiresAuth: false } },
  { path: '/settings', name: 'settings', component: Settings, meta: { requiresAuth: true } },
  { path: '/inventoryPage', name: 'InventoryPage', component: InventoryPage, meta: { requiresAuth: true } },
  { path: '/orders', name: 'OrderHistoryPage', component: OrderHistoryPage, meta: { requiresAuth: true } },
  { path: '/suppliersPage', name: 'Suppliers', component: SuppliersPage, meta: { requiresAuth: true } },
  { path: '/supplier/:id', name: 'SupplierDetail', component: SupplierDetail, meta: { requiresAuth: true }, props: true },
  { path: '/product/:id', name: 'UpdateProductDetails', component: UpdateProductDetails, meta: { requiresAuth: true }, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// checks authentication for user, important to allow users to enter authenticated pages
async function isAuthenticated() {
  try {
    const response = await Api.get('http://localhost:3000/v1/api/BusinessOwners/check-auth')
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
