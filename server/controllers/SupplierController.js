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

exports.getSuppliersByName = async (req, res, next) => {
    const supplierName = req.query.name;
    try{
        const suppliers = await Supplier.find({name: {$regex: supplierName, $options: 'i'}});
        if(suppliers.length === 0){
            res.status(404).json({message: 'No suppliers found with the given name'});
        }
        return res.status(200).json({"Suppliers": suppliers});
    }catch(error){
        res.status(500).json({ error: 'An error occurred while fetching Suppliers' })
        next(error)
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

// Delete a specific product from a specific supplier

exports.deleteSpecificProductBySupplierId = async(req, res, next) => {
    const supplierId = req.params.id;
    const productId = req.params.product_id;

    try {
        const supplier = await Supplier.findById(supplierId).populate('products');

        if(!supplier){
            return res.status(404).json({message: 'Did not find supplier'});
        }
        
        // find index of product through searching the product list and finding which productid is equivalent to request of productid
        const productIndex = supplier.products.findIndex(product => product._id.toString() === productId);


        // here we cannot check if product.length == 0 since if I remove last product it will be empty and still throw error,
        // so i had to do it through indexing for that particular situation
        
        // returns -1 if it cant find it, so we throw 404 error
        if (productIndex === -1) {
            return res.status(404).json({ message: 'Product not found in the supplier\'s product list' });
        }

        // removes the product through finding its id
        const removedProduct = supplier.products.pull({ _id: productId });
        await supplier.save();

        // delete it from the product collection also
        await Product.findByIdAndDelete(productId);

        res.status(200).json({
            message: 'Removed product from suppliers product list. Remaining products in suppliers list:- ',
            product: removedProduct
        });

    } catch (error) {
        next(error);
    }
}


// Gets all suppliers from the database

exports.getAllSuppliers = async (req, res, next) => {
    try {
        const suppliers = await Supplier.find().populate('products');
        res.status(200).json({'suppliers': suppliers});
    } catch (error) {
        next(error);
    }
}

// Get a specific supplier by their ids

exports.getSupplierByID =  async  (req, res, next) => {
    const id = req.params.id;
    try {
        const supplier = await Supplier.findById(id).populate('products');
        if (!supplier) {
            return res.status(404).json({"message": "Did not find supplier"}); // 404: Not found 
        }
        res.status(200).json(supplier);
    } catch (error) {
        next(error);
    }
}

// Delete supplier according to id

exports.deleteSupplierByID =  async  (req, res, next) => {
    try {
        const id = req.params.id;
        const supplier = await Supplier.findByIdAndDelete(id).populate('products');

        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }

        res.status(200).json(supplier); //Return deleted supplier, 200: Return OK response
    } catch (error) {
        next(error);
    }
}

// Delete all of suppliers 

exports.deleteAllSuppliers = async (req, res, next) => {
    try {
        const suppliers = await Supplier.deleteMany();
        if (!suppliers) {
            return res.status(404).json({ message: 'Suppliers not found' });
        }
        
        res.status(200).json(suppliers); // Return number of supplier deleted
    } catch (error) {
        next(error);
    }
}

// update all fields of a supplier

exports.updateSupplierByID = async  (req, res, next) => {
    try {
        const id = req.params.id;
        const {name, location_of_origin} = req.body;

        // this to ensure that put does not act like patch.

        if (!req.body.name) {
            return res.status(404).json({ message: 'Name cannot be empty' });
        } else if (!req.body.location_of_origin) {
            return res.status(404).json({ message: 'Location of origin cannot be empty' });
        }

        let updatedSupplier = {name, location_of_origin};

        // true: to always return updated supplier
        const supplier = await Supplier.findByIdAndUpdate(id, updatedSupplier, { new: true }).populate('products');
        if (!supplier) {
            return res.status(404).json({ message: 'Supplier was not found' });
        }

        res.status(200).json(supplier); // Return updated supplier

    } catch (error) {
        next(error);
    }
}

// update specific field of a supplier

exports.partialUpdateSupplier =  async  (req, res, next) => {
    try {
        const id = req.params.id;
        const initialSupplier = await Supplier.findById(id);

        if (!initialSupplier) {
            return res.status(404).json({ message: 'Supplier does not exist' });
        }

        // check for updated values to add, if not found, then just add the original value

        let updatedSupplier = {
            name: (req.body.name || initialSupplier.name),
            location_of_origin: (req.body.location_of_origin || initialSupplier.location_of_origin)
        };

        // update with new values, and we want the new values hence new: true
        const supplier = await Supplier.findByIdAndUpdate(id, updatedSupplier, { new: true }).populate('products');
        if (!supplier) {
            return res.status(404).json({ message: 'Supplier was not found' });
        }

        res.status(200).json(supplier);
    } catch (error) {
        next(error);
    }
}
