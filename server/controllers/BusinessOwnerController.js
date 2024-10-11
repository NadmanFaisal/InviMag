const BusinessOwner = require('../models/BusinessOwner');
const { hashPassword, comparePassword } = require('../utilities/Authentication');
const jwt = require('../utilities/jwtUtils');

// Creates a businessOwners with POST method with already specified IDs
exports.createBusinessOwner = async (req, res, next) => {
    try {
    var businessOwner = new BusinessOwner({
        name: req.body.name,
        total_budget: req.body.total_budget,
        email: req.body.email,
        password: req.body.password,
        products: req.body.products,
        orderHistories: req.body.orderHistories
    });

    if(!businessOwner.name || businessOwner.name === ''){
        return res.status(400).json({ error: 'Bad Request, name field cannot be empty'});
    }
    if(!businessOwner.total_budget || businessOwner.total_budget === ''){
        return res.status(400).json({ error: 'Bad Request, quantity field cannot be empty'});
    }
    if(!businessOwner.email || businessOwner.email === ''){
        return res.status(400).json({ error: 'Bad Request, buying_price field cannot be empty'});
    }
    if(!businessOwner.password || businessOwner.password === ''){
        return res.status(400).json({ error: 'Bad Request, selling_price field cannot be empty'});
    }

    await businessOwner.save();
    res.status(201).json(businessOwner);
    
    } catch (error) {
        next(error);
    }
}

exports.signUpBusinessOwner = async (req, res, next) => {
    let businessOwner = new BusinessOwner({
        name: req.body.name,
        total_budget: req.body.total_budget || 0,
        email: req.body.email,
        password: req.body.password,
        products: req.body.products || [],
        orderHistories: req.body.orderHistories || []
    });

    // Error handling in regards to empty names and regex like a character before, and after the @ symbol and the dot , the symbol itself and a character after the dot

    const emailVerification = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!businessOwner.name || businessOwner.name === ''){
        return res.status(400).json({ error: 'Please enter a valid username'});
    }
    if(!businessOwner.email || businessOwner.email === '' || !emailVerification.test(businessOwner.email)){
        return res.status(400).json({ error: 'Please enter a valid email'});
    }
    if(!businessOwner.password || businessOwner.password === ''){
        return res.status(400).json({ error: 'Please enter a valid password'});
    }

    // hashPassword from utils file
    const hashedPassword = await hashPassword(businessOwner.password);
    //store hashedPassword so no hacker enters db and steals critical information
    businessOwner.password = hashedPassword

    try {
        await businessOwner.save();
        res.status(201).json(businessOwner);
    } catch (error) {
        // check if email already exists in the db.
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
            return res.status(409).json({ error: 'Email already exists' });
        }
        next(error);
    }
}

// Logs in Business Owner by creating cookies

exports.loginBusinessOwner = async (req, res) => {    
    console.log('Login request received');
    
    // Stores the email and password received from front end in constant variables
    const { email, password } = req.body;

    try {
        const businessOwner = await BusinessOwner.findOne({ email });

        if (!businessOwner) {
            return res.status(404).json({ message: 'No registered email was found. Sign up!' });
        }

        //comparePassword from utils to compare encrypted password

        const isPasswordValid = await comparePassword(password, businessOwner.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // JWT token creation, add id, email and name of the person accessing this session.

        const token = jwt.generateToken({
            id: businessOwner._id,
            email: businessOwner.email,
            name: businessOwner.name,
        });

        console.log('JWT Token:', token);

        // set cookie with JWT token
        jwt.setTokenCookie(res, token);

        console.log('Cookie set for auth_token:', token);

        console.log('Business Owner found:', businessOwner);

        res.status(200).json({ 
            id: businessOwner._id,
            name: businessOwner.name,   
            email: businessOwner.email
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
};

// Logs Out BusinessOwner by clearing cookies

exports.logOutBusinessOwner = (req, res, next) => {
    try {
        jwt.clearTokenCookie(res);
        res.status(200).json({message: 'Logout successful'})
    } catch (error) {
        next(error);
    }
};

// checks authentication for each HTTP request with JWT verify

exports.checkAuthStatus = async (req, res) => {
    try {
        const token = req.cookies.auth_token;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        const decoded = await jwt.verifyToken(token);
        res.status(200).json({ user: decoded }); 
    } catch (error) {
        console.error("Error verifying token:", error.message);
        next(error)
    }
};


// Gets all the businessOwners from the database, and if there is a sort condition, it sorts.
// If multiple business owners with the same total budget exist, it sorts by name.
exports.getAllBusinessOwners = async (req, res, next) => {
    try {
        const { sort_budget, sort_name } = req.query;
        let sortOption = {};

        // Sort total budget according to the sorting condition (ascending or descending)
        if (sort_budget === '+total_budget') {
            sortOption.total_budget = 1;
        } else if (sort_budget === '-total_budget') {
            sortOption.total_budget = -1;
        }

        // Sort name according to the sorting condition (ascending or descending)
        if (sort_name === '+name') {
            sortOption.name = 1;
        } else if (sort_name === '-name') {
            sortOption.name = -1;
        }

        const businessOwners = await BusinessOwner.find().sort(sortOption);
        res.json({ 'businessOwners': businessOwners });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving all the business owners' });
        next(error);
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
        next(error);
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
        next(error);
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
        next(error);
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
        next(error);
    }
}

exports.partialUpdateBusinessOwner =  async (req, res) => {
    try {
        var id = req.params.id;
        const { currentPassword, newPassword } = req.body;
        

        var initialOwner = await BusinessOwner.findById(id);
        // Prevents code break if initial owner is not found
        if (!initialOwner) {
            return res.status(404).json({ message: 'Business owner does not exist' });
        }

        if (currentPassword && newPassword) {
            // Compare current password with stored hashed password
            const isPasswordValid = await comparePassword(currentPassword, initialOwner.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid current password' });
            }

            // Hash the new password before storing
            const hashedNewPassword = await hashPassword(newPassword);
            initialOwner.password = hashedNewPassword;
        }

        var updatedBusinessOwner = {
            name: (req.body.name || initialOwner.name),
            total_budget: (req.body.total_budget || initialOwner.total_budget),
            email: (req.body.email || initialOwner.email),
            password: initialOwner.password
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
        next(error);
    }
}
