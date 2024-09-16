const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    name: String,
    quantity: String,
    buying_Price: String,
    selling_Price: String,
    category: String,
    in_stock: Boolean

})

const ProductModel = mongoose.model("Product", ProductSchema);