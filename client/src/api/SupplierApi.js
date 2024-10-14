import { Api } from '../Api';

  export const supplierApi = {
    createProduct(newSupplier){
        return Api.post('/suppliers', newSupplier);
    },
    
    getAllSuppliers(){
        return Api.get('/suppliers/');
    },

    getAllSuppliersByName(supplierName){
        return Api.get(`/suppliers/search/?name=${supplierName}`);
    }

}