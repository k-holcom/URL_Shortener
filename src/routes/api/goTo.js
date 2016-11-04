const go = require('../../models/go.js');

module.exports = (express) => {
  var api = express.Router();

  api.get('/go/:short', (req, res) => {
    req.body.short = req.params.short;
    go.findOne(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.redirect('http://' + data.url);
    })
  });

  return api;
}
