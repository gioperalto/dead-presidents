// app/models/Person.js

// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  personality: [{
    name: String,
    percentile: Number,
    children: [{
      name: String,
      percentile: Number
    }]
  }],
  needs: [{
    name: String,
    percentile: Number
  }],
  values: [{
    name: String,
    percentile: Number
  }],
  created_at: Date,
  modified_at: Date
});

// on every save, add the date
personSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  
  // change the modified_at field to current date
  this.modified_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

var Person = mongoose.model('Person', personSchema);

// make this available to our users in our Node applications
module.exports = Person;