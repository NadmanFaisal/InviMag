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