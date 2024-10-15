<template>
  <b-col cols="12" class="order-container">

    <b-col cols="12" class="my-order-container">

      <b-col cols="12" class="title-container">
        <label class="title-label form-label">My Orders</label>
      </b-col>

      <b-col cols="12" class="filter-container">

        <b-dropdown text="Filter Orders" class="sort-order-button" variant="light">
          <b-dropdown-item @click="setSort('newest')" href="#">Newest</b-dropdown-item>
          <b-dropdown-item @click="setSort('oldest')" href="#">Oldest</b-dropdown-item>
        </b-dropdown>

      </b-col>

    </b-col>

  <b-col cols="12" class="order-history-container">

    <b-col cols="11" v-for="orderHistory in orderHistories" :key="orderHistory._id" class="order-card">

      <b-col cols="4" class="product-container">

        <b-col cols="12" class="order-id-label-container">
          <label class="order-id-label form-label">Order ID: {{ orderHistory._id }}</label>
        </b-col>

        <b-col cols="12" class="product-name-container" v-for="product in orderHistory.products" :key="product._id">
          <label class="product-name-label form-label">{{ product.name }}</label>
        </b-col>

      </b-col>

      <b-col cols="4" class="date-container">

        <b-col cols="12" class="date-label-container">
          <label class="date-label form-label">Date: {{ orderHistory.date_of_order }}</label>
        </b-col>

        <b-col cols="12" class="empty-container" v-for="product in orderHistory.products" :key="product._id">
        <hr>
        </b-col>

      </b-col>

      <b-col cols="1" class="quantity-container">

        <b-col cols="12" class="quantity-label-container">
          <label class="quantity-label form-label">QTY</label>
        </b-col>

        <b-col cols="12" class="product-quantity-container" v-for="product in orderHistory.products" :key="product._id">
          <label class="product-quantity-label form-label">{{ product.quantity }}</label>
        </b-col>
      </b-col>

      <b-col cols="3" class="payment-container">

        <b-col cols="12" class="sub-total-container">
          Subtotal:
        </b-col>

        <b-col cols="12" class="shipping-container">
          Shipping:
        </b-col>

        <b-col cols="12" class="to-pay-container">
          Total:
        </b-col>

        <b-col cols="12" class="status-bar">
          <label class="status-bar-label form-label">Paid!</label>
        </b-col>

      </b-col>

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
      orderHistoryId: '',
      orderHistories: [],
      basket: [],
      sortBy: 'newest'
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
        const response = await axios.get(`http://localhost:3000/v1/api/BusinessOwners/${this.userId}/orderHistories?sort_date=${this.sortBy}`)
        this.orderHistories = response.data.orderHistories
      } catch (error) {
        console.error('Error fetching order histories:', error)
      }
    },
    setSort(sortAlgorithm) {
      this.sortBy = sortAlgorithm
      this.fetchOrderHistories()
    }
  }
}
</script>

<style scoped>

.order-container {
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background: #FFF;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  height: 950px;
}

.my-order-container {
  display: flex;
  flex-direction: column;
  height: 20%;
  border-bottom: 1px solid #787676;
}

.title-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 40%;
}

.title-label {
  color: #606060;
  text-align: center;
  font-family: "Istok Web";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.filter-container {
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60%;
}

.order-history-container {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 80%;
  align-items: center
}

.order-card {
  display: flex;
  flex-direction: row;
  height: 200px;
  border-radius: 5px;
  border: 2px solid #b0caff;
  margin-top: 1rem;
  overflow-y: auto;
}

.order-container, .quantity-container {
  display: flex;
  flex-direction: column;
}

.date-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.order-id-label-container, .date-label-container, .quantity-label-container {
  display: block;
  flex-direction: column;
  background: #e0e0e0;
}

.order-id-label, .date-label, .quantity-label {
  color: #606060;
  font-family: "Istok Web";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.product-name-container, .empty-container, .product-quantity-container {
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.empty-container {
  display: flex;
  flex-direction: column;
}

.product-name-label, .product-quantity-label {
  margin-top: 7px;
  color: #606060;
  text-align: center;
  font-family: "Istok Web";
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.payment-container {
  display: flex;
  flex-direction: column;
  background: rgba(88, 144, 255, 0.25);
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
  border-radius: 10px;
  border: 3px solid #00a123;
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
