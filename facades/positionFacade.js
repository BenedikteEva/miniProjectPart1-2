var mongoose = require('mongoose');
require("../dbSetup.js")();
var users = require('../models/User.js');
var User = mongoose.model("User", users.userSchema);
var positions = require('../models/Position.js');
var Position= mongoose.model("Position", positions.positionSchema);


async function addPosition(lon, lat, userId, dateInFuture) {
  var posDetail = { user: userId, loc: { type: 'Point', coordinates: [lon, lat] } }
  if (dateInFuture) {
    posDetail.created = "2022-09-25T20:40:21.899Z"
  }
  var pos = new Position(posDetail);
await Position( pos ).save();

  return pos;


}



module.exports={addPosition:addPosition}