const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/SupplierController');

router.post('/Suppliers', supplierController.createSupplier);
router.get('/Suppliers/', supplierController.getAllSuppliers);
router.get('/Suppliers/:id', supplierController.getSupplierByID);
router.delete('/Suppliers/', supplierController.deleteAllSuppliers);
router.delete('/Suppliers/:id', supplierController.deleteSupplierByID);
router.put('/Suppliers/:id', supplierController.updateSupplierByID);
router.patch('/Suppliers/:id', supplierController.partialUpdateSupplier);


module.exports = router;