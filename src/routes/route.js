// Setting up main routes file as a module for other Routes
module.exports = (express) => {
  // Creating a constant that will allow all routes for the API to go through the Router() method
  const api = express.Router();
  // Function to suppress console.log messages and print to a file
  const suppress = (msg) => {
    const debugVar = process.env.DEBUG;
    const date = new Date().toISOString();
    const message = date + ' => ' + msg + '\r\n';
    if (debugVar === 'true') {
      console.log(message);
    } else if (debugVar === 'false') {
      const fs = require('fs');
      fs.appendFile('./logs/debugLog.log', message, (err) => {
        if (err) throw err;
      });
    }
  };
  // URL Route
  api.get('/status', (req, res) => {
    suppress('The /status route has been hit');
    res.json({
      healthy: true,
    });
  });

  api.use('/api/v1/', require('./api/url')(express));

  api.use('/', require('./api/goTo')(express));

  // Returns the API
  return api;
};
