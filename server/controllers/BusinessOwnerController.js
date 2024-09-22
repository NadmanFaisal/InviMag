const BusinessOwner = require('../models/BusinessOwner');

// Creates a businessOwners with POST method with already specified IDs
exports.createBusinessOwner = async (req, res, next) => {
    var businessOwner = new BusinessOwner({
        name: req.body.name,
        total_budget: req.body.total_budget,
        email: req.body.email,
        password: req.body.password,
        products: req.body.products,
        orderHistories: req.body.orderHistories
    });

    try {
        await businessOwner.save();
        res.status(201).json(businessOwner);
    } catch (error) {
        next(error);
    }
}

// Gets all the businessOwners from the database
exports.getAllBusinessOwners = async (req, res) => {
    try {
        const businessOwners = await BusinessOwner.find();
        res.json({'businessOwners': businessOwners});
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retreiving all the business owners' });
    }
}

// Get a specific business owner specified by their IDs from the database
exports.getBusinessOwnerByID = async (req, res) => {
    var id = req.params.id;
    try {
        const businessOwner = await BusinessOwner.findById(id);
        if (!businessOwner) {
            return res.status(404).json({"message": "Did not find business owner"});
        }
        res.json(businessOwner);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retreiving the specific business owner' });
    }
}

// Will delete business owner according to its id
exports.deleteBusinessOwnerByID = async (req, res) =>{
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
}

 exports.deleteAllBusinessOwners = async (req, res) => {
    try {
        var businessOwners = await BusinessOwner.deleteMany();
        if (!businessOwners) {
            return res.status(404).json({ message: 'Business owners not found' });
        }
        // Returns how many business owners were deleted
        res.status(200).json(businessOwners);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

exports.updateBusinessOwnerByID = async  (req, res) => {
    try {
        var id = req.params.id;
        const { name, total_budget, email, password } = req.body;

        // Constraints to update ALL of the feilds of a business owner
        if (!req.body.name) {
            return res.status(404).json({ message: 'Name cannot be empty' });
        } else if (!req.body.total_budget) {
            return res.status(404).json({ message: 'Total budget cannot be empty' });
        } else if (!req.body.email) {
            return res.status(404).json({ message: 'Email cannot be empty' });
        } else if (!req.body.password) {
            return res.status(404).json({ message: 'Password cannot be empty' });
        }
        
        var updatedBusinessOwner = { name, total_budget, email, password };

        // { new: true } means that mongooseDB is to return only the updated business owner, and not the previous instance of it
        var businessOwner = await BusinessOwner.findByIdAndUpdate(id, updatedBusinessOwner, { new: true });
        if (!businessOwner) {
            return res.status(404).json({ message: 'Business owner was not found' });
        }
        // Return the new and updated business owner
        res.status(200).json(businessOwner);
    } catch (error) {
        // Any error is mentioned as Server error
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

exports.partialUpdateBusinessOwner =  async (req, res) => {
    try {
        var id = req.params.id;
        var initialOwner = await BusinessOwner.findById(id);
        // Prevents code break if initial owner is not found
        if (!initialOwner) {
            return res.status(404).json({ message: 'Business owner does not exist' });
        }

        var updatedBusinessOwner = {
            name: (req.body.name || initialOwner.name),
            total_budget: (req.body.total_budget || initialOwner.total_budget),
            email: (req.body.email || initialOwner.email),
            password: (req.body.password || initialOwner.password)
        };

        // { new: true } means that mongooseDB is to return only the updated business owner, and not the previous instance of it
        var businessOwner = await BusinessOwner.findByIdAndUpdate(id, updatedBusinessOwner, { new: true });
        if (!businessOwner) {
            return res.status(404).json({ message: 'Business owner was not found' });
        }
        // Return the new and updated business owner
        res.status(200).json(businessOwner);
    } catch (error) {
        // Any error is mentioned as Server error
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}
