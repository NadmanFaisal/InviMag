/* eslint-disable camelcase */
/**
 * Add Product API methods for Product APIs
 */
import { Api } from '../Api'

export const productApi = {
  // to create a product
  createProduct(newProduct) {
    return Api.post('/Products/', newProduct)
  },
  // to get all product
  getAllProducts() {
    return Api.get('/Products/')
  },
  // to get product by id
  getProductByID(id) {
    return Api.get(`/Products/${id}`)
  },

  // to update (put) product by id
  updateProductById(id, updatedProduct) {
    return Api.put(`/Products/${id}`, updatedProduct)
  },
  // to delete product by id
  deleteProductById(id) {
    return Api.delete(`/Products/${id}`)
  }

}
