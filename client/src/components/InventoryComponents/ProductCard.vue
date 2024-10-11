<template>
    <li class="productDisplay">
      <p class="productTitle">Name: {{ product.name }}</p>
      <div class="attributeDisplayContainer">
        <div class="attributeDisplayWidget">
          <p class="attributeLabel">Quantity</p>
          <p class="attributeValue">{{ product.quantity }}</p>
        </div>
        <div class="attributeDisplayWidget">
          <p class="attributeLabel">Buying Price</p>
          <p class="attributeValue">{{ product.buying_price }}</p>
        </div>
        <div class="attributeDisplayWidget">
          <p class="attributeLabel">Selling Price</p>
          <p class="attributeValue">{{ product.selling_price }}</p>
        </div>
      </div>
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
    justify-content: space-between; /* Spacing between widgets */
    margin-top: 20px;
}

.attributeDisplayWidget {
    width: 130px;
    height: 130px;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

.attributeLabel {
    font-family: "Istok Web";
    font-size: 14px;
    font-weight: 700;
    text-align: center;
}

.attributeValue {
    font-family: "Istok Web";
    font-size: 16px;
    font-weight: 700;
    text-align: center;
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

@media (max-width: 757px) {
    .productDisplay{
        margin: 0 auto;
        width: 100%; /* Take full width on small screens */
    }
}

</style>
