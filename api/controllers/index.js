const express = require('express');
const router  = express.Router();

const usersController = require('./users.js');

router.use('/users', usersController);

module.exports = router;