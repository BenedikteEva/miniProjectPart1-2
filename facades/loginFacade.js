var mongoose = require('mongoose');
require("..//dbSetup.js")();
var db = mongoose.connection;
var users = require('../models/User.js');
var User = mongoose.model('User', users.UserSchema);
var positions = require('../models/Position.js');
var Position = mongoose.model('Position', positions.PositionSchema);
var posfacade = require('./positionFacade');


/* In this method implement the following steps:
Check whether the user exist, and if, that passwords matches. If not throw an error.
Update the position for the User. Use Position.findOneAndUpdate(....)  (provide it with the upsert option, so it will create the Document if it does not exist). Remember to update created also.
Now create a utility method which will find all nearby friends given a point and dist (use this example as a template, but replace db.places with Position, since we are using mongoose, and rename location to loc  ).
The method implemented above will find all the nearby Position objects, but it will not populate it with User details. Se the section related to populate in the tutorial for how to do that:
Finally use map on the list of friends to reformat it as requested for the endpoint
IMPORTANT: Add this line below your PostionSchema, in order to create the required 2dsphere index: PositionSchema.index({ loc: "2dsphere" },{ "background": true }); */


async function login(userName, password, longitude, latitude, distance) {
  let user = await User.findOne({ 'userName': userName });


  if (user.password === password) {
    await posfacade.addPosition(longitude, latitude, user._id, true);

    let friends = await friendFinderUtility(longitude, latitude, distance);
    console.log('friends' + friends)
    return { friends:friends.map((friend) => {
      const jsonFriends = { "username": friend.user.userName, "latitude": friend.loc.coordinates[1], "longitude": friend.loc.coordinates[0] }
      return jsonFriends
    })}
  } else {
    return { friends: "wrong username or password", status: 403 }
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
          $minDistance: 1,
          $maxDistance: distance
        }
      }
    }
  ).populate('user').exec()
  // 
  return await position;

}

module.exports = { login }