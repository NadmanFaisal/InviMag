<template>
  <b-col cols="12" class="order-history-container">

    <b-col cols="11" v-for="order in orders" :key="order._id" class="order-card">

      <b-col cols="4" class="product-container">
        <label class="order-id-label form-label">Order ID: {{ order._id }}</label>
      </b-col>

    </b-col>

  </b-col>
</template>

<script>

import axios from 'axios'

export default {
  name: 'OrderHistoryContainer',
  data() {
    return {
      userId: '',
      orders: []
    }
  },
  mounted() {
    const businessOwner = JSON.parse(localStorage.getItem('businessOwner'))
    if (businessOwner && businessOwner.id) {
      this.userId = businessOwner.id
      this.fetchOrderHistories()
    }
  },
  methods: {
    async fetchOrderHistories() {
      try {
        const response = await axios.get(`http://localhost:3000/v1/api/BusinessOwners/${this.userId}`) // Replace with your actual endpoint
        this.orders = response.data.orderHistories // Assuming the response contains the order histories
        console.log(this.orders)
      } catch (error) {
        console.error('Error fetching order histories:', error)
      }
    }
  }
}
</script>

<style scoped>
.order-history-container {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 80%;
  align-items: center
}

.order-id-label, .date-label, .quantity-label {
  color: #606060;
  font-family: "Istok Web";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.order-card {
  display: flex;
  flex-direction: row;
  height: 30%;
  border-radius: 5px;
  border: 2px solid #b0caff;
  background: #FFF;
  margin-top: 1rem;
  overflow-y: auto;
}

.payment-container {
  display: flex;
  flex-direction: column;
  background: rgba(51, 119, 255, 0.25);
  padding: 5px;
}

.sub-total-container {
  display: flex;
  align-items: center;
  height: 15%
}

.shipping-container {
  display: flex;
  align-items: center;
  height: 15%;
  border-bottom: 1px solid #787676;
}

.to-pay-container {
  display: flex;
  align-items: center;
  height: 15%;
}

.status-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55%;
  background: rgb(188, 255, 157);
}

.status-bar-label {
  color: var(--Schemes-On-Primary, #1db100);
  text-align: center;
  font-family: "Istok Web";
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
