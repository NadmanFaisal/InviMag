const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/SupplierController');

router.post('/suppliers', supplierController.createSupplier);
router.post('/suppliers/:id/Products', supplierController.addProductToSupplier);
router.get('/suppliers/search/',supplierController.getSuppliersByName);
router.get('/suppliers/:id/Products', supplierController.getProductsBySupplierId);
router.get('/suppliers/:id/Products/:product_id', supplierController.getSpecificProductBySupplierId);
router.get('/suppliers/', supplierController.getAllSuppliers);
router.get('/suppliers/:id', supplierController.getSupplierByID);
router.delete('/suppliers/:id/Products/:product_id', supplierController.deleteSpecificProductBySupplierId)
router.delete('/suppliers/', supplierController.deleteAllSuppliers);
router.delete('/suppliers/:id', supplierController.deleteSupplierByID);
router.put('/suppliers/:id', supplierController.updateSupplierByID);
router.patch('/suppliers/:id', supplierController.partialUpdateSupplier);


module.exports = router;