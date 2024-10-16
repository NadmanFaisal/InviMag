<template>
    <b-col :cols="10">
        <img :src= "supplierimage" class="supplier-image">
        <b-col class="supplier-detail-style" :cols="10" v-if="supplier">
        <h1 class="supplier-title-font">{{supplier.name}}</h1>
            <!-- Display other supplier details -->
        <b-col v-if="products && products.length">
            <h2>Products I sell</h2>
            <ul>
            <div v-for="product in products" :key="product._id">
                <li class="productDisplay">
                    <p class="productTitle">Name: {{ product.name }}</p>
                <div class="attributeDisplayContainer">
                    <div class="attributeDisplayWidget">
                    <p class="attributeLabel">Quantity</p>
                    <p class="attributeValue">{{ product.quantity }} Units</p>
                    </div>
                    <div class="attributeDisplayWidget">
                    <p class="attributeLabel">Price</p>
                    <p class="attributeValue">${{ product.selling_price }}</p>
                    </div>
                    <div class="attributeDisplayWidget">
                    <p class="attributeLabel">Location</p>
                    <p class="attributeValue">{{ supplier.location_of_origin }}</p>
                    </div>
                </div>
                <div class="add-to-basket-style attributeDisplayContainer">
                <b-form-input
                    v-model="inputQuantities[product._id]"
                    placeholder="Input Quantity"
                    class="quantity-input"
                ></b-form-input>
                <b-button variant="primary" @click="addToBasket(product._id)">Add to basket</b-button>
                </div>
                </li>
            </div>
            </ul>
            </b-col>
        </b-col>
            <div v-else>
            <p></p>
            </div>
    </b-col>
</template>

<script>
import {supplierApi} from '../../api/SupplierApi'; 
import {productApi} from '../../api/ProductApi'
import supplierimage from '../SupplierComponents/Images/purple-user-icon.png'

export default{
    name: 'SupplierDetail',
    props: ['id'],
    data(){
        return{
            supplier: {},
            products: [],
            supplierimage,
            inputQuantities: {},
        }
    },
    
    created() {
        this.products = this.products || []; 
        if (this.id) {
            this.fetchSupplierDetails();
            this.fetchSupplierProducts();
        }
    },

  methods: {
    
    async fetchSupplierDetails(){
       try{
        const response = await supplierApi.getSupplierByID(this.id);
        this.supplier = response.data;
       }catch(error){
            console.error('Error fetching supplier', error);
       }
    },
    
    
    
    async fetchSupplierProducts() {
        try {
            const response = await supplierApi.getSupplierProducts(this.id);
            this.products = response.data.products;  
            console.log(this.supplier)
        } catch (error) {
            console.error('Error fetching supplier and products:', error);
        }
    },

    async addToBasket(productID){
        const inputQuantity = Number(this.inputQuantities[productID]);
        if(inputQuantity === 0){
            alert("Please Provide an input quantity")
        }else {
        //let previousAmountBought = Number(localStorage.getItem(`amountOfProductBought${id}`)) || 0;
        //const totalAmountBought = previousAmountBought+inputQuantity;
        let basket = JSON.parse(localStorage.getItem('basket')) || [];
        const supplierId = this.id;
        try{

        const response = await productApi.getProductByID(productID);
        const product = response.data;
        const avaiableQuantity = Number(response.data.quantity);
         
        let existingProductInBasket = basket.find(item => item.id === productID);
        let totalQuantityInBasket = (existingProductInBasket ? existingProductInBasket.quantity : 0) + inputQuantity;


    
        if(totalQuantityInBasket > avaiableQuantity){
            alert(`Input Quantity ${inputQuantity} cannot be greater than the total quantity of products ${avaiableQuantity}`);
        }else{
            if (existingProductInBasket) {
                // If product exists in the basket, update its quantity
                existingProductInBasket.quantity += inputQuantity;
            } else {
        
                basket.push({
                    id: productID,
                    name: product.name,
                    price: product.selling_price,
                    quantity: inputQuantity,
                    supplierID: supplierId
                });
            }
                localStorage.setItem(`basket`, JSON.stringify(basket));
                alert(`${inputQuantity} ${product.name} have been added to the basket`)
        }

        }catch(error){
            console.error('Error fetching supplier and products:', error);
        }
    }
    }

  },

    
}
</script>

<style scoped>

.supplier-title-font{
    font-family: "Istok Web";
    font-size: 50px;
    font-weight: bold;
    color: black;
}

.supplier-detail-style{
    margin-left: 16.666667%;
    font-family: "Istok Web";
}

.productDisplay {
    width: 100%;
    height: auto; /* Allow height to adjust based on content */
    padding: 20px;
    margin: 10px 0;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
}

.attributeDisplayContainer {
    display: flex;
    justify-content: left; /* Spacing between widgets */
    margin-top: 20px;
    text-align: left;
}

.attributeDisplayWidget {
    width: 130px;
    height: 130px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-right: 50px;
}

.attributeLabel {
    font-family: "Istok Web";
    font-size: 15px;
    font-weight: 700;
    text-align: center;
}

.attributeValue {
    font-family: "Istok Web";
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: grey;
}

.attributeFont {
    margin-bottom: 10px;
    color: black;
    text-align: left;
    font-family: "Istok Web";
    font-size: 15px;
    font-weight: 700;
    line-height: 1.5;
}

.productTitle {
    align-self: stretch;
    color: var(--sds-color-text-default-default);
    font-family: var(--sds-typography-heading-font-family);
    font-size: var(--sds-typography-heading-size-base);
    font-style: normal;
    font-weight: var(--sds-typography-heading-font-weight);
    line-height: 120%; /* 28.8px */
    letter-spacing: -0.48px;
}

.supplier-image {
    margin-left: 16.6667%;
    width: 250px;                  /* Adjust the width of the image */
    height: 250px;                 /* Adjust the height of the image */
    object-fit: cover;            /* Keeps the aspect ratio of the image */
    padding: 15px;
    justify-content: center;

}

.quantity-input{
    width: 22%;
}

.add-to-basket-style{
    justify-content: right;
    margin-top: -50px;
}

</style>