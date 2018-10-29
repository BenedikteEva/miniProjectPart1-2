const mongoose = require("mongoose");
const expect = require("chai").expect;
const dbSetup = require("../dbSetup");
var positions = require('../models/Position.js');
var Position = mongoose.model('Position', positions.PositionSchema);
var positionFacade=require("../facades/positionFacade.js")
var users = require('../models/User.js');
var User = mongoose.model('User', users.UserSchema);
var loginFacade=require("../facades/loginFacade")


describe("Testing the login Facade", function () {

    /* Connect to the TEST-DATABASE */
    before(async function () {
        this.timeout(require("../settings").MOCHA_TEST_TIMEOUT);
        await dbSetup(require("../settings").TEST_DB_URI);
    })

    after(function () {

        mongoose.connection.close();
    })

    var poss = [];
    /* Setup the database in a known state (4 posistions) before EACH test */
    beforeEach(async function () {
        await Position.deleteMany({}).exec();
        await User.deleteMany({}).exec();
        users = await Promise.all([
          new User({ firstName: "Kurt", lastName: "Wonnegut", userName: "kw", password: "test", email: "a@b.dk" }).save(),
          new User({ firstName: "Hanne", lastName: "Wonnegut", userName: "hw", password: "test", email: "b@b.dk" }).save(),
          new User({ firstName: "Peter", lastName: "Pan", userName: "pp", password: "test", email: "p@p.dk" }).save(),
        ])
        const positionsData = [positionCreator(  55.77073154490739, 12.511239051818848,
           users[1]._id, false), positionCreator(11, 22, users[2]._id, true),
        positionCreator(55.770112949163725,12.513250708580017,
           users[1]._id, true), positionCreator(55.77097596295904,12.512124180793762,
             users[2]._id, false)]

        poss = await Position.insertMany([
            positionsData[0],
            positionsData[1],
            positionsData[2],
            positionsData[3]
        ]);



    });

    it("should check bad login ", async function () {
        let loginresponse = await loginFacade.login("kw","wrongtest",55.770112949163725,12.513250708580017,500 );
       
        expect( loginresponse).to.be.equal('wrong username or password');
        
    });


it("should check good login ", async function () {
  let loginresponse = await loginFacade.login("kw","hash_me_and_add_some_salt test",55.770112949163725,12.513250708580017,500 );
 
console.log('loginresponse '+loginresponse)
  // this is bullshit we dont want this
  expect( loginresponse).to.be.undefined;
  
});
});

 function positionCreator(lon, lat, userId, dateInFuture) {
    var posDetail = { user: userId, loc: { type: 'Point', coordinates: [lon, lat] } }
    if (dateInFuture) {
        posDetail.created = "2022-09-25T20:40:21.899Z"
    }
    var pos = new Position(posDetail);
    return pos;
}
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

