const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    name: String,
    quantity: String,
    buying_price: String,
    selling_price: String,
    category: String,
    in_stock: Boolean,
    business_owner: {type: Schema.Types.ObjectId, ref: "BusinessOwner", required: true}
})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;