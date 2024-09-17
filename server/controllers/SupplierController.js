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

// Gets all suppliers from the database

router.get('/suppliers', async function(req, res) {
    try {
        const suppliers = await Supplier.find();
        res.json({'suppliers': suppliers});
    } catch (error) {
        res.status(500).json({ error: 'Server error when getting all suppliers' }); // 500: Server Errors
    }
});

// Get a specific supplier by their ids

router.get('/suppliers/:id', async function (req, res) {
    var id = req.params.id;
    try {
        const supplier = await Supplier.findById(id);
        if (!supplier) {
            return res.status(404).json({"message": "Did not find supplier"}); // 404: Not found 
        }
        res.json(supplier);
    } catch (error) {
        res.status(500).json({ error: 'Server error when getting supplier from id' });
    }
});

// Delete supplier according to id

router.delete('/suppliers/:id', async function (req, res) {
    try {
        var id = req.params.id;
        var supplier = await Supplier.findByIdAndDelete(id);

        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }

        res.status(200).json(supplier); //Return deleted supplier, 200: Return OK response
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Delete all of suppliers 

router.delete('/suppliers', async function (req, res) {
    try {
        var suppliers = await Supplier.deleteMany();
        if (!suppliers) {
            return res.status(404).json({ message: 'Suppliers not found' });
        }
        
        res.status(200).json(suppliers); // Return number of supplier deleted
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


module.exports = router;