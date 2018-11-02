var mongoose = require('mongoose');
require("..//dbSetup.js")();
var db = mongoose.connection;
var users = require('../models/User.js');
var User = mongoose.model('User', users.UserSchema);
//require('mongoose').set('debug',true)

function addUser(firstName, lastName, userName, password, email, type, company, companyUrl) {

  var jobDetail = {
    type: type,
    company: company,
    companyUrl: companyUrl
  };

  var userDetail = {
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    email: email,
    password: password,
    job: jobDetail
  };

  return User.create(userDetail); // returner et promise.

};

// Don’t focus on jobs unless you have a spare time
function addJobToUser(_id, type, company, companyUrl) { 
  var jobDetail = {
    type: type,
    company: company,
    companyUrl: companyUrl
  };

  return User.findByIdAndUpdate({
    '_id': _id
  }, {
    $set: {
      job: jobDetail
    },
    function (err, res) {
      if (err) throw err;
      console.log('doc updated' + res)

    }
  }).exec()
};


async function getAllUsers() {

  return await User.find({})
};

function findByUserName(username) {

  return User.findOne({
    userName: username
  }).exec();
};

function findById(id) {
  return User.findById({
    _id: id
  });
};

async function deleteUser(_id) {

  return await User.findByIdAndDelete({_id:_id});
};

// VIRKER IKKE! Update user - Mangler test.
function updateUser(user) {
  console.log(user._id);
  return User.findByIdAndUpdate( user._id, user, {new: true} ).exec();
}

module.exports = {
  getAllUsers: getAllUsers,
  addUser: addUser,
  findByUsername: findByUserName,
  findById: findById,
  addJobToUser: addJobToUser,
  deleteUser: deleteUser,
  updateUser: updateUser
};