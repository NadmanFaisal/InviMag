const mongoose = require("mongoose");

// Defines schema
const Schema = mongoose.Schema;

// No id required, mongoose does this automatically
const  businessOwnerSchema = new Schema ({
    name: String,
    total_budget: Number,
    email: {type: String, unique: true},
    password: String,

    // One business owner can have multiple products
    products: [{type: Schema.Types.ObjectId, ref: "Product", required: false}],

    // One business owner can have multiple order histories
    orderHistories: [{type: Schema.Types.Object, ref: "OrderHistory", required: false}]
});

businessOwnerSchema.virtual('loginCredentials').get(function(){ 
    return '${this.email} ${this.password}'; 
});

// Compiles the model from the defined schema
const BusinessOwner = mongoose.model('BusinessOwner', businessOwnerSchema);

// Export function to crreate "BusinessOwner" model class
module.exports = BusinessOwner;