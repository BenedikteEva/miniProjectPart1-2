/* Den gamle!!! */
/* describe("Testing endpoints.", function () {

  /* Connect to the TEST-DATABASE and start test server. */
  before(async function () {
    this.timeout(require("../settings").MOCHA_TEST_TIMEOUT);
    await dbSetup(require("../settings").TEST_DB_URI);

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

  describe("GET: /api/allusers", () => {

    it("should get all users", async function () {
      chai.request(server)
        .get('/api/allusers')
        .end((err, res) => {
          if (err) console.log(err + '  in get');

          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(2);
        });
      let users = await userFacade.getAllUsers();
      expect(users.length).to.be.equal(2);
    });
  });

  describe("DELETE: /api/user", function () {

    it('should delete a user and then expect it to not be there', async function () {

      // Get a user id.
      let allUsers = await userFacade.getAllUsers();
      let userId = allUsers[1]._id;

      chai.request(server)

        .delete('/api/user/' + userId)
        /* .set('Content-Type', 'application/json')
        .set('Accept', 'application/json') */
        .send()
        .end((err, res) => async function () {
          res.should.have.status(200);

          // Er userName ikke null lige meget hvad. Den bliver jo aldrig sat?
          //expect(res.body.userName).to.be.null;
          res.body.length.should.be.eql(5); // Hvorfor passer denne her?

          // VI FÅR EN 404 når vi deleter!!!
           let users = await userFacade.getAllUsers();
          console.log(users);
          expect(users.length).to.be.equal(2);

        });

    });
  }); 


  describe("POST: /api/user", function () {

    it('it should not POST a user without userName field', () => {
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

          let allUsers = await userFacade.getAllUsers();
          expect(allUsers.length).to.be.equal(4); // !!! HVORFOR PASSER DENNE HER???

        });

    });

  });

  describe.skip("PUT: /api/user", function () {

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
  }) 




  describe("POST: /api/login", function () {
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

  }); 

  describe.skip("PUT: /api/blog/:id", function () {


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
  });  

});