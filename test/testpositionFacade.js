const mongoose = require("mongoose");
const expect = require("chai").expect;
const dbSetup = require("../dbSetup");
var positions = require('../models/Position.js');
var Position = mongoose.model('Position', positions.PositionSchema);
var positionFacade=require("../facades/positionFacade.js")
var users = require('../models/User.js');
var User = mongoose.model('User', users.UserSchema);
var userFacade=require("../facades/userFacade")


describe("Testing the Position Facade", function () {

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
        ])
        const positionsData = [positionCreator(10, 11, users[0]._id, false), positionCreator(11, 22, users[1]._id, true),
        positionCreator(11, 12, users[0]._id, true), positionCreator(11, 13, users[1]._id, false)]

        poss = await Position.insertMany([
            positionsData[0],
            positionsData[1],
            positionsData[2],
            positionsData[3]
        ]);



    });

    it("should check add posistion", async function () {
        let users = await userFacade.getAllUsers();
        await positionFacade.addPosition(12, 12, users[0]._id, true);
        let posistionList = await Position.find({});
        expect( posistionList.length).to.be.equal(5);
        
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