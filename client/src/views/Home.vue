<template>
  <div>
    <b-container fluid>
      <!-- uses b-row and b-col to display the information based on a BootStrap's rows and columns-->
      <b-row class="min-vh-100">
        <b-row>
          <b-col cols="2" class="empty-left-section">
          </b-col>

          <b-col cols="10" class="home-section">
            <ProfilePic />
            <Overview />

            <b-row class="mt-4">
              <b-col lg="6" md="12" class="mb-3">
                <AmountSpentOnOrders />
              </b-col>

              <b-col lg="6" md="12" class="mb-3">
                <TotalInventoryValue />
              </b-col>
            </b-row>

            <b-row>
              <b-col lg="6" md="12" class="mb-3">
                <ProductsInBasket />
              </b-col>

              <b-col lg="6" md="12" class="mb-3">
                <TotalInventoryProducts />
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
