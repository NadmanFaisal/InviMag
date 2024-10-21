const express = require('express');
const router = express.Router();
const businessOwnerController = require('../controllers/BusinessOwnerController');

router.post('/BusinessOwners', businessOwnerController.createBusinessOwner);
router.post('/BusinessOwners/signup', businessOwnerController.signUpBusinessOwner);
router.post('/BusinessOwners/logout', businessOwnerController.logOutBusinessOwner);
router.get('/BusinessOwners/check-auth', businessOwnerController.checkAuthStatus);
router.get('/BusinessOwners/', businessOwnerController.getAllBusinessOwners);
router.get('/BusinessOwners/:id', businessOwnerController.getBusinessOwnerByID);
router.delete('/BusinessOwners/', businessOwnerController.deleteAllBusinessOwners);
router.delete('/BusinessOwners/:id', businessOwnerController.deleteBusinessOwnerByID);
router.put('/BusinessOwners/:id', businessOwnerController.updateBusinessOwnerByID);
router.patch('/BusinessOwners/:id', businessOwnerController.partialUpdateBusinessOwner);
router.post('/BusinessOwners/login', businessOwnerController.loginBusinessOwner);
router.get('/BusinessOwners/:id/orderHistories', businessOwnerController.getOrderHistories);
router.post('/BusinessOwners/:id/products', businessOwnerController.addProductToBusinessOwner);
router.get('/BusinessOwners/:id/products', businessOwnerController.getProductsByBusinessOwnerID);
module.exports = router;