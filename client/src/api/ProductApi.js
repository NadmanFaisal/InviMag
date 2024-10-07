import { Api } from '../Api';

  export const productApi = {
    createProduct(newProduct){
        return Api.post('/Products/', newProduct);
    },

    getAllProducts(){
        return Api.get('/Products/');
    },

    getProductByID(id){
        return Api.get(`/Products/${id}`);
    },

    getAllProductsByBuyingPrice(sort_order){
        return Api.get('/Products/orderByBuyingPrice', sort_order);
    },

    getAllProductsBySellingPrice(sort_order){
        return Api.get('/Products/orderBySellingPrice', sort_order);
    },

    getAllProductsByQuantity(sort_order){
        return Api.get('/Products/orderByQuantity', sort_order);
    },

    getProductsByName(name){
        return Api.get(`/Products/search${name}`);
    },

    updateProductById(id, updatedProduct){
        return Api.get(`/Products/${id}`, updatedProduct);
    },
    
    deleteProductById(id){
        return Api.get(`/Products/${id}`);
    }

  }