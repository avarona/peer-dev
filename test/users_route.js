'use strict';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../app');

const db = require('../db/_db');
const User = require('../db/models/user');

describe('Users Route', function() {

  before(function() {
    return db.sync({force: true});
  });

  afterEach(function() {
    return Promise.all([
      User.truncate({cascade: true})
    ]);
  })

  describe('GET /users', function() {

    it('retrieves all users', function(done) {

      return request(app)
        .get('/users')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(function(res) {
          expect(res.body).to.be.an.instanceOf(Array);
          expect(res.body).to.have.length(0);
        })
        .end(function(err, res) {
          if(err) return done(err);
          done();
        });
    })

  })

})
