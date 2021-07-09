//import our packages and save them to a variable
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');

// create a webserver using express and save the result inside app variables
const app = express();
//use body parser
app.use(bodyParser);
//initialize mongoose database
mongoose.connect('mongodb://localhost/react-shopping-cart-db')
