// Setting up Server for the API

// Set up variables and constants for the API Server
const express = require('express');
const body_parser = require('body-parser');

//Activate Express
const app = express();

//Activate Body-Parser

// Port set to 3000 as specified by assignment instructions
const port = process.env.PORT || 3000;

//Instantiating Body Parser
app.use(body_parser.json());
app.use(body_parser.urlencoded({
  extended: true,
}));

//Configure Routes
app.use('/', require('./routes/route.js')(express));

// Setting up the actual Server
const server = app.listen(port, () => {
  console.log('Server Active on Port', port);
});

module.exports = server;
