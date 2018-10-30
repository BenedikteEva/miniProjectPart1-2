require("./dbSetup.js")();
var mongoose = require('mongoose');
var db = mongoose.connection;
var User = require("./models/User.js");
var LocationBlog = require("./models/LocationBlog.js");
var Position = require("./models/Position.js");


// laver jobs som en liste hvis vi gerne vil have en jobcollection senere. 
const joblist = [
  { type: "Owner", company: "Mycompany", companyUrl: "www.mycompany.com" },
  { type: "Secretary", company: "Mycompany", companyUrl: "www.mycompany.com" },
  { type: "Janitor", company: "MyOtherCompany", companyUrl: "www.myothercompany.com" },
  { type: "Owner", company: "MyOthercompany", companyUrl: "www.myothercompany.com" }


]

const userlist = [
  { firstName: 'Sweetie', lastName: 'Sweetums', userName: 'Sweetie', password: "sweetie", email: "sweetie@sweets.on", job: joblist[0] },
  { firstName: 'Hardie', lastName: 'Hards', userName: 'Hardie', password: "hardie", email: "hardie@hards.on", job: joblist[1] },
  { firstName: 'Crazy', lastName: 'Crazed', userName: 'Crazy', password: "crazed", email: "crazy@crazed.on", job: joblist[2] },
  { firstName: 'Mons', lastName: 'Monster', userName: 'MonsterMons', password: "mons", email: "monster@mons.on", job: joblist[3] },

];





// Here we will setup users
async function createUsers() {
  await User.deleteMany({});
  await LocationBlog.deleteMany({});
  await Position.deleteMany({});
  return await db.collection('users').insertMany([
    userlist[0], userlist[1], userlist[2], userlist[3]
  ]);//use foreach if more testdata needed
}


// utility function til at skabe positioner Jeg var nødt at ændre user til at kunne tage en string istedet for med mindre 
//jeg gerne vil have hele useren embedded og det vil jeg vist nok helst ikke fordi: det fylder mere og det er ikke nødvendigt (håber jeg) 
function positionCreator(lon, lat, userId, dateInFuture) {
  var posDetail = { user: userId, loc: { type: 'Point', coordinates: [lon, lat] } }
  if (dateInFuture) {
    posDetail.created = "2022-09-25T20:40:21.899Z"
  }
  var pos = new Position(posDetail);
  return pos;
}

//Utility Function to create LocationBlogs
function locationBlogCreator(info, author, longitude, latitude) {
  var LocationBlogDetail = { info, pos: { longitude, latitude }, author , likedBy:[{_id:author._id}]};
  var blog = new LocationBlog(LocationBlogDetail);

  return blog.save();
}

async function createPositionsAndLocBlogs() {
  try {
  const userPromises=[createUsers()]
  var users = await Promise.all(userPromises);
console.log(users[0].insertedIds[0])
// hvis jeg gerne vil have hel useren embedded og ikke kun id må jeg bruge userlist const her  og [userschema] i position.js
const positionsData = [positionCreator(  55.77073154490739, 12.511239051818848,
  users[0].insertedIds[0], true), positionCreator(11, 22,  users[0].insertedIds[1], true),
positionCreator(55.770112949163725,12.513250708580017,
  users[0].insertedIds[2], true), positionCreator(55.77097596295904,12.512124180793762,
  users[0].insertedIds[3], true)]

poss = await Position.insertMany([
   positionsData[0],
   positionsData[1],
   positionsData[2],
   positionsData[3]
]);


//blogs are created
 

 
    var blogPromises = [
      locationBlogCreator("Cool Place", users[0].ops[0]._id, 26, 28),
      locationBlogCreator("Another Cool Place",  users[0].ops[1]._id, 56, 56),
      locationBlogCreator("Yet Another Cool Place",  users[0].ops[2]._id, 28, 56),
      locationBlogCreator("The coolest Place",  users[0].ops[3]._id, 34, 56),
    ];
 
  } catch (err) {
    console.log("UPPPS: ", err);
}


}
createPositionsAndLocBlogs();


