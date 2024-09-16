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
    const id = req.params.id;
    const businessOwner = await BusinessOwner.findByIdAndDelete(id);
    res.json(businessOwner);
});

module.exports = router;