<template>
    <b-card class="mb-3 amount-spent-on-orders-card">
     <div class="content-wrapper">
      <div class="title-container">
        <b class="title">Amount Spent on Orders</b>
      </div>
      <hr />
      <div class="d-flex mt-3">
        <div class="order-item me-3">
          <label class="order-value-label form-label">-${{ ordersValue }}</label>
        </div>
      </div>
     </div>
    </b-card>
  </template>

<script>

import axios from 'axios'

export default {

  name: 'AmountSpentOnOrders',
  data() {
    return {
      ordersValue: 0,
      userId: ''
    }
  },
  mounted() {
    const businessOwner = JSON.parse(localStorage.getItem('businessOwner'))
    if (businessOwner && businessOwner.id) {
      this.userId = businessOwner.id
    }

    this.getOrdersValue()
  },
  methods: {
    async getOrdersValue() {
      try {
        const response = await axios.get(`http://localhost:3000/v1/api/BusinessOwners/${this.userId}/orderHistories`)
        const orderHistories = response.data.orderHistories

        orderHistories.forEach(orderHistory => {
          this.ordersValue += orderHistory.total_price
        })
      } catch (error) {
        console.error('Unable to fetch order histories:', error)
      }
    }
  }
}
</script>

  <style scoped>
  .amount-spent-on-orders-card {
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .order-item {
    text-align: center;
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

  .order-value-label {
    color: #e94040;
    text-align: center;
    font-family: "Istok Web";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }

  @media (min-width: 992px) {
    .best-selling-products-card {
      min-height: 94%;
    }
  }
  </style>
