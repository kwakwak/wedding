'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * invite Schema
 */
var inviteSchema = new Schema({
  name: {type: String, required: true},
  number: Number,
  phone: String,
  date: { type: Date, default: Date.now }
});


mongoose.model('invite', inviteSchema);
