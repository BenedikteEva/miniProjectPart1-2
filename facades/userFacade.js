var mongoose = require('mongoose');
require("..//dbSetup.js")();
var db = mongoose.connection;
var users = require('../models/User.js');
var User = mongoose.model('User', users.UserSchema);








async function addUser(firstName, lastName, userName, password, email, type, company, companyUrl) {

  var jobDetail = { type: type, company: company, companyUrl: companyUrl };
  var userDetail = { firstName: firstName, lastName: lastName, userName: userName, email: email, password: password, job: jobDetail };

  return await User.create(userDetail);
}



async function addJobToUser(_id, type, company, companyUrl) {// Don’t focus on jobs unless you have a spare time
  var jobDetail = { type: type, company: company, companyUrl: companyUrl };
  await User.findOneAndUpdate(
    { '_id': _id },
    {
      $set: { job: jobDetail },
      function(err, res) {
        if (err) throw err;
        console.log('doc updated' + res)

      }
    })
};


async function getAllUsers() {

  return await User.find({})
};

async function findByUserName(username) {
  const foundUser = await db.collection('users').findOne({ userName: username })
  return foundUser;
}

async function findById(id) {
  return db.collection('users').findOne({ _id: id });
}


// addUser('Klump', 'Boobs', 'KlumpBoobs', 'klump', 'klump@boops.on', 'CEO', 'company3', 'www.company.on');
//  addUser('Bibby', 'Beebs', 'BibbyBeebs', 'beebie', 'bibby@beeps.on');
// addUser('Bibbo', 'Beobs', 'BibboBeobs', 'beobie', 'bibbo@beops.on');

// console.log(findByUserName('KlumpBoobs'))
 //console.log(getAllUsers());
//addJobToUser('5bbfb873a72f790c80500767','Partner', 'company3', 'www.company.on' )


module.exports = {
  getAllUsers: getAllUsers,
  addUser: addUser,
  findByUsername: findByUserName,
  findById: findById,
  addJobToUser:addJobToUser
}