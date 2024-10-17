<template>
    <b-card class="mb-3 costly-products-card">
        <div class="title-container">
        <b class="title">COSTLY PRODUCTS</b>
      </div>
      <hr />
      <div class="product-item">
        <p>Blue polo tshirt<br><strong>35 Pcs</strong></p>
      </div>
    </b-card>
  </template>

<script>
export default {
  name: 'CostlyProducts'
}
</script>

  <style scoped>
  .costly-products-card {
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .product-image {
    width: 50px;
    height: 50px;
    margin-bottom: 5px;
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

  .title {
    color: #787676;
    font-family: "Istok Web";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }
  </style>
