var expect = require("chai").expect;
var request = require("request");
var expect = require("chai").expect;
let chai = require('chai');
var http = require('http');
var chaiHttp = require('chai-http');
let should = chai.should();
var app = require('../app');
var server;
var TEST_PORT = 3456;


chai.use(chaiHttp);

before(function(done){
  var app = require('../app');
  server = http.createServer(app);
  server.listen(TEST_PORT,function(){
    done();
  });
})
after(function(done){
  server.close();
  done();
})


describe("GET: /api/allusers", (done)=>{
    it("should get all users", (done)=>{
      chai.request(server)
        .get('/api/allusers')
        .end((err,res)=>{
          if(err) console.log(err+'  in get');
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(2);
       
        })
        done(); })
})


/* describe("POST: /api/usercreate", function () {
  var options = {
    url: "http://localhost:" + TEST_PORT + "/api/usercreate",
    method: "POST",
    json: true,
    body: {firstName: "Ugly", lastName: "Bugley", userName:"ugbug",password:"ugtest", email: "ug@bug.ly" }
  }

  it("should get the newly added user", function (done) {
    request(options, function (error, res, body) {
      let ugbug = body.firstName;
      console.log(ugbug)
      expect(ugbug).to.be.equal("Ugly");
      //You should also check whether the joke actually was added to the Data-store
      done();
    });
  })
}); */

