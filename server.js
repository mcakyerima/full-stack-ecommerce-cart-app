//import our packages and save them to a variable
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');

// create a webserver using express and save the result inside app variables
const app = express();
//use body parser use .json because it is a json object
app.use(bodyParser.json());
//initialize mongoose database which has 2 param, the 1st is the localhost/name of your db and second param is for data connecting to  d database.
mongoose.connect('mongodb://localhost/react-shopping-cart-db' , {
    useNewUrlParser: true,
    useCreateIndex : true,
    useUnifiedTopology : true,
});

//creat a pruoduct model schema
const Product = mongoose.model("products" , new mongoose.Schema(
    {_id: { type: String, default: shortid.generate },
    title: String,
    desctiption: String,
    image: String,
    availableSizes: [String],
    price: Number,
    category: String}
));

///create a get request
app.get("/api/products" , async (req, res) => {
    const products = await Product.find({})
    res.send(products)
});

//create an end point for creating products using http post mithode
app.post("/api/products", async (req, res) => {
    //create a new product
    const newProduct = new Product(req.body)
    //save the new product to database
    const saveProduct = await newProduct.save()
    res.send(saveProduct)
});

// delete product by passing the id as parameter
app.delete("/api/products/:id", async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    res.send(deletedProduct)
});

//create a port to listen on
const port = process.env.PORT || 5000;
app.listen(port , () => console.log('listening on port' + port))



