const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

router.get('/Products/search', productController.getProductsByName);
router.post('/Products/', productController.createProduct);
router.get('/Products/', productController.getAllProducts);
router.get('/Products/:id', productController.getProductByID);
router.delete('/Products/', productController.deleteAllProducts);
router.delete('/Products/:id', productController.deleteProductByID);
router.put('/Products/:id', productController.updateProductByIB);
router.patch('/Products/:id', productController.partialUpdateProduct);

module.exports = router;