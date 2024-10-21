<template>
  <b-col :cols="10" class="supplier-detail-style">
    <img :src="supplierimage" class="supplier-image" />
    <b-col :cols="10" v-if="supplier">
      <h1 class="supplier-title-font">{{ supplier.name }}</h1>
      <!-- Display other supplier details -->
      <b-col v-if="products && products.length">
        <h2 class="supplier-title-font">Products I sell</h2>
        <ul>
          <b-col v-for="product in products" :key="product._id">
            <li class="productDisplay">
              <p class="productTitle">{{ product.name }}</p>
              <b-col class="attributeDisplayContainer">
                <b-col>
                  <p class="attributeLabel">Quantity</p>
                  <p class="attributeValue">{{ product.quantity }} Units</p>
                </b-col>
                <b-col>
                  <p class="attributeLabel">Price</p>
                  <p class="attributeValue">${{ product.selling_price }}</p>
                </b-col>
                <b-col>
                  <p class="attributeLabel">Location</p>
                  <p class="attributeValue">
                    {{ supplier.location_of_origin }}
                  </p>
                </b-col>
              </b-col>
              <b-col class="add-to-basket-style">
                <b-form-input
                  v-model="inputQuantities[product._id]"
                  placeholder="Input Quantity"
                  class="quantity-input"
                ></b-form-input>
                <b-button
                  variant="primary"
                  @click="addToBasket(product._id)"
                  class="button-style"
                  >Add to basket</b-button
                >
              </b-col>
            </li>
          </b-col>
        </ul>
      </b-col>
    </b-col>
    <b-col v-else>
      <p></p>
    </b-col>
  </b-col>
</template>

<script>
import { supplierApi } from '../../api/SupplierApi'
import { productApi } from '../../api/ProductApi'
import supplierimage from '../SupplierComponents/Images/purple-user-icon.png'

export default {
  name: 'SupplierDetail',
  props: ['id'],
  data() {
    return {
      supplier: {},
      products: [],
      supplierimage,
      inputQuantities: {}
    }
  },

  created() {
    this.products = this.products || []
    if (this.id) {
      this.fetchSupplierDetails()
      this.fetchSupplierProducts()
    }
  },

  methods: {
    async fetchSupplierDetails() { // This method fetches the supplier and all the attributes for the supplier
      try {
        const response = await supplierApi.getSupplierByID(this.id)
        this.supplier = response.data
      } catch (error) {
        console.error('Error fetching supplier', error)
      }
    },

    async fetchSupplierProducts() { // This method fetches all the products owned by the suplier
      try {
        const response = await supplierApi.getSupplierProducts(this.id)
        this.products = response.data.products
        console.log(this.supplier)
      } catch (error) {
        console.error('Error fetching supplier and products:', error)
      }
    },

    async addToBasket(productID) {  // This method handle the logic of adding products to a basket which are stored in the local storage
      const inputQuantity = Number(this.inputQuantities[productID])
      if (inputQuantity <= 0 || inputQuantity % 1 !== 0) { //This method takes care of exception cases where users can input invalid quantity values
        alert('Please Provide a valid input quantity')
      } else {
        const basket = JSON.parse(localStorage.getItem('basket')) || []
        const supplierId = this.id
        try {
          const response = await productApi.getProductByID(productID)
          const product = response.data
          const avaiableQuantity = Number(response.data.quantity)

          const existingProductInBasket = basket.find(  // This method also handles logic for multiple add to basket button presses on the the same product, to enusre that the total amount ordered by the user is not greater than the total in stock quantity for the supplier
            (item) => item.id === productID
          )
          const totalQuantityInBasket =
            (existingProductInBasket ? existingProductInBasket.quantity : 0) +
            inputQuantity

          if (totalQuantityInBasket > avaiableQuantity) { 
            alert(
              `Input Quantity ${inputQuantity} cannot be greater than the total quantity of products ${avaiableQuantity}`
            )
          } else {
            if (existingProductInBasket) {
              // If product exists in the basket, update its quantity
              existingProductInBasket.quantity += inputQuantity
            } else {
              basket.push({
                id: productID,
                name: product.name,
                price: product.selling_price,
                category: product.category,
                quantity: inputQuantity,
                supplierID: supplierId
              })
            }
            localStorage.setItem('basket', JSON.stringify(basket))   //Adds  the product to the basket and also sends the supplier ID of the supplier it belongs to
            alert(
              `${inputQuantity} ${product.name} have been added to the basket`
            )
          }
        } catch (error) {
          console.error('Error fetching supplier and products:', error)
        }
      }
    }
  }
}
</script>

<style scoped>
.supplier-title-font {
  font-family: 'Istok Web';
  font-size: 50px;
  font-weight: bold;
  color: black;
}

.supplier-detail-style {
  margin-left: 16.666667%;
  font-family: 'Istok Web';
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-right: auto;
  justify-content: center;
  margin-bottom: 20px;
}

.productDisplay {
  width: 100%;
  height: auto;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
}

.attributeDisplayContainer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-align: center;
}

.attributeLabel {
  font-family: 'Istok Web';
  font-size: 20px;
  font-weight: 700;
  text-align: center;
}

.attributeValue {
  font-family: 'Istok Web';
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  color: grey;
}

.attributeFont {
  margin-bottom: 10px;
  color: black;
  text-align: left;
  font-family: 'Istok Web';
  font-weight: 700;
  line-height: 1.5;
}

.productTitle {
  align-self: stretch;
  color: var(--sds-color-text-default-default);
  font-family: var(--sds-typography-heading-font-family);
  font-size: var(--sds-typography-heading-size-base);
  font-style: normal;
  font-weight: var(--sds-typography-heading-font-weight);
  line-height: 120%; /* 28.8px */
  letter-spacing: -0.48px;
  font-weight: bold;
  font-size: 30px;
}

.supplier-image {
  width: auto; /* Adjust the width of the image */
  height: auto; /* Adjust the height of the image */
  object-fit: cover; /* Keeps the aspect ratio of the image */
  padding: 15px;
  justify-content: center;
}

.quantity-input {
  width: 30%;
  margin-top: 5px;
  height: 50px;
}

.add-to-basket-style {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button-style {
  margin-top: 10px;
  width: 30%;
}

@media (max-width: 768px) {
  .supplier-image {
    margin-left: 16.666667%;
  }
  .supplier-title-font {
    font-size: 30px;
    margin-left: 16.666667%;
  }
  .supplier-detail-style {
    margin-left: 0;
    padding-right: 0%;
    align-items: center;
    justify-content: center;
  }

  .productDisplay {
    margin-bottom: 30px;
    padding: 10px;
    width: 120%;
  }
  .attributeDisplayContainer {
    justify-content: center;
    text-align: center;
  }

  .productTitle {
    font-size: 20px;
  }

  .attributeLabel,
  .attributeValue {
    font-size: 15px;
  }

  .add-to-basket-style {
    justify-content: center;
    height: 20px;
  }

  .quantity-input {
    width: 65%;
    height: 30px;
    padding-top: 10px;
  }

  .button-style {
    width: 65%;
  }
}
</style>
