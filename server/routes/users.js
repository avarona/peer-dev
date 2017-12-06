const express = require('express');
const router = express.Router();

const User = require('../../db/models/user');

router.get('/', function(req, res, next) {
  User.findAll({})
  .then(data => {
    res.json(data);
  })
  .catch(next);
});

module.exports = router;
