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

    getAllProductsBySellingPrice(sort_order){
        return Api.get('/Products/orderBySellingPrice', sort_order);
    },

    getAllProductsByQuantity(sort_order){
        return Api.get('/Products/orderByQuantity', sort_order);
    },

    updateProductById(id, updatedProduct){
        return Api.get(`/Products/${id}`, updatedProduct);
    },
    
    deleteProductById(id){
        return Api.get(`/Products/${id}`);
    }

  }
