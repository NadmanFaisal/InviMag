<template>
  <div>
    <h1>Inventory Page</h1>
    <div>
      <button></button>
      <div>

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
                console.error('Error fetching products:', error);
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
  bottom: -700px; /* 20px from the bottom of the screen */
}
.customHeader{
  padding-top: 30px;
  padding-bottom: 30px;
}


</style>