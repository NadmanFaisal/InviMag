import { Api } from '../Api';

  export const productApi = {
    getBusinessOwnerProducts(){
        return Api.get('/BusinessOwners/:id/products');
    },

    getAllProductsByBuyingPrice(id){
        return Api.get(`/BusinessOwners/${id}/products/orderByBuyingPrice`);
    },

}