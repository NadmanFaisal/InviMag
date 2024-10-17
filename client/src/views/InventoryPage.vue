<template>
  <b-container fluid>
    <b-row>
    <b-col :cols = "2"></b-col>
    <b-col :cols = "10" class = "top-container-style ">

    <!--This is the Header where the business Owners company name will be placed-->
    <h1 class = "companyHeader">Company Name</h1>

    <!--This is the containers that display total, in-stock, and out-of-stock products-->
    <b-row :cols = "10"  class = "productCountContainer justify-content-center main-content">
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
      <button class = "dropdown-button" @click = "toggleDropdown()"> Sort By</button>
      <div id = "dropdown-content" class = "dropdown-content">
      <a href = "#" @click = "sortByBuyingPrice"> Buying Price</a>
      <a href = "#" @click = "sortBySellingPrice"> Selling Price</a>
      <a href = "#" @click = "sortByQuantity"> Quantity</a>
      </div>
    </div>
  </b-col>
  </b-row>
  <b-row class="justify-content-center">
    <!--This is the list of products displayed along with their attributes-->
  <b-col :cols="10" sm="12" md="8">
    <b-col class = "offset-2 justify-content-center productListBox">
    <b-col v-if="products.length">
      <h2 class = "customHeader">Current Inventory</h2>
        <ul>
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
import { productApi } from '@/api/ProductApi'
import ProductCard from '../components/InventoryComponents/ProductCard.vue'

export default {
  components: { ProductCard },
  name: 'inventoryPage',
  components: {
    ProductCard // Register the ProductComponent
  },
  data() {
    return {
      search: '',
      products: []
    }
  },

  created() {
    this.fetchProducts()
    window.addEventListener('resize', this.checkScreenSize)
  },

  methods: {

    async fetchProducts() {
      try {
        const response = await productApi.getAllProducts()
        this.products = response.data.Products
        console.log(this.products)
      } catch (error) {
        console.error('An Error occured when fetching products:', error)
      }
    },

    toggleDropdown() {
      const dropdownElement = document.getElementById('dropdown-content')
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none'
      } else {
        dropdownContent.style.display = 'block'
      }
    },

    async sortByBuyingPrice() {
      try {
        const response = await productApi.getAllProductsByBuyingPrice()
        this.products = response.data.Products
      } catch (error) {
        console.error('An Error occured when sorting products:', error)
      }
    },

    async sortBySellingPrice() {
      try {
        const response = await productApi.getAllProductsBySellingPrice()
        this.products = response.data.Products
      } catch (error) {
        console.error('An Error occured when sorting products:', error)
      }
    },

    async sortByQuantity() {
      try {
        const response = await productApi.getAllProductsByQuantity()
        this.products = response.data.Products
      } catch (error) {
        console.error('An Error occured when sorting products:', error)
      }
    }
  },
  computed: {
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
  height: 270px;
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
  color: black;
  flex-shrink: 0;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);
  flex-grow: 1; /* Remaining space after the sidebar */
  position: relative;
  transform: none;
  margin-left: 16.6667%; /* Push content to the right by the width of the sidebar */
  width: 100%;
  padding: 20px;
  justify-content: center;
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
  display: none;
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
    width: 100%;
    padding: 0 10px;
}
  .productListBox{
    transform: none; /* Remove any left offset */
    margin-left: 0%;
    width: 100%;
  }
}
</style>
