var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mongoose
require('./server/config/mongoose.js');

// Routes
require('./server/config/routes')(app);

app.listen(8015, function() {
console.log('listening on port 8015');    
})