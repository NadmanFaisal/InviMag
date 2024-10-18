const Product = require('../models/Product')
const OrderHistory = require('../models/OrderHistory')

exports.createProduct = async (req, res, next ) => {

    let product = new Product({
        name: req.body.name,
        quantity: req.body.quantity,
        buying_price: req.body.buying_price,
        selling_price: req.body.selling_price,
        category: req.body.category,
        in_stock: req.body.in_stock,
        business_owner: req.body.business_owner,
        order_history: req.body.order_history
    });
    
    if(!product.name || product.name === ''){
        return res.status(400).json({ error: 'Bad Request, name field cannot be empty'});
    }
    if(!product.quantity || product.quantity === ''){
        return res.status(400).json({ error: 'Bad Request, quantity field cannot be empty'});
    }
    if(!product.buying_price || product.buying_price === ''){
        return res.status(400).json({ error: 'Bad Request, buying_price field cannot be empty'});
    }
    if(!product.selling_price || product.selling_price === ''){
        return res.status(400).json({ error: 'Bad Request, selling_price field cannot be empty'});
    }
    if(!product.category || product.category === ''){
        return res.status(400).json({ error: 'Bad Request, category field cannot be empty'});
    }
    if(product.in_stock === null){
        return res.status(400).json({ error: 'Bad Request, in_stock field cannot be empty'});
    }
    if(product.in_stock === false && product.quantity > 0){
        return res.status(400).json({ error: 'Out of stock product needs to have a quantity of 0'});
    }
    try{
        const savedProduct = await product.save();
        const orderHistoryId = req.body.order_history;

        await OrderHistory.findByIdAndUpdate(
            orderHistoryId,
            { $push: { products: savedProduct._id } },
            { new: true }
        );
        res.status(201).json(product);

    }catch (error){
        res.status(500).json({ error: 'An error occurred while creating a product' });
        next(error);
    }
}

exports.getAllProducts =  async (req, res, next) =>  {    
    try{
        const products = await Product.find();
        if(!products){
            return res.status(404).json({"message" : "No products found"});
        }
        res.status(200).json({"Products" : products});
    } catch (error){
        res.status(500).json({ error: 'An error occurred while fetching Products' });
        next(error);

    }

}

exports.getAllProductsByBuyingPrice = async (req, res, next) => {
    let sortOrder = req.body.sort_order;
    if(!sortOrder){
        sortOrder = 1;
    }
    try{
        const products = await Product.find().sort({buying_price: sortOrder});
        if(!products){
            return res.status(404).json({"message" : "No products found"});
        }
        return res.status(200).json({"Products": products});

    } catch (error){
        res.status(500).json({ error: 'An error occurred while fetching Products' });
        next(error);
    }
}

exports.getAllProductsBySellingPrice = async (req, res, next) => {
    let sortOrder = req.body.sort_order;
    if(!sortOrder){
        sortOrder = 1;
    }
    try{
        const products = await Product.find().sort({selling_price: sortOrder});
        if(!products){
            return res.status(404).json({"message" : "No products found"});
        }
        return res.status(200).json({"Products": products});

    } catch (error){
        res.status(500).json({ error: 'An error occurred while fetching Products' });
        next(error);
    }
}

exports.getAllProductsByQuantity = async (req, res, next) => {
    let sortOrder = req.body.sort_order;
    if(!sortOrder){
        sortOrder = 1;
    }
    try{
        const products = await Product.find().sort({quantity: sortOrder});
        if(!products){
            return res.status(404).json({"message" : "No products found"});
        }
        return res.status(200).json({"Products": products});

    } catch (error){
        res.status(500).json({ error: 'An error occurred while fetching Products' });
        next(error);
    }
}


exports.getProductByID = async (req, res, next) => {
    const productID = req.params.id;
    try{
    const products = await Product.findById(productID);
    if(!products){
        return res.status(404).json({"message" : "did not find product"})
    }
    res.status(200).json(products);
    } catch (error){
        res.status(500).json({ error: 'An error occurred while fetching Products' });
        next(error);

    }

}



exports.deleteAllProducts = async (req, res, next) => {
    try {
        const product = await Product.deleteMany();

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product); //Return deleted product, 200: Return OK response
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
        next(error);
    }
}

exports.deleteProductByID = async (req, res, next) => {
    try {
        const productID = req.params.id;
        const product = await Product.findByIdAndDelete(productID);

        if (!product) {
            return res.status(404).json({ message: 'No Products not found' });
        }

        res.status(200).json({message : 'Product deleted successfully'}); //Return deleted product, 200: Return OK response
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
        next(error);

    }
}


exports.updateProductByIB = async (req, res, next) => {
    try {
        const id = req.params.id;
        const {name, quantity, buying_price, selling_price, category, in_stock} = req.body;

        // this to ensure that put does not act like patch.

        if (!req.body.name) {
            return res.status(400).json({ message: 'Bad Request: Name cannot be empty' });
        } else if (!req.body.quantity) {
            return res.status(400).json({ message: 'Bad Request: quantity cannnot be empty' });
        }else if(!req.body.buying_price){
            return res.status(400).json({ message: 'Bad Request: buying_price cannot be empty' });
        }else if(!req.body.selling_price){
            return res.status(400).json({ message: 'Bad Request: selling_price cannot be empty' });
        } else if(!req.body.category){
            return res.status(400).json({ message: 'Bad Request: category cannot be empty' });
        }else if(req.body.in_stock === null){
            return res.status(400).json({ message: 'Bad Request: in_stock cannot be empty' });
        }

        const updatedProduct = {name, quantity, buying_price, selling_price, category, in_stock};

        // true: to always return updated product
        const product = await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'Product was not found' });
        }

        res.status(200).json(product); // Return updated product

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
        next(error);
    }
}



exports.partialUpdateProduct = async (req, res, next) => {
    try{
        const productID = req.params.id;
        const products = await Product.findById(productID);
        if(!products){ // if the product with the inputted ID does not exist, then throw a 404 not found error
            return res.status(404).json({"message" : "did not find product"})
        }
        // Creating a reference to an updated product
        const updated_product ={
            name: req.body.name || products.name,
            quantity: req.body.quantity || products.quantity,
            buying_price: req.body.buying_price || products.buying_price,
            selling_price : req.body.selling_price || products.selling_price,
            category : req.body.category || products.category,
            in_stock : req.body.in_stock || products.in_stock,
            business_owner : req.body.businessOwner || products.businessOwner
        };
        
        const new_products = await Product.findByIdAndUpdate(productID, updated_product, {new: true}); // assigning the old product reference to the new updated product
        res.json(new_products);
    }catch(error){
        res.status(500).json({ error: 'An error occurred while fetching Products' });
        next(error);

    }
}

    