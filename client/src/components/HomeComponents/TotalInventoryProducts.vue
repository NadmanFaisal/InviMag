<template>
    <b-card class="mb-3 total-inventory-products-card">
        <div class="title-container">
        <b class="title">Total Inventory Products</b>
      </div>
      <hr />
      <div class="d-flex justify-content-around">
        <label class="total-inventory-products-label form-label">Items: {{ totalInventoryProducts }}</label>
      </div>
    </b-card>
  </template>

<script>

import axios from 'axios'

export default {
  name: 'TotalInventoryProducts',
  data() {
    return {
      userId: '',
      totalInventoryProducts: ''
    }
  },
  mounted() {
    const businessOwner = JSON.parse(localStorage.getItem('businessOwner'))
    this.userId = businessOwner.id

    this.getTotalInventoryProducts()
  },
  methods: {
    async getTotalInventoryProducts() {
      const response = await axios.get(`http://localhost:3000/v1/api/BusinessOwners/${this.userId}`)
      const productIds = response.data.products
      this.totalInventoryProducts = 0

      for (const productId of productIds) {
        const fetchedProduct = await axios.get(`http://localhost:3000/v1/api/Products/${productId}`)
        const productQuantity = Number(fetchedProduct.data.quantity)
        this.totalInventoryProducts += productQuantity
        console.log(productQuantity)
      }
    }
  }
}
</script>

  <style scoped>
  .total-inventory-products-card {
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

  .total-inventory-products-label {
    color: #F83;
    text-align: center;
    font-family: "Istok Web";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }

  @media (min-width: 768px) {
    .total-inventory-products-card {
      min-height: 94%;
    }
  }
  </style>
