<template>
    <b-card class="mb-3 products-details-card">
      <div class="content-wrapper">
        <div class="title-container">
          <b class="title">PRODUCTS DETAILS</b>
        </div>
        <hr />
        <div class="text-container">
          <p>All Products: <strong>3042</strong></p>
        </div>
        <div class="text-container">
          <p>Product Types: <strong>63</strong></p>
        </div>
        <div class="text-container">
          <p class="text-danger">Out of Stock Products: <strong>144</strong></p>
        </div>
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
    text-align: center;
  }

  .text-container {
    display: block;
    width: 100%;
    text-align: center;
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
