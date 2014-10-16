'use strict';

var express = require('express');
var controller = require('./invite.controller');

var router = express.Router();

router.get('/', controller.index);
//router.get('/mail', mail.send);
//router.get('/:id', controller.show);
router.post('/', controller.create);
//router.put('/:id', controller.update);
//router.patch('/:id', controller.update);
router.delete('/:id/:password', controller.destroy);

module.exports = router;