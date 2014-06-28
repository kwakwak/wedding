'use strict';

var mongoose = require('mongoose'),
    invite = mongoose.model('invite');

/**
 * Get invites
 */
exports.query = function(req, res) {
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
exports.create = function(req, res) {
    return invite.create(req.body,function (err) {
        if (!err) {
            return res.json({"success":true});
        } else {
            return res.send(err);
        }
    });
};

/**
 * Create remove
 */
exports.remove = function(req, res) {
    return invite.remove({ _id: req.param('id') },function (err) {
        if (!err) {
            return res.json({_id: req.param('id')});
        } else {
            return res.send(err);
        }
    });
};