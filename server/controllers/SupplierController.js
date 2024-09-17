const express = require('express');
const router = express.Router();
const Supplier = require('../models/Supplier');

// Creates a Supplier with POST method with already specified IDs
// Attributes depends on the request given, in our example, by Postman.

router.post('/suppliers', async function (req, res, next) {
    var supplier = new Supplier({
        name: req.body.name,
        location_of_origin: req.body.location_of_origin
    });

    try {
        await supplier.save();
        res.status(201).json(supplier); //201: Created entity, usually used for POST only
    } catch (error) {
        next(error);
    }
});

module.exports = router;