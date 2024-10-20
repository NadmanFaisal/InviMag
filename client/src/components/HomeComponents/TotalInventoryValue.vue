<template>
    <b-card class="mb-3 total-inventory-value-card">
     <div class="content-wrapper">
      <div class="title-container">
        <b class="title">Total Inventory Value</b>
      </div>
      <hr />
      <div class="d-flex mt-3">
        <div class="product-item me-3">
          <label class="inventory-value-label form-label">${{ inventoryValue }}</label>
        </div>
      </div>
     </div>
    </b-card>
  </template>

<script>

import axios from 'axios'

export default {

  name: 'TotalInventoryValue',
  data() {
    return {
      inventoryValue: '',
      userId: ''
    }
  },
  mounted() {
    const businessOwner = JSON.parse(localStorage.getItem('businessOwner'))
    if (businessOwner && businessOwner.id) {
      this.userId = businessOwner.id
    }

    this.getInventoryValue()
  },
  methods: {
    async getInventoryValue() {
      const response = await axios.get(`http://localhost:3000/v1/api/BusinessOwners/${this.userId}`)
      const productIds = response.data.products
      this.inventoryValue = 0

      for (const productId of productIds) {
        const fetchedProduct = await axios.get(`http://localhost:3000/v1/api/Products/${productId}`)
        const total = fetchedProduct.data.quantity * fetchedProduct.data.buying_price
        this.inventoryValue += total
      }
    }
  }
}
</script>

  <style scoped>
  .total-inventory-value-card {
    padding: 20px;
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

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title-container {
    width: 100%;
    align-content: start;
  }

  .title {
    color: #787676;
    font-family: "Istok Web";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }

  .inventory-value-label {
    color: #1F8B03;
    text-align: center;
    font-family: "Istok Web";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }

  @media (min-width: 992px) {
    .total-inventory-value-card {
      min-height: 94%;
    }
  }
  </style>
