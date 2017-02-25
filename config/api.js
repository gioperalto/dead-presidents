// config/api.js

// Import controllers
var PersonController = require('../app/controllers/PersonController');

module.exports = function(app) {
  app.get('/api/ibm', function(req, res) {
    PersonController.getPersonalityInsightsFromWatson(function(response) {
      res.json(response);
    });
  });
};