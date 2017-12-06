'use strict';

const chai = require('chai');
const expect = chai.expect;
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

    it('includes names, times, & skype_id', function(done) {
      user.save().then(function() {
        expect(user.name).to.equal('Darth Vader');
        expect(user.start_time).to.equal('6:00pm');
        expect(user.end_time).to.equal('9:00pm');
        expect(user.skype_id).to.equal('imyourdad');
        expect(user.timezone).to.equal('EST');
        done();
      })
      .catch(err => {
        if(err) return done(err);
        done();
      });
    });

    it('`name` cannot be null', function(done) {
      user.name = null;
      user.validate()
      .then(function() {
        throw new Error('name shouldn\'t be null!')
      }, function(result) {
        expect(user.dataValues.name).to.equal(null);
        expect(result).to.be.an.instanceOf(Error);
        done();
      })
      .catch(err => {
        if(err) return done(err);
        done();
      });
    });

    it('`skype_id` cannot be blank', function(done) {
      user.skype_id = '';
      user.validate()
      .then(function() {
        throw new Error('skype_id shouldn\'t be blank!')
      }, function(result) {
        expect(user.dataValues.skype_id).to.equal('');
        expect(result).to.be.an.instanceOf(Error);
        done();
      })
      .catch(err => {
        if(err) return done(err);
        done();
      });
    });
    
  });
});
