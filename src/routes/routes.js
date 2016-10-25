//Setting up main routes file as a module for other Routes
module.exports = (express) => {
  //Creating a constant that will allow all routes for the API to go through the Router() method
  const api = express.Router();

  //URL Route
  api.use('/test', require('./api/url.js')(express));

  //Returns the API
  return api;
}
