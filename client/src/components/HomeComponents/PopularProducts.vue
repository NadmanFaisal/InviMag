<template>
    <b-card class="mb-3 popular-products-card">
      <h5 class="card-title">POPULAR PRODUCTS</h5>
      <div class="d-flex justify-content-around">
        <div class="product-item">
          <p>Blue polo tshirt<br><strong>35 Pcs</strong></p>
        </div>
        <div class="product-item">
          <p>Blue polo tshirt<br><strong>35 Pcs</strong></p>
        </div>
        <div class="product-item">
          <p>Blue polo tshirt<br><strong>35 Pcs</strong></p>
        </div>
      </div>
    </b-card>
  </template>

<script>
export default {
  name: 'PopularProducts'
}
</script>

  <style scoped>
  .popular-products-card {
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
