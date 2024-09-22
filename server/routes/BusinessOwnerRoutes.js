const express = require('express');
const router = express.Router();
const businessOwnerController = require('../controllers/BusinessOwnerController');

router.post('/BusinessOwners', businessOwnerController.createBusinessOwner);
router.get('/BusinessOwners/', businessOwnerController.getAllBusinessOwners);
router.get('/BusinessOwners/:id', businessOwnerController.getBusinessOwnerByID);
router.delete('/BusinessOwners/', businessOwnerController.deleteAllBusinessOwners);
router.delete('/BusinessOwners/:id', businessOwnerController.deleteBusinessOwnerByID);
router.put('/BusinessOwners/:id', businessOwnerController.updateBusinessOwnerByID);
router.patch('/BusinessOwners/:id', businessOwnerController.partialUpdateBusinessOwner);


module.exports = router;