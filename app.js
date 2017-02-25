// app.js

// ---------------------------------------------------------
// Setup
// ---------------------------------------------------------

// Declare variables
var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var configDB     = require('./config/database');
var port         = process.env.PORT || 1337;

// ---------------------------------------------------------
// Database configurations
// ---------------------------------------------------------
mongoose.connect(configDB.url);

// ---------------------------------------------------------
// API Endpoints
// ---------------------------------------------------------
require('./config/api')(app);

// ---------------------------------------------------------
// Launch
// ---------------------------------------------------------

// Server launch (TODO: Implement try-catch)
app.listen(port);
console.log('Launched server at: http://localhost:' + port);