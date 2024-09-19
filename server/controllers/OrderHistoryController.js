const express = require('express');
const router = express.Router();
const OrderHistory = require('../models/OrderHistory');

// Creates an orderHistory with POST method with already specified IDs
router.post('/orderHistories', async function (req, res, next) {
    var orderHistory = new OrderHistory({
        total_price: req.body.total_price,
        date_of_order: req.body.date_of_order
    });

    try {
        await orderHistory.save();
        res.status(201).json(orderHistory);
    } catch (error) {
        next(error);
    }
});