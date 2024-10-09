<template>
  <div id="app">
    <Sidebar/>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/signup"> SignUp</router-link>
    </div>
    <!-- Render the content of the current page view -->
    <router-link to = "/inventoryPage"> Inventory Page</router-link>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
