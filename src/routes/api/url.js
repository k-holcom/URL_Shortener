//Setting up the Module for URL Routes
const url = require('../../models/url.js');
module.exports = (express) => {
  //creates the api
  const api = express.Router();

  //Adds the URL to the Database
  api.post('/url', (req, res) => {
    //This is the variable that will hold the random information that will follow phnx.wd
    var short = '';

    // This string will hold the information that will be used to create the random information after phnx.wd
    var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    //Sets up the end of the shortened URL
    for(var i = 0; i < 6; i++){
      //chooses a random number between 1 and 62. This is to account for 0-9, A-Z, and a-z.
      var rand = Math.floor(Math.random() * (62 - 0) + 0);

      //Find the character that is at the index of the randomly selected number.
      var char = str.substring(rand, rand + 1);

      //Adds the character to the variable short
      short = short + char;
    }

    var info = {url: req.body.url, short: short}

    url.add(info, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  //Finds all the URLS stored
  api.get('/urls', (req, res) => {
    url.find((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  //Find just one URL that has been stored
  api.get('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.one(req.body, (err)=> {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  //Update a URL
  api.post('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    //This is the variable that will hold the random information that will follow phnx.wd
    var short = '';

    // This string will hold the information that will be used to create the random information after phnx.wd
    var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    //Sets up the end of the shortened URL
    for(var i = 0; i < 6; i++){
      //chooses a random number between 1 and 62. This is to account for 0-9, A-Z, and a-z.
      var rand = Math.floor(Math.random() * (62 - 0) + 0);

      //Find the character that is at the index of the randomly selected number.
      var char = str.substring(rand, rand + 1);

      //Adds the character to the variable short
      short = short + char;
    }

    req.body.url = req.body.url;
    req.body.short = short;

    url.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  //Deletes the URL Row
  api.delete('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.remove(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  //Returns the information
  return api;
}
