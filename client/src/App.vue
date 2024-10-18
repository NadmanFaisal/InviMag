<template>
  <div id="app">
    <Sidebar v-if="$route.meta.requiresAuth"/>

    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to = "/inventoryPage"> Inventory</router-link>
      <router-link to = "/suppliersPage"> Suppliers</router-link>
      <router-link to="/orders">Order history</router-link>
      <router-link to="/settings"> Settings </router-link>
      <router-link @click="logOut" to="/login">Log Out</router-link>
    </div>
    <!-- Render the content of the current page view -->
    <router-view/>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue' // Adjust the path if necessary
import axios from 'axios';
export default {
  name: 'App',
  components: {
    Sidebar // Register the Sidebar component here
  },
  methods:{
    async logOut() {
      try {
        await axios.post('http://localhost:3000/v1/api/BusinessOwners/logout')
        localStorage.removeItem('businessOwner')
        this.$router.push('/login')
      } catch (error) {
        console.error('Error during logout:', error)
      }
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-left: 0px !important;
}
#nav {
  display: none;
}

@media (max-width: 757px){
  #nav {
  display: flex;
  flex-direction: column;
}

}
</style>
