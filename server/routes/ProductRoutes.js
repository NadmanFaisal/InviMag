const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

//Handles the routing logic for each HTTP request from the frontend

//Taking care of which endpoint should be used based on which header it has

router.post('/Products/', productController.createProduct);
router.get('/Products', productController.getAllProducts);
router.get('/Products/:id', productController.getProductByID);
router.delete('/Products/', productController.deleteAllProducts);
router.delete('/Products/:id', productController.deleteProductByID);
router.put('/Products/:id', productController.updateProductByID);
router.patch('/Products/:id', productController.partialUpdateProduct);

module.exports = router;