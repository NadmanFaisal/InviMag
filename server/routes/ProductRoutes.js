const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

router.post('/Products/', productController.createProduct);
router.get('/Products', productController.getAllProducts);
router.get('/Products/orderByBuyingPrice', productController.getAllProductsByBuyingPrice);
router.get('/Products/orderBySellingPrice', productController.getAllProductsBySellingPrice);
router.get('/Products/orderByQuantity', productController.getAllProductsByQuantity);
router.get('/Products/:id', productController.getProductByID);
router.delete('/Products/', productController.deleteAllProducts);
router.delete('/Products/:id', productController.deleteProductByID);
router.put('/Products/:id', productController.updateProductByID);
router.patch('/Products/:id', productController.partialUpdateProduct);

module.exports = router;