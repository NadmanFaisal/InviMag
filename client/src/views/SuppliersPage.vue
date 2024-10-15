<template>
    <b-col>
      <b-col :cols = "2"></b-col>
      <b-container fluid>
        <h1 class="display-5 fw-bold supplierCardStyle">Suppliers</h1>
        <b-col :cols="10" class = "supplierCardStyle">
          <h1 class="input-hint-style">Click the supplier to view their products.</h1>
        <ul>
          <SupplierCard v-for="supplier in suppliers" :key="supplier._id" :supplier = "supplier"></SupplierCard>  
        </ul>
        </b-col>
        <p class="fs-4"></p>
      </b-container>
    </b-col>
  </template>
  
  <script>
  import {supplierApi} from '../api/SupplierApi';
  import SupplierCard from '../components/SupplierComponents/SupplierCard.vue'
export default {
    components:{
      SupplierCard
    },
    name: "SuppliersPage",
    data(){
      return{
      suppliers: []
      
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

        }catch(error){
          console.error('An Error occured when fetching suppliers:', error);
        }
      },

    },




}




  </script>

  <style scoped>
  .input-hint-style{
    font-family: "Istok Web";
    font-size: 15px;
    color: gray;
    text-align: center;
  }
.testDisplayFont{
  color: black;
  font-size: 20px;
  font-weight: bold;
  font-family: "Istok Web", "Sans Serif";
}

.supplierCardStyle{
  margin-left: 16.66667%;
}




  </style>