
<template>
  <div id="app">
    <Sidebar v-if="$route.meta.requiresAuth"/>

    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/signup"> Sign Up </router-link>
      <router-link to="/login">Log in</router-link>
      <router-link to="/settings"> Settings </router-link>
      <router-link to = "/inventoryPage"> Inventory Page</router-link>
    </div>
    <!-- Render the content of the current page view -->
    <router-view/>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue' // Adjust the path if necessary
export default {
  name: 'App',
  components: {
    Sidebar // Register the Sidebar component here
  },
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
