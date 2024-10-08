<template>
  <div>
    <h1>Inventory Page</h1>
    <div class = "dropdown">
      <button class = "dropdown-button" onClick = "toggleDropdown()"> Sort By</button>
      <div id = "dropdown-content" class = "dropdown-content">
      <a href = "#" @click = "sortByBuyingPrice"> Buying Price</a>
      <a href = "#" @click = "sortBySellingPrice"> Selling Price</a>
      <a href = "#" @click = "sortByQuantity"> Quantity</a>
      </div>
    </div>
    <div class = "productListBox">
    <div v-if="products.length">
      <h2 class = "customHeader">Current Inventory</h2>
      <ul>
          <ProductCard v-for="product in products" :key="product._id" :product="product"></ProductCard>
      </ul>
    </div>
    <div v-else>
      <p>No products available.</p>
    </div>
  </div>
    
  </div>
</template>
<script>
import { productApi } from '@/api/ProductApi'
import ProductCard from '../components/ProductCard.vue';

export default {
  components: { ProductCard },
    name: "inventoryPage",
    components: {
    ProductCard // Register the ProductComponent
  },
    data(){
        return {
          search: "",  
          products: [],
            
        }
    },

    created(){
        this.fetchProducts();
    },
    
    methods:{
      
        async fetchProducts(){
            try{
                const response = await productApi.getAllProducts();
                this.products = response.data.Products;
                console.log(this.products);

            }catch(error){
                console.error('An Error occured when fetching products:', error);
            }
        },

        toggleDropdown(){
          const dropdownElement = document.getElementById('dropdown-content')
          if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
          } else {
            dropdownContent.style.display = 'block';
          }
        },

        async sortByBuyingPrice(){
          try{
            const response = await productApi.getAllProductsByBuyingPrice();
            this.products = response.data.Products;
          }catch (error){
            console.error('An Error occured when sorting products:', error);
          }
        },

        async sortBySellingPrice(){
          try{
            const response = await productApi.getAllProductsBySellingPrice();
            this.products = response.data.Products;
          }catch (error){
            console.error('An Error occured when sorting products:', error);
          }
        },

        async sortByQuantity(){
          try{
            const response = await productApi.getAllProductsByQuantity();
            this.products = response.data.Products;
          }catch (error){
            console.error('An Error occured when sorting products:', error);
          }
        }
        
  }
}
          


</script>

<style scoped>
.productListBox{
  color: black;
  width: 1036px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);
  flex-grow: 1; /* Remaining space after the sidebar */
  position: absolute;
  left: 25%; /* Center horizontally based on left edge */
  bottom: -1200px; /* 20px from the bottom of the screen */
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


</style>