const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    name: String,
    quantity: String,
    buying_price: String,
    selling_price: String,
    category: String,
    in_stock: Boolean,
    
    // Many products can have one business owner
    businessOwner: {type: Schema.Types.ObjectId, ref: "BusinessOwner", required: false},
    
    // Many products can have one order history
    orderHistory: {type: Schema.Types.ObjectId, ref: "OrderHistory", required: false}
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;