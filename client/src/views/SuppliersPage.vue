<template>
    <b-col class = "supplier-page-style">
      <b-col :cols = "2"></b-col>
      <b-container fluid>
        <h1 class="display-5 fw-bold">Suppliers</h1>
        <b-col class="search-bar">
        <b-input-group>
          <!-- Search Icon -->
          <b-input-group-prepend>
            <b-input-group-text>
              <img :src= "searchicon" class="bi-search"/> <!-- Bootstrap icon for search -->
            </b-input-group-text>
          </b-input-group-prepend>

          <!-- Search Input -->
          <b-form-input
            v-model="searchQuery"
            placeholder="Search for a supplier..."
            class="search-input"
          ></b-form-input>

          <!-- Search Button -->
          <b-input-group-append>
            <b-button variant="primary" @click="filterSuppliers">Search</b-button>
            </b-input-group-append>
          </b-input-group>
      </b-col>
        <b-col v-if="filteredSuppliers.length" :cols="10" class = "supplierCardStyle">
        <ul>
          <b-col v-for="supplier in filteredSuppliers" :key="supplier._id" @click.native="goToSupplierDetail(supplier)">
          <SupplierCard :supplier = "supplier"></SupplierCard>
          </b-col>
        </ul>
        </b-col>
        <b-col v-else>No Suppliers Found</b-col>
        <p class="fs-4"></p>
      </b-container>
    </b-col>
  </template>
  
  <script>
  import {supplierApi} from '../api/SupplierApi';
  import SupplierCard from '../components/SupplierComponents/SupplierCard.vue'
  import searchicon from '../components/SupplierComponents/Images/search-icon.png'
export default {
    components:{
      SupplierCard
    },
    name: "SuppliersPage",
    data(){
      return{
      suppliers: [],
      filteredSuppliers: [],
      searchicon,
      searchQuery: '',
      
      
      }
    },

    created(){
      this.fetchSuppliers();
    },
    methods:{

      async fetchSuppliers(){
        try{
          const response = await supplierApi.getAllSuppliers();
          this.suppliers = response.data.suppliers;
          this.filteredSuppliers = this.suppliers;

        }catch(error){
          console.error('An Error occured when fetching suppliers:', error);
        }
      },
      
      filterSuppliers() {
      const query = this.searchQuery.trim().toLowerCase();
      if (!query) {
        this.filteredSuppliers = this.suppliers;
      } else {
        this.filteredSuppliers = this.suppliers.filter(supplier =>
          supplier.name.toLowerCase().includes(query) ||
          (supplier.description && supplier.description.toLowerCase().includes(query)) ||
          (supplier.location_of_origin && supplier.location_of_origin.toLowerCase().includes(query))
        );
      }
    },
  
      goToSupplierDetail(supplier){
        this.$router.push({
        name: 'SupplierDetail',
        params: { id: supplier._id }
      });
      },


    },




}




  </script>

  <style scoped>
  .testDisplayFont{
  color: black;
  font-size: 20px;
  font-weight: bold;
  font-family: "Istok Web", "Sans Serif";
}

.supplier-page-style{
  margin-left: 16.66667%;
}
.search-bar {
  display: flex;
  width: 80%;              
  margin-left: auto;      
  margin-right: auto;  
  align-items: center;      
  justify-content: center;   
  margin-top: 20px;
  padding: 20px;
}

.b-input-group {
  justify-content: center;
  width: 712px;
  margin: 0 auto;
}
.bi-search {
  width: 24px;
  height: 24px;
  color: black;
}

@media (max-width: 768px) {
  .supplier-page-style{
    margin-left: 0;
  }
  
}


  </style>