'use strict';

const db = require('./_db');
const users = require('./models/user.js');

const seedUsers = () => db.Promise.map([
  {id: '1', name: 'Homer Simpson', start_time: '6:00pm', end_time: '9:00pm', skype_id: 'homer123', timezone: 'EST'},
  {id: '2', name: 'Marge Simpson', start_time: '6:00pm', end_time: '9:00pm', skype_id: 'marge123', timezone: 'EST'},
  {id: '3', name: 'Bart Simpson', start_time: '6:00pm', end_time: '9:00pm', skype_id: 'bart123', timezone: 'EST'},
  {id: '4', name: 'Lisa Simpson', start_time: '6:00pm', end_time: '9:00pm', skype_id: 'lisa123', timezone: 'EST'},
  {id: '5', name: 'Maggie Simpson', start_time: '6:00pm', end_time: '9:00pm', skype_id: 'maggie123', timezone: 'EST'},
], user => db.model('users').create(user));

 db.sync({force: true})
  .then(seedUsers)
  .catch(err => console.error(err))
  .finally(() => db.close())
