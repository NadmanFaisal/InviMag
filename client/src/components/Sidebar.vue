<template>
  <b-col cols="2" class="sidebar sidebarResponsive">

    <!-- Company Name/Header Section -->
    <b-col cols="12" class="company-name-container">
      <label for="company-name" class="company-name-label form-label">COMP NAME</label>
    </b-col>

    <!-- Top Navigation Section -->
    <div class="top-navigation-container">
      <ul>
        <li v-for="item in navItems" :key="item.name">
          <b-card class="card">
            <router-link :to="item.route" class="nav-link">
              <span class = "nav-icon" v-html="item.icon"></span>
              <span>{{ item.name }}</span>
            </router-link>
          </b-card>
        </li>
      </ul>
    </div>

    <!-- Bottom Navigation Section -->
    <div class="bottom-navigation-container">
      <b-card class="card settings-card">
        <router-link class="nav-link" to="/settings">
          <svg class = "nav-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" fill="url(#pattern0_96_109)"/><defs><pattern id="pattern0_96_109" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_96_109" transform="scale(0.0111111)"/></pattern><image id="image0_96_109" width="90" height="90" xlink:href="data:image/png;base64,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"/>
            </defs>
          </svg>
          <span>Settings</span></router-link>
      </b-card>
      <b-card class="card">
        <a class="nav-link" href="#" @click="logOut">
        <svg  class = "nav-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" fill="url(#pattern0_96_110)"/><defs><pattern id="pattern0_96_110" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_96_110" transform="scale(0.0111111)"/></pattern><image id="image0_96_110" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJklEQVR4nO3dvW4TQRTF8ROKABIvQHjD8FGSNwCJhoKKinegQDxBIAWEl0BCogIHRVR/tNJECijYa2dnfXxyf/2O5x6tZm3P1axUSimllFJKKQmA28AT4CNwxu44a3N+BOzLGfAA+MLuOx1qkfGdnBDyhc+Wd3ZbLtI8lBvghDwf5AZYkGchN4SSG0LJDaHkhlByQyi5IZTcEEpuCCU3hJIbQskNoeSGUHJDKLkhlNwQSm4IpXG13wVetw3e78CLYWuvgp4+6CHkf73rEjahtLruvSW7S9OHTSiNq/3nkiGmDZtQGlf7yxXDTBc2oTS+p2UIs3/YhNL4+veBtyuGew/cqaCvsObN1j9sQmn9HPqGTShtlkW/sAmlDXULm1C6hi5hM6/fwFPg4DpBGNU1/qsf8zrqHfAW6nruNqHB/e4Jz1/XN7cJMceSsYW6vrpNKHXpeOY2oYuH4VE9DIPohn+9m41VyBX03+on+Aa0pvpTaUNWIbcPiSSnkG960NRW1mxBv1oxTG3OrjIi5FvAryVDVLvBhEGf/+fyaqCZeOl4c8Wl1RLWIeh7Lezz1h42NNRUk+PUQV8KfE+9EUpuCCU3hJIbQskNoeSGUHJDKLkhlNwQSm4IJTeEkhtCyQ2h5IZQchN6COwPuWnHtqc5lhvgMXkO5ab1Ngxn46f4ZHn0/KWXKZyGhHwgZ601anjFxvGOPSAXbc6HtndyKaWUUkoppWhL/gA8W92XIF47ywAAAABJRU5ErkJggg=="/>
          </defs>
        </svg>
          <span>Log out</span>
        </a>
      </b-card>
    </div>

  </b-col>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Sidebar',
  data() {
    return {
      navItems: [
        { name: 'Home', route: '/', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 22V12H15V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
        { name: 'Inventory', route: '/inventoryPage', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="24" height="24" fill="url(#pattern0_96_104)"/><defs><pattern id="pattern0_96_104" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_96_104" transform="scale(0.0111111)"/></pattern><image id="image0_96_104" width="90" height="90" xlink:href="data:image/png;base64,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"/></defs></svg>' },
        { name: 'Suppliers', route: '/suppliersPage', icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="url(#pattern0_96_106)"/><defs><pattern id="pattern0_96_106" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_96_106" transform="scale(0.0111111)"/></pattern><image id="image0_96_106" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQElEQVR4nO3cTaimYxgH8Mt3+cpHzULkayWlLIwlYiISyU5ZCAvEUjNGkYWRhRk0NVmwY4ssxvdCxmZCFkzylWHSxAIxJX56Ok+KMue87zzve1/nep7f8izOc9//85xz7vt6r/uOmEwmk8lkMplMJpPJbHAh7sBzeAff4Cf8gV/xdf/1R3DpjN9+3HAi7sVes3sTF7eeQ2o4CnfioCPzO25rPZ+UcCZ2G86fuKn1vFLB2fjc8LrfjPtxIzbEmOF0fGbxDuEFnBUj/Zv8muX6DpfFmOB2bfyIc2MMcAL2a+fdGAPcpb1NUR32tE4Zb0Rl2CCHbht/RlSFm+VRdweJJ+XxVFSFt+WxO6rCJ/L4IqqysjvL4mBUZaWMmcWhqAq/yOPnqAr75LEvqjJsgf9IvRVV4WF5PBpV4XJ5XBGV4dPWCeNLHB2V4ZnWKePZqAxX9Z9St9aN4cqoCq/I4+WoSq5ax8dRFT6Qx56oCrvksTOqwvXyuC4qw3utE8b7XRNPVIbz8VHDkD/EeTEW2NEg5B0xNlY6PZfthhgbHI8flhjyARwXY4QHlxj0fTHyMytfLSHkbkd6bIwZNi240FS7gDQLbF1g0Jtbzy/bCYCXFhDyi+U3JrPCMQOvrXeNdpWxFkOlvKaHjZkp6CnoUsyv6+vbjo04qfU80jOfb3FJ67GvK+Z7k6eQZwz56jmC3r6wn3rhusfeOYLe2Hrs6wZO7S82mcfJrce/Xrbetx7JkeVV6t1P4HvtdEdJtnVjWW6y/z7Yec8QDY/xP/oJZrEtlnwJyt14tT+5OojDPK/lm/xfBxYd7gV4oG8x+GsRMzjMs1NZRLgX9b+2SzmvEmMKuv+ndkuL5pgYS9C4tuvMzDYBs9u8ltVBv5rZMtQ41xLwaXheYzFc0Gtej+OUoca52oPOSXIWxYBBb5nhjX5oqHGutpLo7glVLOiFmufiqXnqEQtTNeinJRPVgu7bbQfb0Q2lYtA7JRSVgu5rxb9JKIoFfY2koljQj0kqigX9uqSiWNDNahljC7rl7bijCjrliqNc0OuRZKIqyURVkomqJBNVSSaqkkxUJdfNvvujKrlawh6Pqqx8iNqF3fLN/qfJ8W9Xvrg4J3dEJAAAAABJRU5ErkJggg=="/</defs></svg>' },
        { name: 'Products', route: '/products', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="24" height="24" fill="url(#pattern0_96_107)"/><defs><pattern id="pattern0_96_107" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_96_107" transform="scale(0.0111111)"/></pattern><image id="image0_96_107" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACHklEQVR4nO3cvU4UcRiF8X8lrbGS1UjEVu4MLWXLLbkEVu4HY7VegckSboBstTbHTDKTbMx+jDrvmXdmnl9LAu88nAwFgVIAAACwh6SFpNt9H0O3kRvENkRuENsQuUFsQ+QGsQ2Rpxdb0ktJc0krSRsdtpZ02WHkxuLE57ysv/Yhm/r2m+pZSkaSriT9bBFjHRS5q9iN6lk+loRLfmxx/KOkD4GRW71GJF20HMWTpFclC0nLBEuOWvZdyaBexzbJkiOW/UvS+9I3SfdJI3cZ+2tJvOZly8+xULzb/3wF9rvqI2tudZg8kVvHlvTuyHD6WfWJo5bJIv9N7Fyrrr7DqQ5KMqDxHhMgzarHuuZUQ0pxxBRWPfY1pxlUHXTUa26z6hLtwBeenEJoD0KbENqE0CaENhlq6K2kL5JmHd45q3/JeuqXEv+kqzuPPUCEm8B7q9idi7p39/AI54H3vo44OOre3cMjzALvfRNxcNS9u4cP7dUxjzg46t7dwyNs63cpPwyDQw/OUBc9OIQ2IbQJoU0IbUJoE0KbENqE0CaENiG0CaFNCG1CaBNCmxDahNAmhDYhtAmhTQhtQmgTQpsQ2oTQJoQ2IbQJoU0IbUJoE0KbEHpEoY/9z9GpeHaE/t73UybwzRH6c99PmcC1I/SZpB+arpWkF+Gh69hvJxp7Vf3doiXyH8v+VL2vRv4DciPpoXpd2JYMAAAAAABQcvsN3YEg7AUNTKIAAAAASUVORK5CYII="/></defs></svg>' },
        { name: 'Orders', route: '/orders', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="24" height="24" fill="url(#pattern0_96_108)"/><defs><pattern id="pattern0_96_108" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_96_108" transform="scale(0.0111111)"/></pattern><image id="image0_96_108" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZUlEQVR4nO2cPWsVQRSGBzUJCoqFhUl60T/gxR+gpZUBW0WwubGJ5mpp/oBfCFqZ2kJttNN0foByrdXSQgOJH1HhKvrIuBO5hMwm92Znzs7seeBCuvc9L7NnZ+ds1hhFURRFUZToALuAm8Bn/CwBj4GzwM74LjMAuMVgvAMOS/tOCmAb8IPB+Q4ckfbfhKAt74Hd0jXk3Dr6uSTtPxnszQ24AXwaIug30v6zAdgOnCwJ+5C0x6wAXnqCPi/tLSuAy56gF6S9ZYXdO3uC/gXslfaX21bwgyfsKWl/WQHc8QQ9L+0tK4ATnqAX7YqX9pcNwB6g5wm7Je0vK4AnnqDnpL1lBTDjCbppLANXgdFQQR+UrrBmXAkStAv7rXR1NWIpZND2klEKlkMGfcyJKPAoZNCjwFdN+R+dYEG7sO8hRw+4AIy732zJ/j40YZ8fgDPIMbuOn46AD3tV7wgdtF1Jf5BhfB0/+7Pqz2uKeyVQHCV+8urPfYXNNTzoVqygWw0OegUYqcMwIPeg4/TnvuLmGxp0J3bQUw0NulWnYUCuQcfrz5scBgShxEee/VlqGGD8PvLszxUOA3qrZxcRvFZxNiI3H3UvqFd2dhGaLZyNhD/f2MD4tS0EPS7gd9izkYexvVY5DJgQ8DuZytW31viY2/YkcXMBLg7pVf79FeD+kOZ7rmcGX9lWw2n1kuvPsYcBxq8fGtn+HHsYYPz6oZHtz7GHAcavHZr6/H9ljGGA8WuHpB79OeYwwPi18+/PMYcBxq/djP4caxhg/LrN6M+xhgHGr9uM/hxrGGD8us3ozxGHARMVnl2k2Z8jDQM6FZ5dpNmfVwEOBCz8/9nIFs8uNsNiLftzP8BT0ue6qTvAUdLGfmln0qQAcJt0OW1SARgB7pIe6X1dh+KxfMZdinXHfivquEkZYJ8b9ds99kfgt3SqwE8X7gPglB3JSeekKIqiKIqSGBRvNZ0DngPf3M/+PR1yeyWlKwLFufHrkn1tN8T5gpSuCBQrqqzY/qLHUtcVg+Ky3Szt1HXFAF4MUPCz1HXFYLDXeldS1xWDwQr+krquGGjriBb0tNDNUERXDIptlt1CbUS3yg/3SemKQvHg0BV6YImuKwrFV8badivlblQr7tWEdsgVJaWrKIqiKIqiKIpi6sZfceQbhWSdJHYAAAAASUVORK5CYII="/></defs></svg>' }
        // Add more navigation items here
      ]
    }
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

  .company-name-label {
  margin-top: 10%;
  color: var(--Schemes-On-Primary, #FFF);
  text-align: center;
  font-family: "Istok Web";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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

  .top-navigation-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20%;
}

.top-navigation-container .card {
  background: #37f;
  text-align: center;
  padding: 5px;
  flex: 1;
  border: none;
}

.top-navigation-container .nav-link {
  color: var(--Schemes-On-Primary, #fff);
  font-family: 'Istok Web';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

.top-navigation-container .nav-link:hover {
  color: #0056b3;
  text-decoration: none;
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
  margin-top: 50%;
}

.bottom-navigation-container .card {
  background: #37f;
  text-align: center;
  padding: 5px;
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

.nav-icon {
  margin-right: 10px;
  display: inline-block;
  width: 24px;
  height: 24px;
  fill: white;
}

ul {
  padding: 0 !important; /* Remove padding from lists */
  margin: 0 !important;  /* Remove margins from lists */
}

@media (max-width: 768px) {
    .sidebarResponsive{
      display: none;
    }
  }
  </style>
