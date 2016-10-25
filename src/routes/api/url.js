//Setting up the Module for URL Routes
module.exports = (express) => {
  //creates the api
  const api = express.Router();

  api.post('/', (req, res) => {
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

    //creates the shortened url
    var shortened = 'phnx.wd/' + short;

    res.json({shortened: shortened});
  })

  return api;
}
