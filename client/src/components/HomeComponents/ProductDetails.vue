<template>
    <b-card class="mb-3 products-details-card">
      <!-- Title Container -->
      <div class="title-container">
        <b class="title">PRODUCTS DETAILS</b>
      </div>
      <hr /> <!-- Move outside of text-container to allow full width -->

      <!-- All Items Container -->
      <div class="text-container">
        <p>All Items: <strong>3042</strong></p>
      </div>

      <!-- Item Types Container -->
      <div class="text-container">
        <p>Item Types: <strong>63</strong></p>
      </div>

      <!-- Out of Stock Items Container -->
      <div class="text-container">
        <p class="text-danger">Out of Stock Items: <strong>144</strong></p>
      </div>
    </b-card>
  </template>

<script>
export default {
  name: 'ProductsDetails'
}
</script>

  <style scoped>
  .products-details-card {
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

  .text-container {
    display: flex;
    width: 220px;
    height: 49px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
  }

  .title {
    color: #787676;
    font-family: "Istok Web";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }
  </style>
