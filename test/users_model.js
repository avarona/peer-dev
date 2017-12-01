'use strict';

const expect = require('chai').expect;
const User = require('../db/models/user');
const db = require('../db/_db');

describe('User Model', function() {

  before(function() {
    return db.sync({force: true});
  });

  let user;
  beforeEach(function() {
    user = User.build({
      name: 'Darth Vader',
      start_time: '6:00pm',
      end_time: '9:00pm',
      skype_id: 'imyourdad',
      timezone: 'EST'
    });
  });

  afterEach(function() {
    return Promise.all([
      User.truncate({cascade: true})
    ]);
  });

  describe('Attributes definition', function() {

    it('includes names, times, & skype_id', function() {
      return user.save()
      .then(function(user) {
        expect(user.name).to.equal('Darth Vader');
        expect(user.start_time).to.equal('6:00pm');
        expect(user.end_time).to.equal('9:00pm');
        expect(user.skype_id).to.equal('imyourdad');
        expect(user.timezone).to.equal('EST');
      })
    });

    it('requires `name`', function() {
      user.name = null;
      return user.validate()
      .then(function() {
        throw new Error('validation should fail when content is null');
      },
      function(result) {
          expect(result).to.be.an.instanceOf(Error);
      });
    });

    it('`name` cannot be blank', function() {
      user.name = '';
      return user.validate()
      .then(function() {
        throw new Error('validation should fail when content is blank')
      },
      function(result) {
        expect(result).to.be.an.instanceOf(Error);
      });
    });

  })

})
