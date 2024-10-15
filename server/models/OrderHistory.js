const mongoose = require("mongoose");
const Product = require('../models/Product');

// Defines schema for order history
const Schema = mongoose.Schema;

// No id required, mongoose does this automatically
const  orderHistorySchema = new Schema ({
    total_price: {type: Number, required: true},
    date_of_order: {type: Date, default: Date.now},

    // Many order history -> only one business owner.
    businessOwner: {type: Schema.Types.ObjectId, ref: "BusinessOwner", required: true},
    
    // One order history can have many products
    products: [{type: Schema.Types.ObjectId, ref: "Product", required: true}] // Needs to be changed to true
});

// Compiles the model from the defined schema
const OrderHistory = mongoose.model('OrderHistory', orderHistorySchema);

// Export function to crreate "Order history" model class
module.exports = OrderHistory;