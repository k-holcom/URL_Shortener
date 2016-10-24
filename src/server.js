// Setting up Server for the API

// Set up variables and constants for the API Server
const express = require('express');
const body_parser = require('body-parser');

//Activate Express
const app = express();

//Activate Body-Parser

// Port set to 3000 as specified by assignment instructions
const port = 3000;

//Configure Routes
app.use('/api/v1', require('./routes/routes.js')(express));

// Setting up the actual Server
app.listen(port, function(){
  console.log('Server Active on Port', port);
});
