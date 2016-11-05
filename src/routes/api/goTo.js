const go = require('../../models/go.js');

module.exports = (express) => {
  var api = express.Router();

  api.get('/go/:shortURL', (req, res) => {
    req.body.shortURL = req.params.shortURL;
    go.findOne(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.redirect('http://' + data.url);
    })
  });

  return api;
}
