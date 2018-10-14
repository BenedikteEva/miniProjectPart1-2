const mongoose = require("mongoose");
const expect = require("chai").expect;
const dbSetup = require("..//dbSetup");

//https://github.com/Automattic/mongoose/issues/1251
mongoose.models = {};
mongoose.modelSchemas = {};
mongoose.connection = {};

var blogFacade = require("../facades/blogFacade");
var Blog = require("../models/LocationBlog");
var userFacade=require("../facades/userFacade")
var users = require('../models/User.js');
var User = mongoose.model('User', users.UserSchema);
let connection = null;
describe("Testing the LocBlog Facade", function () {

  /* Connect to the TEST-DATABASE */
  before(async function () {
    this.timeout(require("../settings").MOCHA_TEST_TIMEOUT);
    await dbSetup(require("../settings").TEST_DB_URI);
  })

  after(function () {
    mongoose.connection.close();
  })
  
  var blogs = [];
  /* Setup the database in a known state (2 users) before EACH test */
  beforeEach(async function () {
    await Blog.deleteMany({}).exec();
 
    var users = await userFacade.getAllUsers();
    user1=users[0];
  
    

   blogs = await Promise.all([
      new Blog({ info:'Not so cool blog', pos:{longitude:11, latitude:13},author:user1 }).save(),
      new Blog({ info:'Cool blog', pos:{longitude:12, latitude:55},author:users[1] ,   likedBy:user1 }).save(),
    ])
  })

  

  it("Should add Blog", async function () {
    var users = await userFacade.getAllUsers();
    var blog = await blogFacade.addLocationBlog("This is the coolest test blog ever",11,13 , users[1]._id);
    expect(blog).to.not.be.null;
    expect(blog.info).to.be.equal("This is the coolest test blog ever");
    
  
  });

})