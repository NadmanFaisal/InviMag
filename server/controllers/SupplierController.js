const express = require('express');
const router = express.Router();
const Supplier = require('../models/Supplier');
const Product = require('../models/Product');

// Creates a Supplier with POST method with already specified IDs
// Attributes depends on the request given, in our example, by Postman.

exports.createSupplier = async (req, res, next) => {
    const supplier = new Supplier({
        name: req.body.name,
        location_of_origin: req.body.location_of_origin,
        products: req.body.products
    });

    try {
        await supplier.save();
        res.status(201).json(supplier); //201: Created entity, usually used for POST only
    } catch (error) {
        next(error); // sends it over to app.js, where it will see if the developer is in development mode, it will display the error stack
    }
}

// Adds product to existing supplier

exports.addProductToSupplier = async(req, res, next) => {
    const id = req.params.id;

    try {

        const supplier = await Supplier.findById(id).populate('products'); // populate allows us to view the whole product with its fields, rather than the id field only

        if (!supplier) {
            return res.status(404).json({message: 'Did not find supplier'});
        }

        // create new product
        const newProduct = new Product({
            name: req.body.name,
            quantity: req.body.quantity,
            buying_price: req.body.buying_price,
            selling_price: req.body.selling_price,
            category: req.body.category,
            in_stock: req.body.in_stock,
            business_owner: req.body.business_owner,
            order_history: req.body.order_history
        });

        // save product to database & add product to supplier list
        const savedProduct = await newProduct.save();
        supplier.products.push(savedProduct);

        await supplier.save();

        res.status(201).json({
            message: 'Product has been added to supplier.',
            supplier: supplier,
            product_id: savedProduct._id
        }); // return product to save it in postman environment variables.
    }
    catch(error) {
        next(error);
    }
}

// Get all products from a specific supplier

exports.getProductsBySupplierId = async (req, res, next) => {
    const id = req.params.id;

    try {
        const supplier = await Supplier.findById(id).populate('products');

        if(!supplier){
            return res.status(404).json({message: 'Did not find supplier'});
        }

        res.status(200).json({'products': supplier.products}); // return all products from supplier

    } catch (error) {
        next(error);
    }
}

// Get a specific product from a specific supplier

exports.getSpecificProductBySupplierId = async(req, res, next) => {
    const supplierId = req.params.id;
    const productId = req.params.product_id;

    try {
        const supplier = await Supplier.findById(supplierId).populate('products');

        if(!supplier){
            return res.status(404).json({message: 'Did not find supplier'});
        }

        // compare id to find specific product from the product list of suppliers
        const product = supplier.products.find(product => product._id.toString() === productId);

        if(!product) {
            return res.status(404).json({message: 'Product not found in this supplier'});
        }

        res.status(200).json(product);

    } catch (error) {
        next(error);
    }
}


// Gets all suppliers from the database

exports.getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.json({'suppliers': suppliers});
    } catch (error) {
        res.status(500).json({ error: 'Server error when getting all suppliers' }); // 500: Server Errors
    }
}

// Get a specific supplier by their ids

exports.getSupplierByID =  async  (req, res) => {
    var id = req.params.id;
    try {
        const supplier = await Supplier.findById(id);
        if (!supplier) {
            return res.status(404).json({"message": "Did not find supplier"}); // 404: Not found 
        }
        res.json(supplier);
    } catch (error) {
        res.status(500).json({ error: 'Server error when getting supplier from id' });
    }
}

// Delete supplier according to id

exports.deleteSupplierByID =  async  (req, res) => {
    try {
        var id = req.params.id;
        var supplier = await Supplier.findByIdAndDelete(id);

        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }

        res.status(200).json(supplier); //Return deleted supplier, 200: Return OK response
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

// Delete all of suppliers 

exports.deleteAllSuppliers = async (req, res) => {
    try {
        var suppliers = await Supplier.deleteMany();
        if (!suppliers) {
            return res.status(404).json({ message: 'Suppliers not found' });
        }
        
        res.status(200).json(suppliers); // Return number of supplier deleted
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

// update all fields of a supplier

exports.updateSupplierByID = async  (req, res) => {
    try {
        var id = req.params.id;
        const {name, location_of_origin} = req.body;

        // this to ensure that put does not act like patch.

        if (!req.body.name) {
            return res.status(404).json({ message: 'Name cannot be empty' });
        } else if (!req.body.location_of_origin) {
            return res.status(404).json({ message: 'Location of origin cannot be empty' });
        }

        var updatedSupplier = {name, location_of_origin};

        // true: to always return updated supplier
        var supplier = await Supplier.findByIdAndUpdate(id, updatedSupplier, { new: true });
        if (!supplier) {
            return res.status(404).json({ message: 'Supplier was not found' });
        }

        res.status(200).json(supplier); // Return updated supplier

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

// update specific field of a supplier

exports.partialUpdateSupplier =  async  (req, res) => {
    try {
        var id = req.params.id;
        var initialSupplier = await Supplier.findById(id);

        if (!initialSupplier) {
            return res.status(404).json({ message: 'Supplier does not exist' });
        }

        var updatedSupplier = {
            name: (req.body.name || initialSupplier.name),
            location_of_origin: (req.body.location_of_origin || initialSupplier.location_of_origin)
        };

        var supplier = await Supplier.findByIdAndUpdate(id, updatedSupplier, { new: true });
        if (!supplier) {
            return res.status(404).json({ message: 'Supplier was not found' });
        }

        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}
