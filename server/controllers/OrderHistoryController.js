const express = require('express');
const router = express.Router();
const OrderHistory = require('../models/OrderHistory');

// Creates an orderHistory with POST method with already specified IDs
router.post('/orderHistories', async function (req, res, next) {
    try {
        var orderHistory = new OrderHistory({
            total_price: req.body.total_price,
            date_of_order: req.body.date_of_order,
            businessOwner: req.body.businessOwner,
            products: req.body.products
    });
        
        await orderHistory.save();
        res.status(201).json(orderHistory);
    } catch (error) {
        next(error);
    }
});

// Gets all the orderHistories from the database
router.get('/orderHistories', async function(req, res) {
    try {
        const orderHistories = await OrderHistory.find();
        res.json({'orderHistories': orderHistories});
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retreiving all the order histories.' });
    }
});

// Get a specific supplier by their ids
router.get('/orderHistories/:id', async function (req, res) {
    var id = req.params.id;
    try {
        const orderHistory = await OrderHistory.findById(id);
        if (!orderHistory) {
            return res.status(404).json({"message": "Did not find any order histories."}); // 404: Not found 
        }
        res.json(orderHistory);
    } catch (error) {
        res.status(500).json({ error: 'Server error when getting order history from id' });
    }
});



module.exports = router;