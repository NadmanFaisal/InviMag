import axios from 'axios';

export const Api = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT || 'http://localhost:3000/api'
  });

  export const productApi = {
    createProduct(newProduct){
        return axios.post(`${baseURL}/Products/`, newProduct);
    },

    getAllProducts(){
        return axios.get(`${baseURL}/Products/`);
    },

    getProductByID(id){
        return axios.get(`${baseURL}/Products/${id}`);
    },

    getProductsByName(name){
        return axios.get(`${baseURL}/Products/search${name}`);
    },

    updateProductById(id, updatedProduct){
        return axios.get(`${baseURL}/Products/${id}`, updatedProduct);
    },
    
    deleteProductById(id){
        return axios.get(`${baseURL}/Products/${id}`);
    }

  }