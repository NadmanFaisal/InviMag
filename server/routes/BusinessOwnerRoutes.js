const express = require('express');
const router = express.Router();
const businessOwnerController = require('../controllers/BusinessOwnerController');

router.post('/BusinessOwners', businessOwnerController.createBusinessOwner);
router.post('/BusinessOwners/signup', businessOwnerController.signUpBusinessOwner);
router.post('/BusinessOwners/logout', businessOwnerController.logOutBusinessOwner);
router.get('/check-auth', businessOwnerController.checkAuthStatus);
router.get('/BusinessOwners/', businessOwnerController.getAllBusinessOwners);
router.get('/BusinessOwners/:id', businessOwnerController.getBusinessOwnerByID);
router.delete('/BusinessOwners/', businessOwnerController.deleteAllBusinessOwners);
router.delete('/BusinessOwners/:id', businessOwnerController.deleteBusinessOwnerByID);
router.put('/BusinessOwners/:id', businessOwnerController.updateBusinessOwnerByID);
router.patch('/BusinessOwners/:id', businessOwnerController.partialUpdateBusinessOwner);
router.post('/login', businessOwnerController.loginBusinessOwner);


module.exports = router;