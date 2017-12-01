const express = require('express');
const router = express.Router();

const User = require('../../db/models/user');

router.get('/', function(req, res, next) {
  User.findAll()
  .then(all => {
    res.json(all);
  })
  .catch(err => console.error(err));
});

module.exports = router;
