const url = require('../../models/url.js');

//sets up the module
module.exports = (express) => {
  //create the API
  const API = express.Router();

  //Routes for database usuage

  //Create a database entry
  API.post('/url', (req, res) => {
    user.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  //Read ALL URLs
  API.get('/url', (req, res) => {
    user.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  //Read ONE URL
  API.get('/url/:id', (req, res) => {
    req.body.id = req.params.id;
    user.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  //Update one URL
  API.post('/url/:id', (req, res) => {
    req.body.id = req.params.id;
    user.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  //Delete URL
  API.delete('url/:id', (req, res) => {
    req.body.id = req.params.id;
    user.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  //Returns the Route
  return API
}
