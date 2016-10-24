//Setting up main routes file as a module for other Routes
module.exports = (express) => {
  /***
  ** Creating a constant that will allow all routes for the API to go through
  ** the Router() method
  ***/
  const API = express.Router();

  //URL Route
  API.post('/url', (req, res) => {
    var short = '';
    var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    // Getting the information from the "body"


    //Sets up the end of the shortened URL
    for(var i = 0; i < 6; i++){
      var rand = Math.floor(Math.random() * (62 - 0) + 0);
      var char = str.substring(rand, rand+1);
      short = short + char;
    }
    var shortened = 'phnx.wd/' + short;
    res.json({
      url: 'www.risingphoenixwd.com',
      string: shortened
    });
  })

  //Returns the API
  return API
}
