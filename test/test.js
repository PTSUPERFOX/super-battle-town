const app = require('../server/app');
/* require user models */
const User = require('../server/models/users');
/* liblary */
let chai = require('chai');
let chaiHttp = require('chai-http');

/* use chai http and should */
chai.use(chaiHttp);
let should = chai.should();

describe('before testing user, delete all data user from database', () => {
  it(('remove all user data'), (done) => {
    User.remove({}, (err) => {
        done();
     });
   });
})

/* testing */
describe('Testing User', () => {

    // beforeEach((done) => {
    //     User.remove({}, (err) => {
    //        done();
    //     });
    // });

      it('Testing Register New User', (done) => {
        chai.request('http://localhost:3000')
            .post('/api/users/')
            .send({
              name: 'mil',
              password: 'mil',
              avatar: 'mil.jpg'
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.user.name.should.equal('mil')
              done();
            });
      });

      /* login */
      it('Tesing user login', (done) => {
        chai.request('http://localhost:3000')
            .post('/api/users/login')
            .send({
              name: 'mil',
              password: 'mil'
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.name.should.to.exist
              done();
            });
      });

});
