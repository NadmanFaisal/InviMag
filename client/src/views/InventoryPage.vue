<template>
  <b-container fluid>
    <b-row>
    <b-col :cols = "2"></b-col>
    <b-col :cols = "10" class = "top-container-style ">

    <!--This is the Header where the business Owners company name will be placed-->
    <h1 class = "companyHeader">InvMag</h1>

    <!--This is the containers that display total, in-stock, and out-of-stock products-->
    <b-row :cols = "10"  class = "productCountContainer justify-content-center">
    <b-col sm="12" md="4" color = "#33B8FF" class = "totalFont">
      <span class = "countFont">{{totalProducts}} </span> <br><br>TOTAL PRODUCTS
    </b-col>
    <b-col sm="12" md="4" color = "#21C21C" class = "inStockFont">
      <span class = "countFont">{{inStockProducts}}</span> <br><br>IN STOCK</b-col>
    <b-col sm="12" md="4" color = "#F77575" class = "outOfStockFont">
      <span class = "countFont">{{outOfStockProducts}} </span> <br><br>OUT OF STOCK
    </b-col>
    </b-row>
    <!--This is the dropdown container that has the options of sorting the products based on different attribute fields-->
    <div sm="12" class = "dropdown">
      <button class = "dropdown-button" @click = "toggleDropdown"> Sort By</button>
      <div id = "dropdown-element" class = "dropdown-content" v-if="isDropdownOpen">
      <a href = "#" @click = "sortByBuyingPrice"> Buying Price</a>
      <a href = "#" @click = "sortByQuantity"> Quantity</a>
      </div>
    </div>
  </b-col>
  </b-row>
  <b-row class="main-content">
    <!--This is the list of products displayed along with their attributes-->
  <b-col :cols="10">
    <b-col class = "productListBox">
    <b-col v-if="products.length">
      <h2 class = "customHeader">Current Inventory</h2>
        <ul style="padding: 0; margin: 0;"> <!-- Flex container for the list -->
          <ProductCard v-for="product in products" :key="product._id" :product="product"></ProductCard>
        </ul>
      </b-col>
        <b-col v-else>
          <p>No products available.</p>
        </b-col>
      </b-col>
    </b-col>
  </b-row>
  </b-container>
</template>

<script>
import { businessOwnerApi } from '@/api/BusinessOwnerApi'
import ProductCard from '../components/InventoryComponents/ProductCard.vue'

export default {
  name: 'inventoryPage',
  components: {
    ProductCard // Register the ProductComponent
  },
  data() {
    return {
      search: '',
      products: [],
      isDropdownOpen: false
    }
  },

  created() {
    this.fetchProducts()
    window.addEventListener('resize', this.checkScreenSize)
  },

  methods: {

    async fetchProducts() { // This methods fecthes all the products owned by the business owner
      const businessOwner = JSON.parse(localStorage.getItem('businessOwner'))
      try {
        const response = await businessOwnerApi.getBusinessOwnerProducts(businessOwner.id)
        this.products = response.data.products
      } catch (error) {
        console.error('An Error occured when fetching products:', error)
      }
    },

    toggleDropdown() { // this method takes care of toggling the dropdown on and off
      this.isDropdownOpen = !this.isDropdownOpen
    },

    async sortByBuyingPrice() { // this method handle get the product and sorting it based on buying price in ascending order
      const businessOwner = JSON.parse(localStorage.getItem('businessOwner'))
      try {
        const response = await businessOwnerApi.getAllProductsByBuyingPrice(businessOwner.id)
        this.products = response.data.products
      } catch (error) {
        console.error('An Error occured when sorting products:', error)
      }
      this.isDropdownOpen = false
    },

    async sortByQuantity() { // this method fetches the products and orders them based on quantity in ascending order 
      const businessOwner = JSON.parse(localStorage.getItem('businessOwner'))
      try {
        const response = await businessOwnerApi.getAllProductsByQuantity(businessOwner.id)
        this.products = response.data.products
      } catch (error) {
        console.error('An Error occured when sorting products:', error)
      }
      this.isDropdownOpen = false
    }
  },
  computed: { // these computed properties just count the number of total, in stock, and out of stock products
    totalProducts() {
      return this.products.length
    },

    inStockProducts() {
      return this.products.filter(product => product.in_stock === true).length
    },
    outOfStockProducts() {
      return this.totalProducts - this.inStockProducts
    }

  }
}

</script>

<style scoped>

.top-container-style{
  width: 100%;
  height: auto;
  flex-shrink: 0;
  background-color: #F1F6FF;
  margin-left: 16.6667%; /* Push content to the right by the width of the sidebar */
  width: 83.3333%;
}
.companyHeader{
  color: #47F;
  font-family: "Istok Web", "Sans-serif";
  font-weight: bold;
}
.productListBox{
  justify-content: center;
  display: flex; /* Add display flex */
  flex-wrap: wrap;
  margin: 0 auto; /* Center the box itself */
  width: auto; /* Full width for centering */
}
.customHeader{
  padding-top: 30px;
  padding-bottom: 30px;
}

.dropdown{
  position: relative;
  display: inline-block;
}
.dropdown-button{
  background-color: #37F;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 10%;
}
.dropdown-content{
  justify-content: center;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.search-bar {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.buttonFormat{
  color: white;
  background-color: #37F;
  font-weight: bold;
}

.productCountContainer {
  display: flex; /* Use flexbox */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  gap: 20px; /* Space between items */
  margin-bottom: 20px; /* Add some space below the count containers */
  flex-grow: 1;
  width: auto;
}

.countFont{
  font-size: 40px;
}

.totalFont{
  width: 230px; /* Set a fixed width for each count */
  padding: 20px; /* Add padding */
  border-radius: 10px; /* Round the corners */
  background: #FFF; /* Background color */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); /* Add shadow */
  text-align: center; /* Center text */
  font-family: "Istok Web"; /* Font family */
  font-size: 15px; /* Font size */
  font-weight: 700; /* Font weight */
  line-height: 100%; /* Line height */
  color:#37F;
}
.inStockFont{width: 230px; /* Set a fixed width for each count */
  padding: 20px; /* Add padding */
  border-radius: 10px; /* Round the corners */
  background: #FFF; /* Background color */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); /* Add shadow */
  text-align: center; /* Center text */
  font-family: "Istok Web"; /* Font family */
  font-size: 15px; /* Font size */
  font-weight: 700; /* Font weight */
  line-height: 100%; /* Line height */
  color: #21C21C;
}

.outOfStockFont {
  width: 230px; /* Set a fixed width for each count */
  padding: 20px; /* Add padding */
  border-radius: 10px; /* Round the corners */
  background: #FFF; /* Background color */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); /* Add shadow */
  text-align: center; /* Center text */
  font-family: "Istok Web"; /* Font family */
  font-size: 15px; /* Font size */
  font-weight: 700; /* Font weight */
  line-height: 100%; /* Line height */
  color: #F77575;
}

.main-content {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 16.66667%;
  justify-content: center;
  width: auto;
}

@media (max-width: 768px) {
  .productCountContainer {
    font-size: 18px; /* Shrink font */
    padding: 10px; /* Shrink padding */
    columns: 12;
  }
  .top-container-style{
    margin-left: 0%;
    width: 100%;
  }
  .main-content {
    width: auto;
    padding: 0 10px;
    margin: auto;
}
  .productListBox{
    margin-left: 0%;
    width: 100%;
    justify-content: center;
  }

}
</style>
