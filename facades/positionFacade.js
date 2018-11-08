var mongoose = require('mongoose');
require("../dbSetup.js")();
var users = require('../models/User.js');
var User = mongoose.model("User", users.userSchema);
var positions = require('../models/Position.js');
var Position= mongoose.model("Position", positions.positionSchema);


// Mangler at få en User med. Den er required i models.
async function addPosition(lon, lat, userId, dateInFuture) {
  var posDetail = { user: userId, loc: { type: 'Point', coordinates: [lon, lat] } }
  if (dateInFuture) {
    posDetail.created = "2022-09-25T20:40:21.899Z"
  }
  var pos = new Position(posDetail);
    await Position( pos ).save();

  return pos;
}

async function updatePosition(userid,lon, lat){
  let position= await Position.updateOne( { user : userid }, {loc : {type: 'Point',coordinates:[lon,lat]}}, { upsert : true } ).exec();
  console.log(position)
return position;
}

module.exports={
  addPosition:addPosition, 
  updatePosition:updatePosition
}

