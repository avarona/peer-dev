'use strict'

const Sequelize = require('sequelize');
const db = require('../_db.js');

const User = db.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  start_time: {
    type: Sequelize.STRING
  },
  end_time: {
    type:Sequelize.STRING
  },
  skype_id: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  timezone: {
    type: Sequelize.STRING
  }
});

// Methods Sequelize v4
User.prototype.example = function () {
  return 'Example instance method';
}

module.exports = User;
