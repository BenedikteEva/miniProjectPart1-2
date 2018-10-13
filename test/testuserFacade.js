const mongoose = require("mongoose");
const expect = require("chai").expect;
const should = require("chai").should;
const dbSetup = require("..//dbSetup");
var db = mongoose.connection;

// //https://github.com/Automattic/mongoose/issues/1251
// mongoose.models = {};
// mongoose.modelSchemas = {};
// mongoose.connection = {};

var userFacade = require("../facades/userFacade");
var users = require('../models/User.js');
var User = mongoose.model('User', users.UserSchema);
let connection = null;
describe("Testing the User Facade", function () {

  /* Connect to the TEST-DATABASE */
  before(async function () {
    this.timeout(require("../settings").MOCHA_TEST_TIMEOUT);
    await dbSetup(require("../settings").TEST_DB_URI);
  })

  after(function () {
 Promise.all([
      new User({ firstName: "Kurt", lastName: "Wonnegut", userName: "kw", password: "test", email: "a@b.dk" }).save()])
    mongoose.connection.close();
  })

  var users = [];
  /* Setup the database in a known state (2 users) before EACH test */
  beforeEach(async function () {
    await User.deleteMany({}).exec();
    users = await Promise.all([
      new User({ firstName: "Kurt", lastName: "Wonnegut", userName: "kw", password: "test", email: "a@b.dk" }).save(),
      new User({ firstName: "Hanne", lastName: "Wonnegut", userName: "hw", password: "test", email: "b@b.dk" }).save(),
    ])
  });

  it("Should find all users (Kurt and Hanne)", async function () {
    var users = await userFacade.getAllUsers();
    expect(users.length).to.be.equal(2);
  });

  it("Should Find Kurt Wonnegut by Username", async function () {
    var user = await userFacade.findByUsername("kw");
    expect(user.firstName).to.be.equal("Kurt");
  });

  it("Should Find Kurt Wonnegut by ID", async function () {
    var user = await userFacade.findById(users[0]._id);
    expect(user.firstName).to.be.equal("Kurt");
  });

  it("Should add Peter Pan", async function () {
    var user = await userFacade.addUser("Peter", "Pan", "peter", "test", "c@b.dk");
    expect(user).to.not.be.null;

    expect(user.firstName).to.be.equal("Peter");
    var users = await userFacade.getAllUsers();
    expect(users.length).to.be.equal(3);
  });

  it("Schould give Kurt a new job by finding him by id and then update job", async function () {
    var newJob = await userFacade.addJobToUser('5bc072509f0a746250199ded', 'Owner', 'company3', 'www.company3.on');
  })

  it("Schould find Kurt by his id and then delete him Again", async function () {
    var user = await userFacade.findById(users[0]._id);
    await userFacade.deleteUser(user._id);
    user = await userFacade.findById(users[0]._id);
    expect(user).to.be.null;
  })

})

