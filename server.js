//Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const axios = require('axios');
const cheerio = require('cheerio');
const bodyParser = require('body-parser');
const logger = require('morgan');

// Start app
const app = express();

// App Port
const PORT = process.env.PORT || 3000;

// Database using Mongoose
const mongodb = process.env.mongodb_uri || 'mongodb://localhost:3000/Mongo-News';
mongoose.connect(mongodb, { useNewUrlParser: true });

// Middleware
app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
// Handlebars Setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
require('./controllers/scrape')(app);
require('./controllers/topics')(app);


// Start the the server
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
    console.log(`Connect to the server here http://localhost:${PORT}`);
});