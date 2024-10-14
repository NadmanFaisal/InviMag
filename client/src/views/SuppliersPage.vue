<template>
    <div>
      <b-container fluid>
        <h1 class="display-5 fw-bold">Suppliers</h1>
        <p class="fs-4"></p>
      </b-container>
    </div>
  </template>
  
  <script>
  import {supplierApi} from '../api/SupplierApi';
export default {
    name: "SuppliersPage",
    data(){
      suppliers: []
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