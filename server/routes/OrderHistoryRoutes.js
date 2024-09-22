const express = require('express');
const router = express.Router();
const orderHistoryController = require('../controllers/OrderHistoryController');

router.post('/OrderHistories', orderHistoryController.createOrderHistory);
router.get('/OrderHistories/', orderHistoryController.getAllOrderHistories);
router.get('/OrderHistories/:id', orderHistoryController.getOrderHistoriesByID);
router.delete('/OrderHistories/', orderHistoryController.deleteAllOrderHistories);
router.delete('/OrderHistories/:id', orderHistoryController.deleteOrderHistoryByID);
router.put('/OrderHistories/:id', orderHistoryController.updateOrderHistoryByID);
router.patch('/OrderHistories/:id', orderHistoryController.partialUpdateOrderHistory);

module.exports = router;