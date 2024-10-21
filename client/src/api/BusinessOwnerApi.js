import { Api } from '../Api'

export const businessOwnerApi = {

  // gets products from business owners id
  getBusinessOwnerProducts(id) {
    return Api.get(`/BusinessOwners/${id}/products`)
  },
  // gets all products sorted by buying price with business owner id
  getAllProductsByBuyingPrice(id) {
    return Api.get(`/BusinessOwners/${id}/products/orderByBuyingPrice`)
  },
  // gets all products sorted by quantity with business owner id
  getAllProductsByQuantity(id) {
    return Api.get(`/BusinessOwners/${id}/products/orderByQuantity`)
  }

}
