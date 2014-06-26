'use strict';

var mongoose = require('mongoose'),
    invite = mongoose.model('invite');

/**
 * Get invites
 */
exports.invites = function(req, res) {
  return invite.find(function (err, invite) {
    if (!err) {
      return res.json(invite);
    } else {
      return res.send(err);
    }
  });
};

/**
 * Create invites
 */
exports.createInvite = function(req, res) {
    return invite.create(req.body,function (err) {
        if (!err) {
            return res.json({"success":true});
        } else {
            return res.send(err);
        }
    });
};