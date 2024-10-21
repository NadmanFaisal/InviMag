import { Api } from '../Api'

export const businessOwnerApi = {

  getBusinessOwnerProducts(id) {
    return Api.get(`/BusinessOwners/${id}/products`)
  },

  getAllProductsByBuyingPrice(id) {
    return Api.get(`/BusinessOwners/${id}/products?sort=buying_price`)
  },
  getAllProductsByQuantity(id) {
    return Api.get(`/BusinessOwners/${id}/products?sort=quantity`)
  }

}
