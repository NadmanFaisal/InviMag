const express = require('express');
const router = express.Router();
const BusinessOwner = require('../models/BusinessOwner');

// Creates a businessOwners with POST method with already specified IDs
router.post('/businessOwners', async function (req, res, next) {
    var businessOwner = new BusinessOwner({
        name: req.body.name,
        total_budget: req.body.total_budget,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        await businessOwner.save();
        res.status(201).json(businessOwner);
    } catch (error) {
        next(error);
    }
});

// Gets all the businessOwners from the database
router.get('/businessOwners', async function(req, res) {
    try {
        const businessOwners = await BusinessOwner.find();
        res.json({'businessOwners': businessOwners});
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching business owners' });
    }
});

// Get a specific business owner specified by their IDs from the database
router.get('/businessOwners/:id', async function (req, res) {
    var id = req.params.id;
    try {
        const businessOwner = await BusinessOwner.findById(id);
        if (!businessOwner) {
            return res.status(404).json({"message": "Did not find business owner"});
        }
        res.json(businessOwner);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the business owner' });
    }
});

// Will delete business owner according to its id
router.delete('/businessOwners/:id', async function (req, res) {
    try {
        // Var instead of const cause i want to re-declare it if required in future.
        var id = req.params.id;
        var businessOwner = await BusinessOwner.findByIdAndDelete(id);

        if (!businessOwner) {
            return res.status(404).json({ message: 'Business owner not found' });
        }
        // Returns the details of the deleted business owner
        res.status(200).json(businessOwner);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;