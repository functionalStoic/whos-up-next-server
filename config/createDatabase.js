require('dotenv').config();
const config = require('./knexfile');
const knex = require('knex')(config[process.env.NODE_ENV]);

knex.raw('CREATE DATABASE whos_up_next').then(() => {
  console.log('Successfully created database');
  knex.destroy();
});
