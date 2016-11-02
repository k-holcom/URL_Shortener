//Setting up main routes file as a module for other Routes
module.exports = (express) => {
  //Creating a constant that will allow all routes for the API to go through the Router() method
  const api = express.Router();

  //URL Route
  api.get('/status', (req, res) => {
    console.log('The /status route has been hit');
    res.json({
      healthy: true
    })
  });

  api.use('/api/v1/', require('./api/url')(express));

  api.use('/', require('./api/goTo')(express));

  //Returns the API
  return api;
}
