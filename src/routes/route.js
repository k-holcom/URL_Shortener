//Setting up main routes file as a module for other Routes
module.exports = (express) => {
  //Creating a constant that will allow all routes for the API to go through the Router() method
  const api = express.Router();

  //URL Route
  api.get('/status', (req, res) => {
    res.json({
      healthy: true
    })
  });

  api.use('/api/v1/', require('./api/url')(express));

  //Returns the API
  return api;
}
