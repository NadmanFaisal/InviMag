<template>
    <b-container fluid>
      <h1>Update Product Details</h1>
      <div class="product-details">
        <div>
          <label>Name:</label>
          <input type="text" v-model="name" />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" v-model="quantity" />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" v-model="buying_price" />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" v-model="category" />
        </div>
        <div>
          <label>Status:</label>
          <div>
            <input
              type="radio"
              id="in-stock"
              value="true"
              v-model="in_stock"
            />
            <label for="in-stock">In Stock</label>
            <input
              type="radio"
              id="out-of-stock"
              value="false"
              v-model="in_stock"
            />
            <label for="out-of-stock">Out of Stock</label>
          </div>
        </div>
      </div>
      <div class="update-controls">
        <button @click="updateProductDetails" class="update-button">Update</button>
      </div>
    </b-container>
  </template>
  
  <script>
  import { productApi } from '@/api/ProductApi';
  export default {
    name: 'UpdateProductDetails',
    props: ['id'],
    data(){
        return{
            product: {},
            name: '',
            category: '',
            buying_price: 0,
            quantity: 0,
            in_stock: true,
        }
    },
    
    created() {
        if(this.id) {
            this.fetchProductDetails();
        }
    },
    
    methods: {
      
        async fetchProductDetails(){
            try{
                const response = await productApi.getProductByID(this.id);
                this.product = response.data;
                console.log(response.data);
            }catch(error){
                console.error('Error fetching supplier', error);

            }
        },

        async updateProductDetails(){
            try{
            const updatedProduct = {
                name: this.name,
                quantity: this.quantity,
                buying_price: this.buying_price,
                selling_price: "0",
                category: this.category,
                in_stock: this.in_stock
            }

            const response = await productApi.updateProductById(this.id, updatedProduct);
            console.log('Product SucessFully Updated', response.data)
                

            }catch(error){
                console.error('Error fetching supplier', error);
            }
        }
    }
  }
  </script>
  
  <style scoped>
  .product-details {
  margin-bottom: 20px;
}

.update-button {
  background-color: #37f;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
  </style>