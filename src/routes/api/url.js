//Function to suppress console.log messages and print to a file
suppress = (msg) => {
  var debugVar = process.env.DEBUG;
  var date = new Date().toISOString();
  var message = date + ' => ' + msg + '\r\n';
  if(debugVar == 'true'){
    console.log(message);
  }else if(debugVar == 'false'){
    var fs = require('fs');
    fs.appendFile('./logs/debugLog.log', message, (err) => {
      if(err) throw err;
    });
  }
}

//Setting up the Module for URL Routes
const url = require('../../models/url.js');
module.exports = (express) => {
  //creates the api
  const api = express.Router();
  //Sends a message stating when each call is started successfully
  //Adds the URL to the Database
  api.post('/url', (req, res) => {
    suppress('Started Successfully!')
    //This is the variable that will hold the random information that will follow phnx.wd
    var short = '';

    // This string will hold the information that will be used to create the random information after phnx.wd
    var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    //Sets up the end of the shortened URL
    for(var i = 0; i < 6; i++){
      //chooses a random number between 1 and 62. This is to account for 0-9, A-Z, and a-z.
      var rand = Math.floor(Math.random() * (str.length - 0) + 0);

      //Find the character that is at the index of the randomly selected number.
      var char = str.substring(rand, rand + 1);

      //Adds the character to the variable short
      short = short + char;
    }
    suppress('Shortened URL for ' + req.body.url + ' will be: phnx.wd/' + short);
    var info = {url: req.body.url, shortURL: short}

    url.add(info, (err) => {
      suppress('There was an Error: ' + err);
      res.status(500).json(err);
    }, (data) => {
      suppress('Shortened URL Added');
      res.status(200).json(data);
    })
  });

  //Finds all the URLS stored
  api.get('/urls', (req, res) => {
    suppress('Started Successfully!')
    url.find((err) => {
      suppress('There was an Error: ' + err);
      res.status(500).json(err);
    }, (data) => {
      suppress('All URLs Found');
      res.status(200).json(data);
    })
  });

  //Find just one URL that has been stored
  api.get('/urls/:id', (req, res) => {
    suppress('Started Successfully!')
    req.body.id = req.params.id;
    url.one(req.body, (err)=> {
      suppress('There was an Error: ' + err);
      res.status(500).json(err);
    }, (data) => {
      suppress('URL at Id->' + req.body.id + ' was found.');
      res.status(200).json(data);
    })
  });

  //Update a URL
  api.post('/urls/:id', (req, res) => {
    suppress('Started Successfully!')
    req.body.id = req.params.id;
    //This is the variable that will hold the random information that will follow phnx.wd
    var short = '';

    // This string will hold the information that will be used to create the random information after phnx.wd
    var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    //Sets up the end of the shortened URL
    for(var i = 0; i < 6; i++){
      //chooses a random number between 1 and 62. This is to account for 0-9, A-Z, and a-z.
      var rand = Math.floor(Math.random() * (str.length - 0) + 0);

      //Find the character that is at the index of the randomly selected number.
      var char = str.substring(rand, rand + 1);

      //Adds the character to the variable short
      short = short + char;
    }

    req.body.url = req.body.url;
    req.body.short = short;

    url.update(req.body, (err) => {
      suppress('There was an Error: ' + err);
      res.status(500).json(err);
    }, (data) => {
      suppress('URL Updated');
      res.status(200).json(data);
    })
  });

  //Deletes the URL Row
  api.delete('/urls/:id', (req, res) => {
    suppress('Started Successfully!')
    req.body.id = req.params.id;
    url.remove(req.body, (err) => {
      suppress('There was an Error: ' + err);
      res.status(500).json(err);
    }, (data) => {
      suppress('URL Deleted');
      res.status(200).json(data);
    })
  });

  //Returns the information
  return api;
}
