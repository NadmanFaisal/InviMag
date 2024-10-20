<template>
    <b-card class="mb-3 products-in-basket-card">
        <div class="title-container">
        <b class="title">Products in Basket</b>
      </div>
      <hr />
      <div class="d-flex justify-content-around">
        <label class="products-in-basket-label form-label">Items: {{ productsInBasket }}</label>
      </div>
    </b-card>
  </template>

<script>

export default {
  name: 'ProductsInBasket',
  data() {
    return {
      userId: '',
      productsInBasket: 0
    }
  },
  mounted() {
    const businessOwner = JSON.parse(localStorage.getItem('businessOwner'))
    this.userId = businessOwner.id

    this.getProductsInBasket()
  },
  methods: {
    async getProductsInBasket() {
      const basket = JSON.parse(localStorage.getItem('basket')) || []
      this.productsInBasket = basket.length
    }
  }
}
</script>

  <style scoped>
  .products-in-basket-card {
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .product-item {
    text-align: center;
  }

  .product-image {
    width: 50px;
    height: 50px;
    margin-bottom: 5px;
  }
  hr {
    margin-top: 0;
    margin-bottom: 1rem;
    height: 2px;
    background: #494949;
    width: 100%;
  }

  .title-container {
    width: 100%;
  }

  .title {
    color: #787676;
    font-family: "Istok Web";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }

  .products-in-basket-label {
    color: #37F;
    text-align: center;
    font-family: "Istok Web";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }

  @media (min-width: 768px) {
    .products-in-basket-card {
      min-height: 94%;
    }
  }
  </style>
