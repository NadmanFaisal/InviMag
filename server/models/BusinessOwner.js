const mongoose = require("mongoose");

// Defines schema
const schema = mongoose.Schema;

// No id required, mongoose does this automatically
const  businessOwnerSchema = new schema ({
    name: String,
    total_budget: String,
    email: String,
    password: String,
});

businessOwnerSchema.virtual('loginCredentials').get(function(){ 
    
    return '${this.email} ${this.password}'; 
});

// Compiles the model from the defined schema
const BusinessOwner = mongoose.model('BusinessOwner', businessOwnerSchema);

// Export function to crreate "BusinessOwner" model class
module.exports = BusinessOwner;