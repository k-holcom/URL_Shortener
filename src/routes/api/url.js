/* As I am running my eslint to make sure the code is up to airbnb standards,
I am unable to switch var for let. When I do I get an error that will not allow
my API to run. */

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

// Setting up the Module for URL Routes
const url = require('../../models/url.js');

module.exports = (express) => {
  // creates the api
  const api = express.Router();
  // Sends a message stating when each call is started successfully
  // Adds the URL to the Database
  api.post('/url', (req, res) => {
    // This is the variable that will hold the random information that will follow phnx.wd
    /* eslint no-var: "error"*/
    /* eslint-env es6*/
    var short = '';
    suppress('POST /url - Started Successfully!');
    /* This string will hold the information that will be used to create the
    random information after phnx.wd*/
    const str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    // Sets up the end of the shortened URL
    /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }]*/
    for (var i = 0; i < 6; i++) {
      // chooses a random number between 1 and 62. This is to account for 0-9, A-Z, and a-z.
      const rand = Math.floor((Math.random() * (62 - 0)) + 0);

      // Find the character that is at the index of the randomly selected number.
      const char = str.substring(rand, rand + 1);

      // Adds the character to the variable short
      short += char;
    }
    suppress('Shortened URL for ' + req.body.url + ' will be: phnx.wd/' + short);

    // short is throwing an airbnb error

    const info = { url: req.body.url, shortURL: short };

    url.add(info, (err) => {
      suppress('There was an Error: ' + err);
      res.status(500).json(err);
    }, (data) => {
      suppress('Shortened URL Added');
      res.status(200).json(data);
    });
  });

  // Finds all the URLS stored
  api.get('/urls', (req, res) => {
    suppress('GET /urls - Started Successfully!');
    /* eslint array-callback-return: "error"*/
    url.find(null, (err) => {
      suppress('There was an Error: ' + err);
      res.status(500).json(err);
    }, (data) => {
      suppress('All URLs Found');
      res.status(200).json(data);
    });
  });

  // Find just one URL that has been stored
  api.get('/urls/:id', (req, res) => {
    suppress('GET /urls/:id - Started Successfully!');
    /* eslint no-param-reassign: ["error", { "props": false }] */
    req.body.id = req.params.id;
    url.one(req.body, (err) => {
      suppress('There was an Error: ' + err);
      res.status(500).json(err);
    }, (data) => {
      suppress('URL at Id->' + req.body.id + ' was found.');
      res.status(200).json(data);
    });
  });

  // Update a URL
  api.post('/urls/:id', (req, res) => {
    suppress('POST /urls/:id - Started Successfully!');
    req.body.id = req.params.id;
    // This is the variable that will hold the random information that will follow phnx.wd
    var short = '';

    /* This string will hold the information that will be used to create the
    random information after phnx.wd */
    const str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    // Sets up the end of the shortened URL
    for (var i = 0; i < 6; i++) {
      // chooses a random number between 1 and 62. This is to account for 0-9, A-Z, and a-z.
      const rand = Math.floor((Math.random() * (62 - 0)) + 0);

      // Find the character that is at the index of the randomly selected number.
      const char = str.substring(rand, rand + 1);

      // Adds the character to the variable short
      short += char;
    }

    req.body.url = req.body.url;
    req.body.short = short;

    url.update(req.body, (err) => {
      suppress('There was an Error: ' + err);
      res.status(500).json(err);
    }, (data) => {
      suppress('URL Updated');
      res.status(200).json(data);
    });
  });

  // Devares the URL Row
  api.delete('/urls/:id', (req, res) => {
    suppress('DELETE /urls/:id - Started Successfully!');
    req.body.id = req.params.id;
    url.remove(req.body, (err) => {
      suppress('There was an Error: ' + err);
      res.status(500).json(err);
    }, (data) => {
      suppress('URL Deleted');
      res.status(200).json(data);
    });
  });

  // Returns the information
  return api;
};
