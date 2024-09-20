const express = require('express');
const router = express.Router()
const Product = require('../models/Product')

router.post('/Products', async function (req, res, next ){

    var product = new Product({
        name: req.body.name,
        quantity: req.body.quantity,
        buying_price: req.body.buying_price,
        selling_price: req.body.selling_price,
        category: req.body.category,
        in_stock: req.body.in_stock,
        business_owner: req.body.business_owner,
        order_history: req.body.order_history
    });

    try{
        await product.save();
        res.status(201).json(product);

    }catch (error){
        next(error);
    }
});

router.get('/Products/', async function (req, res){
        
    try{
        const products = await Product.find();
        res.json({"Products" : products});
    } catch (error){
        res.status(500).json({ error: 'An error occurred while fetching Products' });
    }

});

router.get('/Products/:id', async function (req, res){
    var productID = req.params.id;
    try{
    var products = await Product.findById(productID);
    if(!products){
        res.status(404).json({"message" : "did not find product"})
    }
    res.status(200).json(products);
    } catch (error){
        res.status(500).json({ error: 'An error occurred while fetching Products' });
    }

});

router.delete('/Products/', async function (req, res) {
    try {
        var product = await Product.deleteMany();

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product); //Return deleted product, 200: Return OK response
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

router.delete('/Products/:id', async function (req, res) {
    try {
        var productID = req.params.id;
        var product = await Product.findByIdAndDelete(productID);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product); //Return deleted product, 200: Return OK response
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


router.put('/Products/:id', async function (req, res) {
    try {
        var id = req.params.id;
        const {name, quantity, buying_price, selling_price, category, in_stock} = req.body;

        // this to ensure that put does not act like patch.

        if (!req.body.name) {
            return res.status(404).json({ message: 'Name cannot be empty' });
        } else if (!req.body.quantity) {
            return res.status(404).json({ message: 'quantity cannnot be empty' });
        }else if(!req.body.buying_price){
            return res.status(404).json({ message: 'buying_price cannot be empty' });
        }else if(!req.body.selling_price){
            return res.status(404).json({ message: 'selling_price cannot be empty' });
        } else if(!req.body.category){
            return res.status(404).json({ message: 'category cannot be empty' });
        }else if(req.body.in_stock === null){
            return res.status(404).json({ message: 'in_stock cannot be empty' });
        }

        var updatedProduct = {name, quantity, buying_price, selling_price, category, in_stock};

        // true: to always return updated product
        var product = await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'Product was not found' });
        }

        res.status(200).json(product); // Return updated product

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});



router.patch('/Products/:id', async function (req, res){
    try{
        var productID = req.params.id;
        var products = await Product.findById(productID);
        if(!products){ // if the product with the inputted ID does not exist, then throw a 404 not found error
            res.status(404).json({"message" : "did not find product"})
        }
        // Creating a reference to an updated product
        var updated_product ={
            name: req.body.name || products.name,
            quantity: req.body.quantity || products.quantity,
            buying_price: req.body.buying_price || products.buying_price,
            selling_price : req.body.selling_price || products.selling_price,
            category : req.body.category || products.category,
            in_stock : req.body.in_stock || products.in_stock,
            business_owner : req.body.businessOwner || products.businessOwner
        };
        
        var new_products = await Product.findByIdAndUpdate(productID, updated_product, {new: true}); // assigning the old product reference to the new updated product
        res.json(new_products);
    }catch(error){
        res.status(500).json({ error: 'An error occurred while fetching Products' });
    }
});

    module.exports = router;
    