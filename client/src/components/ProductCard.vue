<template>
    <li class="productDisplay">
      <p class="attributeFont">Name: {{ product.name }}</p>
      <p class="attributeFont">Quantity: {{ product.quantity }}</p>
      <p class="attributeFont">Buying Price: {{ product.buying_price }}</p>
      <p class="attributeFont">Selling Price: {{ product.selling_price }}</p>
      <p class="attributeFont">Category: {{ product.category }}</p>
      <p class="attributeFont">In Stock: {{ product.in_stock }}</p>
    </li>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Istok+Web:wght@400;700&display=swap');

.productDisplay {
    width: 961px;
    height: auto; /* Allow height to adjust based on content */
    padding: 20px; /* Add padding to the product card */
    margin: 10px 0; /* Add margin for spacing between cards */
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);
    display: flex; /* Use flexbox for better layout */
    flex-direction: column; /* Stack attributes vertically */
}

.attributeFont {
    margin-bottom: 10px; /* Add spacing between attributes */
    color: black;
    text-align: left; /* Align text to the left for better readability */
    font-family: "Istok Web";
    font-size: 15px;
    font-weight: 700;
    line-height: 1.5; /* Increase line height for better readability */
}
</style>
