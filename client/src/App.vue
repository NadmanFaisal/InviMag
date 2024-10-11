<template>
  <div id="app">
    <Sidebar/>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/signup"> Sign Up </router-link>
      <router-link to="/login">Log in</router-link>
    </div>
    <!-- Render the content of the current page view -->
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
  padding-left: 0px !important;
}
</style>
