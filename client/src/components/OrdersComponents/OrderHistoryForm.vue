<template>
  <b-col cols="12" class="order-history-container">

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
  }
}
</script>

<style scoped>
</style>
