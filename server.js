//import our packages and save them to a variable
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');

// create a webserver using express and save the result inside app variables
const app = express();
//use body parser
app.use(bodyParser);
//initialize mongoose database which has 2 param, the 1st is the localhost/name of your db and second param is for data connecting to  d database.
mongoose.connect('mongodb://localhost/react-shopping-cart-db' , {
    useNewUrlParser: true,
    useCreateIndex : true,
    useunifiedTopology : true
});

app.get("/api/products" , (req, res) => {
    
})
//crea a pruoduct model schema
const Product = mongoose.model.apply("products" , new mongoose.schema(
    {_id: { type: shortid.generate },
    title: String,
    desctiption: String,
    image: String,
    availableSizes: [String],
    price: number,}
))