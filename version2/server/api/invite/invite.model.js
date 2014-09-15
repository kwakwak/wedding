'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InviteSchema = new Schema({
    name: {type: String, required: true},
    number: Number,
    phone: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Invite', InviteSchema);