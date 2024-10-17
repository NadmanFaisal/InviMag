<template>
    <b-card class="mb-3 best-selling-products-card">
      <div class="title-container">
        <b class="title">BEST SELLING PRODUCTS</b>
      </div>
      <hr />
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

  /* Media query to adjust the height */
  @media (min-width: 992px) {
    .best-selling-products-card {
      min-height: 94%; /* Adjust this height as needed */
    }
  }
  </style>
