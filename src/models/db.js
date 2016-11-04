//Instatiate Sequelize
const Sequelize = require('sequelize');

//Connecting to the Database
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
	host: process.env.DB_HOST,
	dialect: process.env.DB_SCHEMA,
	port: process.env.DB_PORT,
	pool: {
		max: 5,
		min: 0,
		idle: 10000,
	},
	logging: false,
});

//Define Tables
const url = sequelize.define('url', {
  url: {
    type: Sequelize.STRING,
  },
  shortURL: {
    type: Sequelize.STRING,
  }
});

//Syncs to the Database
sequelize.sync();

//Allows other files to access the Database
exports.sequelize = sequelize;
exports.url = url;
