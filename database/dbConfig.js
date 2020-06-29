const knex = require('knex');

const knexConfig = require('../knexfile.js');
const environment = process.env.NODE_ENV || "development";  // added this


module.exports = knex(knexConfig.development);
