<template>
    <b-card class="mb-3 best-selling-products-card">
      <div class="d-flex justify-content-between align-items-center">
        <h5 class="card-title">BEST SELLING PRODUCTS</h5>
        <b-dropdown text="This Month" right>
          <b-dropdown-item>Last Month</b-dropdown-item>
          <b-dropdown-item>Last Year</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="d-flex mt-3">
        <div class="product-item me-3">
          <p>Blue polo tshirt<br><strong>35 Pcs</strong></p>
        </div>
        <div class="product-item me-3">
          <p>Industrial single bolt<br><strong>392 Pcs</strong></p>
        </div>
        <div class="product-item">
          <p>Blue polo tshirt<br><strong>67 Pcs</strong></p>
        </div>
      </div>
    </b-card>
  </template>

<script>
export default {
  name: 'BestSellingProducts'
}
</script>

  <style scoped>
  .best-selling-products-card {
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
  </style>
