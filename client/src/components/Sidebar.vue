<template>
    <div class="sidebar sidebarResponsive">
        <h1 class = "sideBarHeaderFont">COMP name</h1>
      <ul class="navList">
        <li class="navItem" v-for="item in navItems" :key="item.name">
          <router-link :to="item.route" class="navLink">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "Sidebar",
    data() {
      return {
        navItems: [
          { name: "Home", route: "/" },
          { name: "Inventory", route: "/inventoryPage" },
          // Add more navigation items here
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  .sideBarHeaderFont{
    color: white;
    font-family: 'Istok Web', sans-serif;
    font-size: 30px;
    font-weight: bold;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 1024px;
    flex-shrink: 0;
    border-radius: 0px 50px 50px 0px;
    background: #37F;   
    padding-top: 20px;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.3); /* Add shadow for depth */
  }
  
  .navList {
    list-style-type: none;
    padding: 0;
  }
  
  .navItem {
    margin: 20px 0; /* Add space between nav items */
  }
  
  .navLink {
    text-decoration: none;
    color: white;
    font-family: 'Istok Web', sans-serif;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 20px;
    display: block;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .navLink:hover {
    background-color: #1abc9c; /* Change background on hover */
  }

  @media (max-width: 757px) {
    .sidebarResponsive{
      display: none;
    }
  }
  </style>
  