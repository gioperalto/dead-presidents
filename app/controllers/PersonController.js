// app/controllers/PersonController.js

// Import modules
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var creds = require('../../config/token.js');
var personality_insights = new PersonalityInsightsV3({
  username: creds.username,
  password: creds.password,
  version_date: '2016-10-20'
});

// Import models
var Person = require('../models/Person');

module.exports = {


  getPersonalityInsightsFromWatson: function(callback) {
    var params = {
      content_items: require('./profile.json').contentItems,
      headers: {
        'accept-language': 'en',
        'accept': 'application/json'
      }
    };

    personality_insights.profile(params, function(error, response) {
      if (error)
        console.log('Error:', error);
      else
        callback(response);
      }
    );
  }
};