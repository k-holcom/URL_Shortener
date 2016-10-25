//Setting up main routes file as a module for other Routes
module.exports = (express) => {
  /***
  ** Creating a constant that will allow all routes for the API to go through
  ** the Router() method
  ***/
  const API = express.Router();

  //URL Route
  API.post('/url', (req, res) => {
    //This is the variable that will hold the random info after phnx.wd/
    var short = '';
    //This string holds the string that when a random number is chosen for each of the characters in short it points to a character in this string.
    var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    //Sets up the end of the shortened URL
    for(var i = 0; i < 6; i++){
      //chooses a random number between 1 and 62. This is to account for 0-9, A-Z, and a-z.
      var rand = Math.floor(Math.random() * (62 - 0) + 0);
      //Finds which character is at the chosen random number
      var char = str.substring(rand, rand+1);
      //Adds the character to the variable short
      short = short + char;
    }
    //creates the actual shortened url
    var shortened = 'phnx.wd/' + short;

    //Returns the original url and then the shortened one.
    res.json({
      url: 'www.risingphoenixwd.com',
      string: shortened
    });
  })

  //Returns the API
  return API
}
