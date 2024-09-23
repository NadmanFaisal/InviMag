const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const supplierSchema = new Schema({

    name: String,
    location_of_origin: String,
    products: [{type: Schema.Types.ObjectId, ref: "Product", required: false}]
})

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;