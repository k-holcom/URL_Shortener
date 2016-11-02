// Setting up Server for the API
// Function to suppress console.log messages and print to a file
const suppress = (msg) => {
  const debugVar = process.env.DEBUG;
  const date = new Date().toISOString();
  const message = date + ' => ' + msg + '\r\n';
  if (debugVar === 'true') {
    console.log(message);
  } else if (debugVar === 'false') {
    const fs = require('fs');
    fs.appendFile('./logs/debugLog.log', message, (err) => {
      if (err) throw err;
    });
  }
};
// Set up variables and constants for the API Server
const express = require('express');
const bodyParser = require('body-parser');

// Activate Express
const app = express();

// Activate Body-Parser

// Port set to 3000 as specified by assignment instructions
const port = process.env.PORT || 3000;

// Instantiating Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Configure Routes
app.use('/', require('./routes/route.js')(express));

// Setting up the actual Server
exports.server = app.listen(port, () => {
  suppress('Server Active on Port', port);
});
