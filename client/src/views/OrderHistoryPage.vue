<template>
    <div class="settings-page">
      <b-container fluid>
        <b-row class="min-vh-100">

          <b-col cols="2" class="empty-section">
          </b-col>

          <b-col cols="10" class="content-section">

            <OrderHistoryContainer/>

          </b-col>

        </b-row>
      </b-container>
    </div>
  </template>

<script>

import OrderHistoryContainer from '../components/OrdersComponents/OrderHistoryForm.vue'

export default {
  components: {
    OrderHistoryContainer
  },
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
@media screen and (max-width: 768px) {

.empty-section {
  display: none;
}

.content-section {
  flex: 1
}

}

</style>
