<template>
    <b-container :cols="10" fluid class="update-product-page-style">
      <h1>Update Product Details</h1>
      <div class="product-details">
        <div>
          <label>Name</label>
          <input type="text" v-model="name" class="input-field"/>
        </div>
        <div>
          <label>Quantity</label>
          <input type="number" v-model="quantity" class="input-field"/>
        </div>
        <div>
          <label>Price</label>
          <input type="number" v-model="buying_price" class="input-field"/>
        </div>
        <div>
          <label>Category</label>
          <input type="text" v-model="category" class="input-field"/>
        </div>
        <div>
          <label>Status</label>
          <div>
            <input
              type="radio"
              id="in-stock"
              :value="true"
              v-model="in_stock"
            />
            <label for="in-stock">In Stock</label><br>
            <input
              type="radio"
              id="out-of-stock"
              :value="false"
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
            console.log(updatedProduct)
            console.log(updatedProduct.quantity + " " + updatedProduct.in_stock)

            if(updatedProduct.quantity < 0){
                alert(" ERROR: Quantity of product must be greater than or equal to 0")
            }else if(!updatedProduct.in_stock && updatedProduct.quantity != 0){
                alert("ERROR: Out of stock must have a quantity of O")
            }else if(updatedProduct.in_stock && updatedProduct.quantity <= 0){
                alert("ERROR: In stock products CANNOT have a quantity of 0")
            }else if(updatedProduct.buying_price <= 0){
                alert("ERROR: Price of product must be greater than 0")
            }else if((this.product.name === updatedProduct.name) && (this.product.quantity === updatedProduct.quantity) && (this.product.buying_price === updatedProduct.buying_price) && (this.product.category === updatedProduct.category) && (this.product.in_stock === updatedProduct.in_stock)){
                    alert("Bad request: Updated product has identical fields to old product, Please input new values to update the product");
            }else{
                    console.log("Entered else statement")
                    const response = await productApi.updateProductById(this.id, updatedProduct);
                    alert('Product SucessFully Updated', response.data)
                    console.log('Product SucessFully Updated', response.data)
                }
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

.input-field {
    background-color: #f0f8ff; /* Light blue background */
    border: 1px solid #37f; /* Border color */
    border-radius: 10px; /* Rounded corners */
    margin-left: 10px;
    padding: 20px; /* Padding inside the input */
    width: 50%; /* Full width */
    font-family: 'Istok Web', sans-serif; /* Font family */
    font-size: 16px; /* Font size */
    margin-bottom: 10px; /* Space between inputs */
    justify-content: center;
}

.update-button {
    background-color: #37f;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Istok Web', sans-serif; /* Font family for button */
    font-weight: bold;
}

.update-product-page-style{
    font-family: "Istok Web";
    font-weight: bold;
}

  </style>