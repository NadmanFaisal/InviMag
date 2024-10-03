<template>
    <div>
        <h1> Inventory Page</h1>
        <div v-if="products.length">
      <h2>Products:</h2>
      <ul>
        <li v-for="product in products" :key="product._id">
          <p>Name: {{ product.name }}</p>
          <p>Quantity: {{ product.quantity }}</p>
          <p>Buying Price: {{ product.buying_price }}</p>
          <p>Selling Price: {{ product.selling_price }}</p>
          <p>Category: {{ product.category }}</p>
          <p>In Stock: {{ product.in_stock }}</p>
        </li>
      </ul>
    </div>

    </div>
    
</template>

<script>
import { productApi} from '@/api/ProductApi'
export default {
    name: "inventoryPage",
    data(){
        return {
            products: []
        }
    },

    created(){
        this.fetchProducts
    },
    
    methods:{
        async fetchProducts(){
            try{
                const response = await productApi.getAllProducts();
                this.products = response;
            }catch(error){
                console.error('Error fetching products:', error);
            }
        }
    }

}


</script>