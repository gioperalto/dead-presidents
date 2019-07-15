// config/database.js
let creds = require('token.js');

module.exports = {
  url: 'mongodb://' + creds.mongo.host + ':' + creds.mongo.port + '/' + creds.mongo.db
};
