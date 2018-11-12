var mongoose = require('mongoose');
require("..//dbSetup.js")();
var db = mongoose.connection;
var users = require('../models/User.js');
var User = mongoose.model('User', users.UserSchema);
var positions = require('../models/Position.js');
var Position = mongoose.model('Position', positions.PositionSchema);
var posfacade = require('./positionFacade');
/* var Expo =require('expo-server-sdk');

// Create a new Expo SDK client
let expo = new Expo(); */


async function login(userName, password, longitude, latitude, distance, push_token) {
  let user = await User.findOne({ 'userName': userName });


  if (user.password === password) {
    await posfacade.updatePosition( user._id, longitude, latitude);

    let friends = await friendFinderUtility(longitude, latitude, distance);
    //methods for making pushnotifications to friends:
    // 
    return { friends:friends.map((friend) => {
      const jsonFriends = { "username": friend.user.userName, "latitude": friend.loc.coordinates[1], "longitude": friend.loc.coordinates[0] }
      return jsonFriends
    })}
  } else {
    return { friends: "wrong username or password", status: 404 }
  }

}



async function friendFinderUtility(longitude, latitude, distance) {

  let position = await Position.find(
    {
      loc:
      {
        $near:
        {
          $geometry: { type: "Point", coordinates: [longitude, latitude] },
          $minDistance: 0,
          $maxDistance: distance
        }
      }
    }
  ).populate('user').exec()
  // 
  return await position;

}

module.exports = { login }