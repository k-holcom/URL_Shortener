//intialize sequelize
const Sequelize = require('sequelize');

//connect to the database from the .env file
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
host: process.env.DB_HOST,
dialect: process.env.DB_PORT,
pool: {
  max: 5,
  min: 0,
  idle: 10000,
},
logging: false,
});

//Create the table that holds the original url and the shortened url
const url = sequelize.define('url', {
  //create the columns for the URL table
  original: {
    type: Sequelize.STRING,
  },
  shortened: {
    type: Sequelize.STRING,
  }
});

//Syncs table to the database and creates the tables
sequelize.sync();

//Accesses the DB and tables
exports.sequelize = sequelize;
exports.url = url;
