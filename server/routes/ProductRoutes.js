const express = require('express');
const router = express.Router();
var productController = require('../controllers/ProductController');

router.post('/Products', productController.createProduct);
router.get('/Products/', productController.getProducts);
router.get('/Products/:id', productController.getProductByID);
router.delete('/Products/', productController.deleteAllProducts);
router.delete('/Products/:id', productController.deleteProductByID);
router.put('/Products/:id', productController.updateProductByIB);
router.patch('/Products/:id', productController.partialUpdateProduct);


module.exports = router;