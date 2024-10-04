<template>
  <div>
    <h1>Inventory Page</h1>
    <div v-if="products.length">
      <h2>Products:</h2>
      <ul>
        <li v-for="product in products" :key="product._id" class="product-item">
          <h3>{{ product.name }}</h3>
          <p><strong>Quantity:</strong> {{ product.quantity }}</p>
          <p><strong>Buying Price:</strong> ${{ product.buying_price }}</p>
          <p><strong>Selling Price:</strong> ${{ product.selling_price }}</p>
          <p><strong>Category:</strong> {{ product.category }}</p>
          <p><strong>In Stock:</strong> {{ product.in_stock ? 'Yes' : 'No' }}</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No products available.</p>
    </div>
  </div>
</template>
<script>
import { productApi } from '@/api/ProductApi'
export default {
    name: "inventoryPage",
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