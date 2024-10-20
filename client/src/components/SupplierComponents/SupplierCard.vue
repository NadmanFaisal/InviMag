<template>
    <b-col :cols="10" class="supplier-container">
            <b-col class = "supplier-info">
                <img :src= "supplierimage" class="supplier-image">
                <b-col class="supplier-title">{{ supplier.name }}
                    <span class = "location-style">Location: {{ supplier.location_of_origin }}</span><br>
                    <span class = "supplier-description">{{ supplier.description }}</span><br>
                    <button @click="goToSupplierDetail" class="detail-button">View Supplier Details</button><br>
                    <button @click.stop="blockSupplier" class="block-button">Block Supplier</button>
                </b-col>
            </b-col>
    </b-col>
</template>
<script>
import supplierimage from '../SupplierComponents/Images/purple-user-icon.png'
import { supplierApi } from '../../api/SupplierApi'; 

export default {
    name: 'SupplierCard',
    data(){
        return{
        supplierimage
        }
    },
    props: {
        supplier: {
            type: Object,
            required: true
        }
    },
    methods:{
        goToSupplierDetail(){
            this.$router.push({name: 'SupplierDetail', params: {id: this.supplier._id, supplier: this.supplier}})
        },

        async blockSupplier() {
            const confirmBlock = confirm(`Are you sure you want to block ${this.supplier.name}?`);
        if(confirmBlock){
      try {
        // Call your API to delete the supplier
        await supplierApi.deleteSupplierByID(this.supplier._id) // Ensure your API has this method
        // Emit an event to the parent component to remove this supplier from the list
        this.$emit('supplierBlocked', this.supplier._id);
      } catch (error) {
        console.error('Error blocking supplier:', error);
      }
    }else{
        console.log("Supplier Blocking cancelled")
    }
    }
    }
}
</script>

<style scoped>

.supplier-container {
    display: flex;
    justify-content: center;
    align-items: center;                 
    padding-top: 30px;
    padding-bottom: 15px;
    width: 120%;                  
    height: auto;                 
    border-radius: 10px;
    background: #FFF;
    margin-bottom: 20px;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.2);
}

.supplier-info {
    display: flex;
    align-items: center;          /* Aligns image and title vertically */
    gap: 16px;                    /* Adds space between image and title */
}

.supplier-image {
    width: 140px;                  /* Adjust the width of the image */
    height: 140px;                 /* Adjust the height of the image */
    object-fit: cover;            /* Keeps the aspect ratio of the image */
    padding: 15px;
    align-self: flex-start;
}

.supplier-title {
    font-size: 20px;              /* Adjust font size */
    margin: 0;                    /* Remove default margin */
    padding: 0;                   /* Remove default padding */
    color:black;
    font-family: "Istok Web";
    font-weight: bold;
    align-self: flex-start; 
    text-align: left;
}

.location-style{
    font-size: 18px;              /* Adjust font size */
    margin: 0;                    /* Remove default margin */
    padding: 0;                   /* Remove default padding */
    color: gray;
    font-family: "Istok Web";

}


.supplier-description{            
    color: gray;
    font-family: "Istok Web";
    padding: 50px;         /* Adjust bottom padding for more space */
    font-size: 14px;              /* Reduced font size */
    margin: 0;                    /* Remove default margin */
    padding: 5px 0;               /* Compact padding */
    color: gray;
    font-family: "Istok Web";
    line-height: 1;  
    width: 95%;
}

.detail-button {
    background-color: #37F;
    color: white;
    font-family: "Istok Web";
    font-weight: bold;
    font-size: 15px;
    border: none;
    padding: 10px 20px;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
    padding: 10px;
    height: 40px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.block-button{
    background-color: Red;
    color: white;
    font-family: "Istok Web";
    font-weight: bold;
    font-size: 15px;
    border: none;
    padding: 10px 20px;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
    padding: 10px;
    height: 40px;
    width: 200px;
}

@media (max-width: 768px) {

    .supplier-title{
        font-size: 15px;
    }

    .location-style{
        font-size: 15px;
    }
    .supplier-image{
        height: 110px;
        width: 110px;
    }

    .supplierDisplay{
        margin: 0 auto;
        width: 100%; /* Take full width on small screens */
    }

    .supplier-description{
        font-size: 10px;                        
        padding: 5px 0;              
        color: gray;
        font-family: "Istok Web";
        line-height: 1.2;  
    }

    .detail-button{
        font-size: 12px;
        width:150px
    }

    .block-button{
        font-size: 12px;
        width: 150px;
    }
}
</style>