// app/controllers/PersonController.js

// Import modules
var request = require('request');
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var creds = require('../../config/token.js');
var personality_insights = new PersonalityInsightsV3({
  username: creds.ibm.username,
  password: creds.ibm.password,
  version_date: '2016-10-20'
});

// Import models
var Person = require('../models/Person');

module.exports = {
  getSpeechTranscript: function(name, callback) {
    request(''+name, function(error, response, body) {
      callback(JSON.stringify(body));
    });
  },

  getPersonalityInsightsFromWatson: function(name, callback) {
    module.exports.getSpeechTranscript(name, function(transcript) {
      var params = {
        text: transcript,
        headers: {
          'accept-language': 'en',
          'accept': 'application/json'
        }
      };
    });

    personality_insights.profile(params, function(error, response) {
      if (error)
        console.log('Error:', error);
      else
        callback(response);
      }
    );
  }
};