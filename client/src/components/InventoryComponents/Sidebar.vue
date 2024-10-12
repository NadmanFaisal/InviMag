<template>
    <b-col cols="2" class=" sidebar sidebarResponsive ">
        <b-col class = "header-container sideBarHeaderFont">
          <div class = "sideBarHeaderFont">COMP NAME</div>
      <ul>
        <li v-for="item in navItems" :key="item.name">
            <b-card class = "card" >
            <router-link :to="item.route" class="nav-link">{{ item.name }}</router-link>
            </b-card>
        </li>
      </ul>
    </b-col>
        <div class="bottom-navigation-container">
            <b-card class="card settings-card">
              <router-link class="nav-link" to="/settings" >Settings</router-link>
            </b-card>
            <b-card class="card">
              <a class="nav-link" href = "#" @click = "logOut">Log out</a>
            </b-card>
          </div>
        </b-col>
  </template>
  
  <script>
  import axios from "axios"
  export default {
    name: "Sidebar",
    data() {
      return {
        navItems: [
          { name: "Home", route: "/" },
          { name: "Inventory", route: "/inventoryPage" },
          // Add more navigation items here
        ],
      };
    },
    methods: {
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
  
  <style scoped>
  .sideBarHeaderFont{
    color: white;
    font-family: 'Istok Web', sans-serif;
    font-size: 30px;
    font-weight: bold;
    transform: translateY(-45px);
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    flex-shrink: 0;
    border-radius: 0px 50px 50px 0px;
    background: #37F;   
    padding-top: 20px;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.3); /* Add shadow for depth */
    display: flex;
    flex-direction: column;
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

.header-container {
  flex-direction: column;
  width: 100%;
  margin-top: 40%;
  margin-left: 0;
}

.header-container .card {
  background: #37f;
  text-align: center;
  padding: 15px;
  flex: 1;
  border: none;
}

.header-container .nav-link {
  color: var(--Schemes-On-Primary, #fff);
  font-family: 'Istok Web';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

.header-container .nav-link:hover {
  color: #0056b3;
  text-decoration: none;
}

.bottom-navigation-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 100%;
}

.bottom-navigation-container .card {
  background: #37f;
  text-align: center;
  padding: 15px;
  flex: 1;
  border: none;
}

.bottom-navigation-container .nav-link {
  color: var(--Schemes-On-Primary, #fff);
  font-family: 'Istok Web';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

.bottom-navigation-container .nav-link:hover {
  color: #0056b3;
  text-decoration: none;
}



.card:hover {
  background: linear-gradient(
    to right,
    #ffffff3a 0%,
    #e0e0e000 50%,
    #ffffff00 100%
  );
}

ul {
  padding: 0 !important; /* Remove padding from lists */
  margin: 0 !important;  /* Remove margins from lists */
}

@media (max-width: 757px) {
    .sidebarResponsive{
      display: none;
    }
  }
  </style>
