var expect = require("chai").expect;
const mongoose = require("mongoose");
const dbTestSetup = require("..//deTestSetup");
let chai = require('chai');
var http = require('http');
var chaiHttp = require('chai-http');
let should = chai.should();
var app = require('../app');
var server;
var TEST_PORT = 3456;
var userFacade = require('../facades/userFacade')
var blogFacade = require('../facades/blogFacade')
chai.use(chaiHttp);

// https://github.com/chaijs/chai-http#caveat

// https://github.com/Automattic/mongoose/issues/1251
mongoose.models = {};
mongoose.modelSchemas = {};
mongoose.connection = {};

var User = require('../models/User.js');

/* 
Vi skal nok have det her med!

.set('Content-Type', 'application/json')
.set('Accept', 'application/json')
*/

describe("Testing endpoints.", function () {

  /* Connect to the TEST-DATABASE and start test server. */
  before(async function () {
    this.timeout(require("../settings").MOCHA_TEST_TIMEOUT);
    await dbTestSetup(require("../settings").TEST_DB_URI);

    server = http.createServer(app);
    server.listen(TEST_PORT, function () {});
  });

  after(function () {
    server.close();
  });

  /* Setup the database in a known state (2 users) before EACH test */
  beforeEach(async function () {
    await User.deleteMany({}).exec();

    users = await Promise.all([
      new User({
        firstName: "Kurt",
        lastName: "Wonnegut",
        userName: "kw",
        password: "test",
        email: "t@b.dk"
      }).save(),
      new User({
        firstName: "Hanne",
        lastName: "Wonnegut",
        userName: "hw",
        password: "test",
        email: "u@b.dk"
      }).save(),
    ]);
  });

  describe.only("GET: /api/allusers", () => {

    it("should get all users", (done) => {
      chai.request(server)
        .get('/api/allusers')
        .end((err, res) => {

          // Tester på responset, der indeholder det som returneres fra routehandlerne.
          res.should.have.status(200)
          res.body.should.be.a('array');
          expect(res.body[0].userName).to.be.equal("kw");
          expect(res.body).to.have.lengthOf(2);

          done();
        });
    });
  });

/*   describe.only("DELETE: /api/user", () => {

    it("should get all users", async (done) => {
      // Get a user id. 
      let allUsers = await userFacade.getAllUsers();
      console.log(allUsers);
      let userId = allUsers[1]._id;
      console.log('USERID!!! ' + userId);
      //done();

      chai.request(server)
        .delete('/api/user/' + userId)
        .end((err, res) => {

          res.should.have.status(200) &&
            expect(res.body[0].userName).to.be.equal("kw") &&
            expect(res.body).to.have.lengthOf(3);

          res.body.length.should.be.eql(5);
          expect(users.length).to.be.equal(2);
          done();
        })

    })
    let users = await userFacade.getAllUsers();
     console.log(users); 
  }) */

  describe.only("POST: /api/user", () => {

    it('it should not POST a user without userName field', async (done) => {
      let user = {
        firstName: "",
        lastName: "Testisen",
        userName: 'tete',
        password: "test",
        email: "test@test.tt",
        type: null,
        company: null,
        companyUrl: null
      };

      chai.request(server)
        .delete('/api/user/' + user)
        .end((err, res) => {

          res.should.have.status(404) 
          res.body.should.be.a('object');

          done();
        })

    })
    /* let users = await userFacade.getAllUsers();
     console.log(users); */ 
  })


  /* describe("POST: /api/user", () => {

    it('it should not POST a user without userName field', async (done) => {
      let user = {
        firstName: "Testy",
        lastName: "Testisen",
        userName: 'tete',
        password: "test",
        email: "test@test.tt",
        type: null,
        company: null,
        companyUrl: null
      }

      chai.request(server)
        .post('/api/user')
        .send(user)
        .end((err, res) => async function () {
          res.should.have.status(200);
          res.body.should.be.a('object');

          // let allUsers = await userFacade.getAllUsers();
          // expect(allUsers.length).to.be.equal(5); // !!! HVORFOR PASSER DENNE HER???
          done();
        });

    });

  }); */

  /* describe.skip("PUT: /api/user", function () {

    it('should give a user a new job and then test if user really got a new job', async (done) => {
      let user = await userFacade.findByUsername('hw')


      chai.request(server)
        .put('/api/user/' + user._id)
        .send({
          "type": "piccolo",
          "company": "notmycompany",
          "companyUrl": "www.notmycompany.org"
        })
        .end((err, res) => {

          res.should.have.status(200);

          expect(res.body.job[0].type).to.be.equal('piccolo')


        })
      done();
    });
  }) */




  /* describe("POST: /api/login", function () {
    it('should test if login returns a 200 response and test positions within 500 meters', (done) => {
      let login = {
        userName: "Sweetie",
        password: "sweetie",
        longitude: 55.770112949163725,
        latitude: 12.513250708580017,
        distance: 500

      }
      chai.request(server)
        .post('/api/login')
        .send(login)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');



        });

      done();
    });

  }); */

  /* describe.skip("PUT: /api/blog/:id", function () {


    it('should add a likedBy to blog ', async () => {


      let blog = await blogFacade.findLocationBlogInfo("Cool blog")
      let user = await userFacade.findByUsername('hw')
      chai.request(server)
        .put('/api/like_blog/' + blog._id)
        .send({
          "likedBy": user._id
        })
        .end((err, res) => {

          res.should.have.status(200);
          expect(res.body.likedBy.length).to.be.equal(1)


        });

    });
  });  */

});