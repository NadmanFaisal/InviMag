/**
 * Add Product API methods for Product APIs
 */
import { Api } from '../Api'

export const supplierApi = {
  // create supplier
  createProduct(newSupplier) {
    return Api.post('/suppliers', newSupplier)
  },
  // to get all suppliers
  getAllSuppliers() {
    return Api.get('/suppliers/')
  },
  // to get all suppliers by sorting with name
  getAllSuppliersByName(supplierName) {
    return Api.get(`/suppliers/search/?name=${supplierName}`)
  },
  // to get supplier by id
  getSupplierByID(supplierId) {
    return Api.get(`/suppliers/${supplierId}`)
  },
  // to get all suppliers
  getSupplierProducts(supplierId) {
    return Api.get(`/suppliers/${supplierId}/Products`)
  }

}
