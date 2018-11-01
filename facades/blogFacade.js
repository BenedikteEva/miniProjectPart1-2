var mongoose = require('mongoose');
require("../dbSetup.js")();
var users = require('../models/User.js');
var User = mongoose.model("User", users.userSchema);
var locblogs = require('../models/LocationBlog.js');
var LocBlog = mongoose.model("LocationBlog", locblogs.locationBlogSchema);

function getAllBlogs() {
  return LocBlog.find({}).exec();
}

function addLocationBlog(info, longitude, lattitude, author) {

  let position = { longitude: longitude, latitude: lattitude };
  let locblogDetail = { info: info, pos: position, author: author, likedBy: author._id };
  var blog = new LocBlog(locblogDetail);

  return blog.save();
}
  
function findLocationBlog(id) {
  return LocBlog.findById({ _id: id }).exec();
}

// Denne her metode bruges ikke pt.
async function findLocationBlogInfo(info) {
  return await LocBlog.findOne({ info: info }).exec();
}

async function likeLocationBlog(id, user_id) {
  var blog = await LocBlog.findOneAndUpdate({ _id: id }, { $push: { likedBy: user_id } });
  return blog.save();
}

module.exports = {
  addLocationBlog: addLocationBlog,
  likeLocationBlog: likeLocationBlog,
  getAllBlogs: getAllBlogs,
  findLocationBlog: findLocationBlog,
  findLocationBlogInfo:findLocationBlogInfo
}