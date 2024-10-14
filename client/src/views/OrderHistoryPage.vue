<template>
    <div class="settings-page">
      <b-container fluid>
        <b-row class="min-vh-100">

          <b-col cols="2" class="empty-section">
          </b-col>

          <b-col cols="10" class="content-section">

            <b-col cols="12" class="order-container">

              <b-col cols="12" class="my-order-container">
              </b-col>
            </b-col>

          </b-col>

        </b-row>
      </b-container>
    </div>
  </template>

<script>

import axios from 'axios'
import OrderHistoryContainer from '../components/OrdersComponents/OrderHistoryForm.vue'

export default {
  name: 'OrderHistoryPage',
  data() {
    return {
      userId: '',
      orders: []
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
  height: 95%;
}

.my-order-container {
  display: flex;
  flex-direction: column;
  height: 20%;
  border-bottom: 1px solid #787676;
}

</style>
