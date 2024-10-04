<template>
  <div>
    <h1>Inventory Page</h1>
    <div>
      <h2>Products:</h2>
      
    </div>
    <div> {{Products}}</div>
    <div>
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
            Products: []
        }
    },

    created(){
        this.fetchProducts();
    },
    
    methods:{
        async fetchProducts(){
            try{
                const response = await productApi.getAllProducts();
                this.Products = response.data;
                console.log(this.Products);

            }catch(error){
                console.error('Error fetching products:', error);
            }
        }
    }

}


</script>