//Setting up main routes file as a module for other Routes
module.exports = (express) => {
  /***
  ** Creating a constant that will allow all routes for the API to go through
  ** the Router() method
  ***/
  const api = express.Router();

  //URL Route
  api.post('/url', (req, res) => {
    console.log('route hit', req.body.url);
    res.json({healthy: true});
  })

  //Returns the API
  return api;
}
