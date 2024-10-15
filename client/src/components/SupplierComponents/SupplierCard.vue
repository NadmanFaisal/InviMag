<template>
    <button class="supplier-container">
    <ul>
        <div class = "supplier-info">
        <img :src= "supplierimage" class="supplier-image">
        <div class="supplier-title">{{ supplier.name }}
            <span class = "location-style">Location: {{ supplier.location_of_origin }}</span><br>
            <span class = "supplier-description">{{ supplier.description }}</span></div><br>
        </div>
    </ul>
    </button>
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
    height: 177px;                 
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
    width: 120px;                  /* Adjust the width of the image */
    height: 120px;                 /* Adjust the height of the image */
    object-fit: cover;            /* Keeps the aspect ratio of the image */
    padding: 5px;
    align-self: flex-start;
}

.supplier-title {
    font-size: 20px;              /* Adjust font size */
    margin: 0;                    /* Remove default margin */
    padding: 0;                   /* Remove default padding */
    color:black;
    font-family: "Istok Web";
    font-weight: bold;
    margin-top: -5px;
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



@media (max-width: 768px) {
    .supplierDisplay{
        margin: 0 auto;
        width: 100%; /* Take full width on small screens */
    }
}
</style>