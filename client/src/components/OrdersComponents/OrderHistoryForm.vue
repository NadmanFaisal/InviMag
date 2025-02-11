<template>
  <b-col cols="12" class="order-container">

    <b-col cols="12" class="my-order-container">

      <b-col cols="12" class="title-container">
        <label class="title-label form-label">My Orders</label>
      </b-col>

      <b-col cols="12" class="filter-container">

        <b-dropdown text="Filter Orders" class="sort-order-button" variant="light">
          <b-dropdown-item @click="setSort('newest')" href="#">Newest</b-dropdown-item>
          <b-dropdown-item @click="setSort('oldest')" href="#">Oldest</b-dropdown-item>
        </b-dropdown>

        <button type="button" class="delete-button btn btn-danger" @click="deleteAllOrderHistories">Delete all order histories</button>

      </b-col>

    </b-col>

  <b-col cols="12" class="order-history-container">

    <!-- The basket container wont appear unless the basket has more than one product -->

    <b-col cols=11 class="basket-container" v-if="basket.length > 0">

      <b-col cols="4" class="product-container">

        <b-col cols="12" class="order-id-label-container">
          <label class="order-id-label form-label">Order ID: </label>
        </b-col>

        <!-- Displays name of products for all the products in the basket -->

        <b-col cols="12" class="product-name-container" v-for="product in basket" :key="product._id">
          <label class="product-name-label form-label">{{ product.name }}</label>
        </b-col>

      </b-col>

      <b-col cols="4" class="price-container">

        <b-col cols="12" class="price-label-container">
          <label class="price-label form-label">Price </label>
        </b-col>

        <!-- Displays price of products for all the products in the basket -->

        <b-col cols="12" class="product-price-container" v-for="product in basket" :key="product._id">
          <label class="product-price-label form-label">{{ product.price }}</label>
        </b-col>

      </b-col>

      <b-col cols="1" class="quantity-container">

        <b-col cols="12" class="quantity-label-container">
          <label class="quantity-label form-label">QTY</label>
        </b-col>

        <!-- Displays quantity of products for all the products in the basket -->

        <b-col cols="12" class="product-name-container" v-for="product in basket" :key="product._id">
          <label class="product-name-label form-label">{{ product.quantity }}</label>
        </b-col>

      </b-col>

      <b-col cols="3" class="payment-container">

        <b-col cols="12" class="sub-total-container">
          Subtotal: {{ basketSubtotal }}
        </b-col>

        <b-col cols="12" class="shipping-container">
          Shipping: {{ basketShipping }}
        </b-col>

        <b-col cols="12" class="to-pay-container">
          Total: {{ basketSubtotal }}
        </b-col>

        <b-col cols="12" class="button-container">
          <button type="button" class="accept-button btn btn-primary" @click="createOrderHistory">Accept!</button>
          <button type="button" class="reject-button btn btn-danger" @click="deleteBasket">Reject!</button>
        </b-col>

      </b-col>

    </b-col>

    <!-- For each order history, creates this section -->

    <b-col cols="11" v-for="orderHistory in orderHistories" :key="orderHistory._id" class="order-card">

      <b-col cols="4" class="product-container">

        <b-col cols="12" class="order-id-label-container">
          <label class="order-id-label form-label">Order ID: {{ orderHistory._id }}</label>
        </b-col>

        <!-- Displays product name for each product in a order history -->

        <b-col cols="12" class="product-name-container" v-for="product in orderHistory.products" :key="product._id">
          <label class="product-name-label form-label">{{ product.name }}</label>
        </b-col>

      </b-col>

      <b-col cols="4" class="date-container">

        <b-col cols="12" class="date-label-container">
          <label class="date-label form-label">Date: {{ new Date(orderHistory.date_of_order).toLocaleDateString('sv-SE') }}</label>
        </b-col>

        <b-col cols="12" class="empty-container" v-for="product in orderHistory.products" :key="product._id">
        <hr>
        </b-col>

      </b-col>

      <b-col cols="1" class="quantity-container">

        <b-col cols="12" class="quantity-label-container">
          <label class="quantity-label form-label">QTY</label>
        </b-col>

        <!-- Displays product quantity for each product in a order history -->

        <b-col cols="12" class="product-quantity-container" v-for="product in orderHistory.products" :key="product._id">
          <label class="product-quantity-label form-label">{{ product.quantity }}</label>
        </b-col>
      </b-col>

      <b-col cols="3" class="payment-container">

        <b-col cols="12" class="sub-total-container">
          Subtotal: {{ orderHistory.total_price }}
        </b-col>

        <b-col cols="12" class="shipping-container">
          Shipping: {{ orderHistoryShipping }}
        </b-col>

        <b-col cols="12" class="to-pay-container">
          Total: {{ orderHistory.total_price }}
        </b-col>

        <b-col cols="12" class="status-bar">
          <label class="status-bar-label form-label">Paid!</label>
        </b-col>

      </b-col>

    </b-col>

  </b-col>
  </b-col>
</template>

<script>

import axios from 'axios'

export default {
  name: 'OrderHistoryContainer',
  data() {
    return {
      userId: '',
      orderHistoryId: '',
      orderHistories: [],
      basket: [],
      sortBy: 'newest',
      basketSubtotal: '',
      basketShipping: 'Free',
      basketTotal: '',
      orderHistorySubtotal: '',
      orderHistoryShipping: 'Free',
      orderHistoryTotal: ''
    }
  },
  mounted() {
    // Fetches the business owner and its ID from the local storage for later use
    const businessOwner = JSON.parse(localStorage.getItem('businessOwner'))
    this.basket = JSON.parse(localStorage.getItem('basket'))

    // When the page loads for the first time, gets the order histories and the basket if there is anything in basket
    if (businessOwner && businessOwner.id) {
      this.userId = businessOwner.id
      this.fetchOrderHistories()
      this.getBasketSubtotal()
    }
  },
  methods: {
    // Fetches all the order histories in a particular business owner
    async fetchOrderHistories() {
      try {
        const response = await axios.get(`http://localhost:3000/v1/api/BusinessOwners/${this.userId}/orderHistories?sort_date=${this.sortBy}`)
        this.orderHistories = response.data.orderHistories
      } catch (error) {
        console.error('Error fetching order histories:', error)
      }
    },
    // Sorts the orderHistories according to newest or oldest date of creation
    setSort(sortAlgorithm) {
      this.sortBy = sortAlgorithm
      this.fetchOrderHistories()
    },
    // Deletes the basket and all of its products and deletes it from local storage
    async deleteBasket() {
      const deleteBasket = window.confirm('Are you sure you want to delete the basket? This action cannot be undone.')
      if (deleteBasket) {
        this.basket = []
        localStorage.setItem('basket', JSON.stringify([]))
      }
    },
    // Iterates through all the products and calculates the total
    getBasketSubtotal() {
      this.basketSubtotal = this.basket.reduce((total, product) => {
        const productQuantity = product.quantity || 0
        const productPrice = product.price || 0
        return total + (productQuantity * productPrice)
      }, 0)
    },
    // Creates a new order history
    async createOrderHistory() {
      const orderHistoryData = {
        businessOwner: this.userId,
        date_of_order: new Date(),
        total_price: this.basketSubtotal
      }

      try {
        const response = await axios.get(`http://localhost:3000/v1/api/BusinessOwners/${this.userId}`)
        const currentBudget = response.data.total_budget

        // Does not allow creation of order history if budget is low
        if (currentBudget < this.basketSubtotal) {
          alert('Insufficient budget! You cannot buy everything in the basket right now.')
          return
        }
      } catch (error) {
        console.error('Error getting business owner budget:', error)
        return
      }

      try {
        const response = await axios.post('http://localhost:3000/v1/api/orderHistories', orderHistoryData)

        // Adds the new order history in the orderHistories list
        this.orderHistories.push(response.data.orderHistories)
        this.orderHistoryId = response.data._id

        // Will create products to add to the order history just created
        this.createProducts()

        // Will update the total budget of the business owner after the creation of order history
        this.updateBusinessOwner()
        alert('Thank you for buying!')
      } catch (error) {
        console.error('Error creating order history: ', error)
      }
    },
    async createProducts() {
      if (!this.basket || this.basket.length === 0) {
        console.log('No products in the basket.')
        return
      }

      for (const product of this.basket) {
        try {
          const productData = {
            name: product.name,
            quantity: product.quantity,
            buying_price: product.price,
            selling_price: 0,
            category: product.category,
            supplier: product.supplierID,
            orderHistory: this.orderHistoryId,
            in_stock: true
          }
          // Fetches the original product to change the quantity displayed within the supplier
          const originalProduct = await axios.get(`http://localhost:3000/v1/api/Products/${product.id}`)
          const newQuantity = originalProduct.data.quantity - product.quantity
          const updatedProduct = {
            quantity: newQuantity
          }
          await axios.patch(`http://localhost:3000/v1/api/Products/${product.id}`, updatedProduct)

          // Creates the products in the basket for this specific business owner
          const response = await axios.post(`http://localhost:3000/v1/api/BusinessOwners/${this.userId}/products`, productData)
          console.log('Product added successfully:', response.data)
        } catch (error) {
          console.error('Error adding product to business owner:', error)
        }
      }

      // Resets the basket after creation of the order histories and the products
      localStorage.setItem('basket', JSON.stringify([]))
      this.basket = []
    },
    // Updates the total budget of the business owner
    async updateBusinessOwner() {
      if (!this.userId) return

      try {
        const response = await axios.get(`http://localhost:3000/v1/api/BusinessOwners/${this.userId}`)
        const updatedTotalBudget = response.data.total_budget - this.basketSubtotal
        const updatedData = {
          total_budget: updatedTotalBudget
        }
        await axios.patch(`http://localhost:3000/v1/api/BusinessOwners/${this.userId}`, updatedData)
        console.log('Your total budget have been updated successfully!')
      } catch (error) {
        console.error('Error updating your total budget:', error)
        console.log('Could not update your total budget. Please try again.')
      }
    },
    // Allows the user to delete all the order histories.
    async deleteAllOrderHistories() {
      if (this.orderHistories.length < 1) {
        alert('There are no order histories to delete!')
        return
      }
      const deleteAllOrderHistories = window.confirm('Are you sure you want to delete all the order histories? This action cannot be undone.')
      if (deleteAllOrderHistories) {
        try {
          await axios.delete('http://localhost:3000/v1/api/OrderHistories')
          alert('All order histories have been deleted!')
        } catch (error) {
          console.error('Error deleting all the order histories: ', error)
        }
      }
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
  height: 950px;
}

.my-order-container {
  display: flex;
  flex-direction: column;
  height: 20%;
  border-bottom: 1px solid #787676;
  box-shadow: 0px 7px 5px -5px rgba(0, 0, 0, 0.3);
}

.title-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 40%;
}

.title-label {
  color: #606060;
  text-align: center;
  font-family: "Istok Web";
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.filter-container {
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60%;
}

.delete-button {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  font-family: "Istok Web";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 20px;
  background: #F60101;
}

.order-history-container {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 80%;
  align-items: center
}

.basket-container {
  display: flex;
  flex-direction: row;
  height: 200px;
  border-radius: 5px;
  border: 2px solid #b0caff;
  margin-top: 1rem;
  overflow-y: auto;
}

.price-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.price-label-container {
  display: flex;
  flex-direction: column;
  background: #e0e0e0;
  height: 45px;
  justify-content: center;
  align-items: center;
}

.product-price-label {
  margin-top: 7px;
  color: #606060;
  text-align: center;
  font-family: "Istok Web";
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.product-price-container {
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.button-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.accept-button {
  color: var(--Schemes-On-Primary, #FFF);
  text-align: center;
  font-family: "Istok Web";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 10px;
  border-radius: 5px;
  background: #37F;
  width: 70%;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.reject-button {
  color: var(--Schemes-On-Primary, #FFF);
  text-align: center;
  font-family: "Istok Web";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 10px;
  border-radius: 5px;
  background: #F60101;
  width: 70%;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.order-card {
  display: flex;
  flex-direction: row;
  height: 200px;
  border-radius: 5px;
  border: 2px solid #b0caff;
  margin-top: 1rem;
  overflow-y: auto;
}

.order-container, .quantity-container {
  display: flex;
  flex-direction: column;
}

.date-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.order-id-label-container, .date-label-container, .quantity-label-container, .prince-label-container {
  display: flex;
  flex-direction: column;
  background: #e0e0e0;
  height: 45px;
  justify-content: center;
  align-items: center;
}

.order-id-label, .date-label, .quantity-label, .price-label {
  color: #606060;
  font-family: "Istok Web";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.product-name-container, .empty-container, .product-quantity-container {
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.empty-container {
  display: flex;
  flex-direction: column;
}

.product-name-label, .product-quantity-label {
  margin-top: 7px;
  color: #606060;
  text-align: center;
  font-family: "Istok Web";
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.payment-container {
  display: flex;
  flex-direction: column;
  background: rgba(88, 144, 255, 0.25);
  padding: 5px;
}

.sub-total-container {
  display: flex;
  align-items: center;
  height: 15%
}

.shipping-container {
  display: flex;
  align-items: center;
  height: 15%;
  border-bottom: 1px solid #787676;
}

.to-pay-container {
  display: flex;
  align-items: center;
  height: 15%;
}

.status-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 3px solid #00a123;
  width: 100%;
  height: 55%;
  background: rgb(188, 255, 157);
}

.status-bar-label {
  color: var(--Schemes-On-Primary, #1db100);
  text-align: center;
  font-family: "Istok Web";
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

@media screen and (max-width: 608px) {

.empty-section {
  display: none;
}

.content-section {
  flex: 1
}

.status-bar-label {
  font-size: 40px;
}

}

/* For iPhone SE mainly */

@media screen and (max-width: 580px) {
  .date-container {
    display: none;
  }

  .quantity-container {
    flex:1;
  }

  .payment-container {
    flex:1
  }

  .quantity-label, .price-label {
    font-size: 13px;
  }

  .order-id-label, .product-name-label, .product-quantity-label, .product-price-label {
    font-size: 13px;
  }

  .sub-total-container, .shipping-container, .to-pay-container {
    font-size: 13px;
  }

  .accept-button, .reject-button {
  font-size: 10px;
  }

}

@media screen and (max-width: 580px) {

  .sub-total-container, .shipping-container, .to-pay-container {
    font-size: 10px;
  }

  .status-bar-label {
  font-size: 30px;
  }

  .accept-button, .reject-button {
    font-size: 7px;
  }

}
</style>
