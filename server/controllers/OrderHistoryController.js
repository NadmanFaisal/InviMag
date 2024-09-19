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

// Replace all of the values of a particular order history
router.put('/orderHistories/:id', async function (req, res) {
    try {
        var id = req.params.id;
        const {total_price, date_of_order, businessOwner, products} = req.body;

        if (!req.body.total_price) {
            return res.status(404).json({ message: 'Total price cannot be empty' });
        } else if (!req.body.date_of_order) {
            return res.status(404).json({ message: 'Date of order cannot be empty' });
        } else if (!req.body.businessOwner) {
            return res.status(404).json({ message: 'Business owner IDs cannot be empty' });
        } else if (!req.body.products) {
            return res.status(404).json({ message: 'Product IDs cannot be empty' });
        }

        var updateOrderHistory = {total_price, date_of_order, businessOwner, products};

        var orderHistory = await OrderHistory.findByIdAndUpdate(id, updateOrderHistory, { new: true });
        if (!orderHistory) {
            return res.status(404).json({ message: 'Order history was not found' });
        }

        res.status(200).json(orderHistory);

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Updates a specific field for a specific order history
router.patch('/orderHistories/:id', async function (req, res) {
    try {
        var id = req.params.id;
        
        // Fetch the existing order history
        var initialOrderHistory = await OrderHistory.findById(id);
        if (!initialOrderHistory) {
            return res.status(404).json({ message: 'Order History does not exist' });
        }

        // Prepare the update object
        var updateOrderHistory = {
            total_price: req.body.total_price || initialOrderHistory.total_price,
            date_of_order: req.body.date_of_order || initialOrderHistory.date_of_order,
            businessOwner: req.body.businessOwner || initialOrderHistory.businessOwner,
            products: req.body.products || initialOrderHistory.products
        };

        // Update the order history
        var orderHistory = await OrderHistory.findByIdAndUpdate(id, updateOrderHistory, { new: true });
        if (!orderHistory) {
            return res.status(404).json({ message: 'Order history was not updated' });
        }

        // Return the updated order history
        res.status(200).json(orderHistory);
    } catch (error) {
        // Log the error and return a server error response
        console.error('Error updating order history:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Deletes order history according to the provided ID
router.delete('/orderHistories/:id', async function (req, res) {
    try {
        var id = req.params.id;
        var orderHistory = await OrderHistory.findByIdAndDelete(id);

        if (!orderHistory) {
            return res.status(404).json({ message: 'Order history not found' });
        }

        res.status(200).json(orderHistory); //Return deleted order history, 200: Return OK response
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;