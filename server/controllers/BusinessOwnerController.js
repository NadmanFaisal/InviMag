const express = require('express');
const router = express.Router();
const businessOwner = require('../models/BusinessOwner');

// // Creates a new business owner
// exports.createBusinessOwner = async (req, res) => {
//  const { name, total_budget, email, password } = req.body;
//  try {
//    const businessOwner = new BusinessOwner({ name, total_budget, email, password});
//    const savedBusinessOwner = await businessOwner.save();
//    res.status(201).json(savedBusinessOwner);
//  } catch (error) {
//    res.status(500).json({ error: 'Could not create the business owner' });
//  }
// };

// // Get a specific business owner by ID
// exports.getBusinessOwner = async (req, res) => {
//     const businessOwnerID = req.params.id;
//     try {
//       const businessOwner = await BusinessOwner.findById(businessOwnerID);
//         if (!businessOwner) {
//           return res.status(404).json({ error: 'Business owner not found' });
//           }
//           res.json(businessOwner);
//     } catch (error) {
//       res.status(500).json({ error: 'An error occurred while fetching the business owner' });
//     }
// };


router.post('/businessOwners', async function (req, res, next) {
    var businessOwner = new businessOwner({
        name: req.body.name,
        total_budget: req.body.total_budget,
        email: req.body.email,
        password: req.body.password,
    })

    try {
        await businessOwner.save();
    } catch (error) {
        next(error);
    }

    res.status(201).json(businessOwner);
});

router.get('/businessOwners', async function(req, res) {
    const businessOwners = await businessOwner.find();
    res.json({'businessOwners': businessOwners});
});

router.get('/businessOwners/:id', async function (req, res) {
    var id = req.params.id;
    const businessOwner = await businessOwner.findById(id);
    if(!businessOwner) {
        return res.status(404).json({"message": "Did not find business owners"});
    }

    res.json(businessOwner);
});

module.exports = router;