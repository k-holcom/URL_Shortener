//This is the config file for eslint
module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
  	"rules": {
  		"new-cap": 0,
  		"prefer-template": 0,
  		"global-require": 0,
  	},
  	"globals": {
  		"describe": true,
  		"it": true,
    }
};
