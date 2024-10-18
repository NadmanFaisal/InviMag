<template>
  <div id="app">
    <b-col cols="2">
    <Sidebar v-if="$route.meta.requiresAuth"/>
    </b-col>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/signup"> Sign Up </router-link>
      <router-link to="/login">Log in</router-link>
      <router-link to="/settings"> Settings </router-link>
      <router-link to = "/inventoryPage"> Inventory Page</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'App',
  components: {
    Sidebar
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
