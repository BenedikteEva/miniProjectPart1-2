var mongoose = require('mongoose');
require("..//dbSetup.js")();
var db = mongoose.connection;
var users = require('../models/User.js');
var User = mongoose.model('User', users.UserSchema);
//require('mongoose').set('debug',true)







async function addUser(firstName, lastName, userName, password, email, type, company, companyUrl) {

  var jobDetail = { type: type, company: company, companyUrl: companyUrl };
  var userDetail = { firstName: firstName, lastName: lastName, userName: userName, email: email, password: password, job: jobDetail };

  return await User.create(userDetail);
}



async function addJobToUser(_id, type, company, companyUrl) {// Don’t focus on jobs unless you have a spare time
  var jobDetail ={ type: type, company: company, companyUrl: companyUrl };
 return await User.findByIdAndUpdate(
    { '_id': _id },
    {
      $set: { job:jobDetail},
      function(err, res) {
        if (err) throw err;
        console.log('doc updated'+res )

      }
    }).exec()
};


async function getAllUsers() {

  return await User.find({})
};

async function findByUserName(username) {
   
  return await User.findOne({ userName: username }).exec();
}

async function findById(id) {
  return  await User.findById({ _id: id });
}

async function deleteUser(id){
await User.findByIdAndDelete({_id:id});
}




module.exports = {
  getAllUsers: getAllUsers,
  addUser: addUser,
  findByUsername: findByUserName,
  findById: findById,
  addJobToUser:addJobToUser,
  deleteUser: deleteUser
}