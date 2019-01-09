const mongoose = require("mongoose");
const expect = require("chai").expect;
const dbTestSetup = require("../dbTestSetup");

//https://github.com/Automattic/mongoose/issues/1251
mongoose.models = {};
mongoose.modelSchemas = {};
mongoose.connection = {};

var blogFacade = require("../facades/blogFacade");
var Blog = require("../models/LocationBlog");
var userFacade = require("../facades/userFacade");
var User = require('../models/User.js');

describe("Testing the LocBlog Facade", function () {

  /* Connect to the TEST-DATABASE */
  before(async function () {
    this.timeout(require("../settings").MOCHA_TEST_TIMEOUT);
    await dbTestSetup(require("../settings").TEST_DB_URI);
  });

  after(function () {
    mongoose.connection.close();
  });

  //var blogs = [];
  /* Setup the database in a known state (3 users) before EACH test */
  beforeEach(async function () {
    await Blog.deleteMany({}).exec();
    await User.deleteMany({}).exec();

    users = await Promise.all([
      new User({
        firstName: "Kurt",
        lastName: "Wonnegut",
        userName: "kw",
        password: "test",
        email: "a@b.dk"
      }).save(),
      new User({
        firstName: "Hanne",
        lastName: "Wonnegut",
        userName: "hw",
        password: "test",
        email: "b@b.dk"
      }).save(),
    ]);

    // Used in new Blog to add an author.
    user1 = users[0];

    blogs = await Promise.all([
      new Blog({
        info: 'Not so cool blog',
        pos: {
          longitude: 11,
          latitude: 13
        },
        author: user1
      }).save(),
      new Blog({
        info: 'Cool blog',
        pos: {
          longitude: 12,
          latitude: 55
        },
        author: users[1],
        likedBy: user1
      }).save(),
    ]);
  });

  it("Should test add Blog", async function () {
    var users = await userFacade.getAllUsers();
    var blog = await blogFacade.addLocationBlog("This is the coolest test blog ever", 11, 13, users[1]._id);

    expect(blog).to.not.be.null;
    expect(blog.info).to.be.equal("This is the coolest test blog ever");
  });

  it("should test findlocation blog find one and tjek the info", async function () {
    let blogToTest = await blogFacade.findLocationBlog(blogs[0]._id);

    expect(blogToTest.info).to.be.equal("Not so cool blog")
  });

  it("Should test likelocationblog() on the not so cool blog ", async function () {
    await blogFacade.likeLocationBlog(blogs[0]._id, users[0]._id);
    await blogFacade.likeLocationBlog(blogs[0]._id, users[1]._id);

    let blogUpdated = await blogFacade.findLocationBlog(blogs[0]._id)

    expect(blogUpdated.likedBy.length).to.be.equal(2);
  });

});