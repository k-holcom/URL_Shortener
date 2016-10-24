// Setting up Server for the API

//Set up variables and constants for the API Server
const express = require('express');
const body_parser = require('body-parser');

const app = express();
const port = 3000;

//Setting up the actual Server

app.listen(port, function(){
  console.log('Server Active on Port', port);
});
