<template>
    <b-col :cols="12">
    <li class="productDisplay product-card-style">
      <p class="productTitle">{{ product.name }}</p>
      <b-col class="attributeDisplayContainer">
        <b-col> 
          <p class="attributeLabel">Quantity</p>
          <p class="attributeValue">{{ product.quantity }} Units</p>
        </b-col>
        <b-col>
          <p class="attributeLabel">Price</p>
          <p class="attributeValue">${{ product.buying_price }}</p>
        </b-col>
        <b-col>
          <p class="attributeLabel">Category</p>
          <p class="attributeValue">{{ product.category }}</p>
        </b-col>
      </b-col>
      <button type="button" @click="goToUpdateProductsPage" class="update-product-button">Update Product details</button>
    </li>
    </b-col>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    data(){
        return{
            isModalVisible: false
        }
    },
    methods:{
        
        goToUpdateProductsPage(){
            this.$router.push({name: 'UpdateProductDetails', params: {id: this.product._id, product: this.product}})
        }

    }


}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Istok+Web:wght@400;700&display=swap');

.product-card-style{
    font-family: "Istok Web";
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-right: auto;
    justify-content: center;
}

.productDisplay {
    margin-bottom: 40px;
    width: 100%; /* Allow it to use full width */
    height: auto; 
    padding: 35px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);
    
}

.attributeDisplayContainer {
    display: flex;
    justify-content: space-between; /* Distribute space evenly between each attribute */
    align-items: center; /* Center vertically */
    margin-top: 20px;
    text-align: center;
    width: 100%; /* Ensure it takes the full width */
}


.attributeLabel {
    font-family: "Istok Web";
    font-size: 25px;
    font-weight: 700;
    text-align: center;
}

.attributeValue {
    font-family: "Istok Web";
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    color: grey;
}

.attributeFont {
    margin-bottom: 10px;
    color: black;
    text-align: left;
    font-family: "Istok Web";
    font-weight: 700;
    line-height: 1.5;
}

.productTitle {
    font-size: 35px;
    font-family: "Istok Web";
    font-weight: bold;
    color: black;

}

.update-product-button{
    font-family: "Istok Web";
    background-color: #37F;
    color: white;
    font-weight: bold;
    border-color: #37F;
    border-radius: 10px;
}

@media (max-width: 768px) {
    .productDisplay {
      margin-bottom: 15px; /* Less margin for smaller screens */
      flex-basis: calc(50% - 10px); /* Two cards per row */
      padding: 10px;
    }

    .attributeFont, .attributeLabel{
        font-size: 15px;
    }
    .attributeValue{
        font-size: 15px;
    }

    .productTitle{
        font-size: 20px;
    }
    

}

</style>
