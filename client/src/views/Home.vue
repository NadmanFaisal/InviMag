<template>
  <div>
    <b-container fluid>
      <b-row class="min-vh-100">
        <b-row>
          <!-- Left Section (Empty or Sidebar Space) -->
          <b-col cols="2" class="empty-left-section">
          </b-col>

          <!-- Main Content Section -->
          <b-col cols="10" class="home-section">
            <!-- Profile Picture and Overview at the top -->
            <ProfilePic />
            <Overview />

            <!-- Four Boxes (Responsive) -->
            <b-row class="mt-4">
              <!-- Products Details -->
              <b-col lg="6" md="12" class="mb-3">
                <ProductDetails />
              </b-col>

              <!-- Best Selling Products -->
              <b-col lg="6" md="12" class="mb-3">
                <BestSellingProducts />
              </b-col>
            </b-row>

            <b-row>
              <!-- Costly Products -->
              <b-col lg="6" md="12" class="mb-3">
                <CostlyProducts />
              </b-col>

              <!-- Popular Products -->
              <b-col lg="6" md="12" class="mb-3">
                <PopularProducts />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  name: 'home',
  data() {
    return {
      message: 'none'
    }
  },
  methods: {
    getMessage() {
      Api.get('/')
        .then(response => {
          this.message = response.data.message
        })
        .catch(error => {
          this.message = error
        })
    }
  }
}
</script>

<style scoped>
.row {
  margin: 0;
}

.container-fluid {
  padding: 0;
}

.empty-left-section {
  display: flex;
  flex-direction: column;
  background: #ffffff;
}

.home-section{
  display: flex;
  flex-direction: column;
  background: #ffffff;
}

.content-section {
  padding: 20px;
  background: #ffffff;
}

@media screen and (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  .home-section {
    flex: none;
    width: 100%;
    padding: 10px;
  }
  .content-section {
    flex: none;
    width: 100%;
    padding: 10px;
  }

   .left-section {
    display: none;
   }

}

</style>
