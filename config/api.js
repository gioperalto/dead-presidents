// config/api.js

// Import controllers
var PersonController = require('../app/controllers/PersonController');

module.exports = function(app) {
  app.get('/api/watson/:name', function(req, res) {
    var name = req.params.name;
    PersonController.getPersonalityInsightsFromWatson(name, function(response) {
      res.json(response);
    });
  });
};