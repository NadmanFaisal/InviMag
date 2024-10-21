<template>
  <b-container fluid class="light-blue-container">
    <b-row class="justify-content-center">
      <div class="overview-section text-center">
        <b id="overview">Overview</b>
        <b-row class="justify-content-center g-3">
          <b-col cols="auto" class="group-child me-4">
            <b class="b">{{ inStockCount }}</b>
            <b class="to-be-shipped">IN STOCK</b>
          </b-col>

          <b-col cols="auto" class="group-child me-4">
            <b class="b" style="color: #C05236;">{{ almostSoldOutCount }}</b>
            <b class="to-be-shipped" style="color: #C05236;">ALMOST SOLD OUT</b>
          </b-col>

          <b-col cols="auto" class="group-child">
            <b class="b" style="color: #e94040;">{{ outOfStockCount }}</b>
            <b class="to-be-shipped" style="color: #e94040;">OUT OF STOCK</b>
          </b-col>
        </b-row>
      </div>

      <div class="budget-section text-center mt-4">
        <b id="budget">Budget</b>
        <b-row class="justify-content-center g-3">
          <b-col cols="auto" class="budget-container">
            <b class="b" style="color: #37F;">{{ `$${formattedBudget} `}}</b>
          </b-col>
        </b-row>
      </div>

    </b-row>
  </b-container>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'Overview',
  data() {
    return {
      userId: '',
      total_budget: 0,
      inStockCount: 0,
      almostSoldOutCount: 0,
      outOfStockCount: 0
    }
  },
  computed: {
    formattedBudget() { // store as a locale String so that it appears as commas
      return this.total_budget.toLocaleString()
    }
  },
  mounted() {
    const businessOwner = JSON.parse(localStorage.getItem('businessOwner'))
    if (businessOwner && businessOwner.id) {
      this.userId = businessOwner.id
      this.displayUserTotalBudget()
      this.getTotalInventoryProducts()
    }
  },
  methods: {
    // gets user total budget
    async displayUserTotalBudget() {
      try {
        const response = await Api.get(`http://localhost:3000/v1/api/BusinessOwners/${this.userId}`)
        this.total_budget = response.data.total_budget
      } catch (error) {
        console.error('Error getting user total budget:', error)
        alert('Could not get your total budget. Please try again.')
      }
    },
    // gets quantity of each product and updates counter for inStock, almostSoldOut and outOfStock depending on conditions.
    async getTotalInventoryProducts() {
      try {
        const response = await Api.get(`http://localhost:3000/v1/api/BusinessOwners/${this.userId}`)
        const productIds = response.data.products

        this.inStockCount = 0
        this.almostSoldOutCount = 0
        this.outOfStockCount = 0

        for (const productId of productIds) {
          const fetchedProduct = await Api.get(`http://localhost:3000/v1/api/Products/${productId}`)
          const productQuantity = Number(fetchedProduct.data.quantity)

          if (productQuantity > 3) {
            this.inStockCount++
          } else if (productQuantity > 0 && productQuantity <= 3) {
            this.almostSoldOutCount++
          } else if (productQuantity === 0) {
            this.outOfStockCount++
          }
        }
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
  }
}
</script>

<style scoped>
.overview-section, .budget-section {
  text-align: center;
  margin-bottom: 20px;
}

#overview {
  color: #787676;
  font-family: "Istok Web";
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
}

#budget {
  color: #787676;
  font-family: "Istok Web";
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
}

.light-blue-container {
  width: 100%;
  height: auto;
  background-color: #F1F6FF;
  padding-top: 20px;
  padding-bottom: 20px;
}

.group-child {
  width: 250px;
  height: 103px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
}
.budget-container {
  min-width: 250px;
  width: auto;
  height: 103px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
}

.b {
  font-size: 36px;
  color: green;
  line-height: 1;
}

.to-be-shipped {
  font-size: 14px;
  color: green;
}

@media (max-width: 768px) {
  .group-child {
    width: 100px;
  }

  .b {
    font-size: 24px;
  }

  .to-be-shipped {
    font-size: 12px;
  }
}

@media (max-width: 576px) {
  .group-child {
    width: 50%;
  }
}
</style>
