'use strict';

const express = require('express');
const router = new express.Router();

// routes
router.use('/users', require('./routes/users'));

router.use(function (req, res) {
  res.status(404).end();
});

module.exports = router;
