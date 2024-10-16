<template>
    <div class="supplier-container">
            <div class = "supplier-info">
                <img :src= "supplierimage" class="supplier-image">
                <div class="supplier-title">{{ supplier.name }}
                    <span class = "location-style">Location: {{ supplier.location_of_origin }}</span><br>
                    <span class = "supplier-description">{{ supplier.description }}</span><br>
                    <button @click="gotoSupplierDetail" class="detail-button">View Supplier Details</button>
                </div>
            </div>
    </div>
</template>
<script>
import supplierimage from '../SupplierComponents/Images/purple-user-icon.png'
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
        }

    }
}
</script>

<style scoped>

.supplier-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;                 
    padding-top: 30px;
    width: 100%;                  
    height: 200px;                 
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
    font-size: 15px;              /* Adjust font size */
    margin: 0;                    /* Remove default margin */
    padding: 0;                   /* Remove default padding */
    color: gray;
    font-family: "Istok Web";
    padding: 20px;
    margin-top: 0 !important;
    margin-left: 0 !important;
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
}

@media (max-width: 768px) {
    .supplierDisplay{
        margin: 0 auto;
        width: 100%; /* Take full width on small screens */
    }
}
</style>