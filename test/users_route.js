'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

const app = require('../app');
const db = require('../db/_db');
const User = require('../db/models/user');

chai.use(chaiHttp);

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

    it('responds with an array through JSON', function(done) {
      chai.request(app)
        .get('/users')
        .then(function(res) {
          expect(res).to.be.json;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an.instanceOf(Array);
          expect(res.body).to.have.length(0);
          done();
        })
        .catch(err => {
          if(err) return done(err);
          done();
        });
    });

    it('returns a user if there is only 1', function(done) {
      let user = User.build({
        name: 'Alex',
        start_time: '6pm',
        end_time: '9pm',
        skype_id: 'example',
        timezone: 'EST'
      })

      user.save().then(()=> {
        chai.request(app)
          .get('/users')
          .then(function(res) {
            expect(res).to.have.status(200);
            expect(res.body).to.be.instanceOf(Array);
            expect(res.body[0].name).to.equal(user.name);
            expect(res.body[0].skype_id).to.equal(user.skype_id);
            done();
          })
          .catch(err => {
            if(err) return done(err);
            done();
          })
      });
    });

    it('returns multiple users', function(done) {
      let user1 = User.build({
        name: 'Alex',
        skype_id: 'example'
      });
      let user2 = User.build({
        name: 'Xela',
        skype_id: 'elpmaxe'
      });

      user1.save().then(() => {
        return user2.save()
      })
      .then(() => {
        chai.request(app)
          .get('/users')
          .then(function(res) {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an.instanceOf(Array);
            expect(res.body).to.have.length(2);
            expect(res.body[0].name).to.equal('Alex');
            expect(res.body[1].name).to.equal('Xela');
            done();
          })
          .catch(err => {
            if(err) return done(err);
            done();
          });
      });
    });
  });
});
