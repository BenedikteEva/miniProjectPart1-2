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
// https://mherman.org/blog/testing-node-and-express/

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

    // !!! SE PÅ DET HER!!!
    //This has to be used instead of suggested Promise.all() function because it would not always be executed in order.
    // THIS METHOD DOES NOT TRIGGER .save() hooks in Schema
    users = User.insertMany([
      new User({
        firstName: "Kurt",
        lastName: "Wonnegut",
        userName: "kw",
        password: "test",
        email: "t@b.dk"
      }),
      new User({
        firstName: "Hanne",
        lastName: "Wonnegut",
        userName: "hw",
        password: "test",
        email: "u@b.dk"
      }),
    ], { ordered: true });
  });

  // Test of endpoint users - get all users.
  describe.only("GET: /api/users", () => {

    it("should get all users", (done) => {
      chai.request(server)
        .get('/api/users')
        .end((err, res) => {

          // Tester på responset, der indeholder det som returneres fra routehandlerne.
          should.not.exist(err);
          res.should.have.status(200)
          res.type.should.equal('application/json');
          expect(res.body.status).to.be.equal('Success');

          expect(res.body.data[0].userName).to.be.equal("kw");
          expect(res.body.data).to.have.lengthOf(2);
          res.body.data[0].should.include.keys(
            "created", "_id", "firstName", "lastName", "userName", "password", "email", "job"
          );
          done();
        });
    });
  });

  // Test of endpoint user - get user by name.
  describe.only("GET: /api/user", () => {

    it("should get Kurt Wonnegut by username kw.", (done) => {

      let findUser = 'kw'

      chai.request(server)
        .get('/api/user/' + findUser)
        .end((err, res) => {

          should.not.exist(err);
          res.should.have.status(200)
          res.type.should.equal('application/json');
          expect(res.body.status).to.be.equal('Success');

          // Returns an object.
          expect(res.body.data.firstName).to.be.equal("Kurt");
          res.body.data.should.include.keys(
            "created", "_id", "firstName", "lastName", "userName", "password", "email", "job"
          );
          done();
        });
    });
  });

  // Test of endpoint user - get user by name.
  describe.only("GET: /api/user", () => {

    it("should get an 'User does not exist' when getting username a.", (done) => {

      let findUser = 'a';

      chai.request(server)
        .get('/api/user/' + findUser)
        .end((err, res) => {

          should.not.exist(err);
          // In an API, this can also mean that the endpoint is valid but the resource itself does not exist. 
          res.should.have.status(404)
          res.type.should.equal('application/json');
          expect(res.body.status).to.be.equal('User does not exist');

          // Returns an object.
          res.body.should.include.keys(
            "status", "data"
          );
          done();
        });
    });
  });

  // Test add new user.
  describe.only("POST: /api/user", () => {

    it("should add a new user.", (done) => {

      chai.request(server)
        .post('/api/user/')
        .send({
          firstName: 'Jim',
          lastName: 'Hansen',
          userName: 'jh',
          password: 'test',
          email: 'jh@jim.dk',
          job: 'Udspringer',
        })
        .end((err, res) => {

          should.not.exist(err);
          // 201 = created. 
          res.should.have.status(201)
          res.type.should.equal('application/json');
          expect(res.body.status).to.be.equal('Success');

          // Returns an object.
          expect(res.body.data.firstName).to.be.equal("Jim");
          res.body.data.should.include.keys(
            "created", "_id", "firstName", "lastName", "userName", "password", "email", "job"
          );
          done();
        });
    });
  });

  // Test of find user by id endpoint. FEJLER! passer altid.
  describe.only("GET: /api/user", () => {

    it("should get Kurt Wonnegut by id.", async function () {
      try {
        let user = await userFacade.findByUsername('kw');
        var id = user._id
        console.log('ID!!!!!' + id);
  
        chai.request(server)
          .get('/api/user_id/' + id)
          .end((err, res) => {
  
            should.not.exist(err);
            res.should.have.status(200)
            res.type.should.equal('application/json');
            expect(res.body.status).to.be.equal('Success');
            //console.log(res.body.data.firstName);
            // Returns an object.
            expect(res.body.data.firstName).to.equal("Kur"); // Bliver ikke valideret
            console.log(res.body.data.firstName);
            res.body.data.should.include.keys(
              "created", "_id", "firstName", "lastName", "userName", "password", "email", "job"
            );
            done();
          });
      } catch (err) {
        done(err);
      };
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

  // Den sidste vi brugte.
  /* describe.only("POST: /api/user", () => {

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

    }) */
  /* let users = await userFacade.getAllUsers();
   console.log(users); */
  //})


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