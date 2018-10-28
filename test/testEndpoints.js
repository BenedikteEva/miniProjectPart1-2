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
var userFacade=require('../facades/userFacade')

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






describe("DELETE: /api/user", function (){
it('should delete a user and then expect it to not be there', (done)=>{
  let userid=   userFacade.findByUsername('kw')._id;

 chai.request(server)
      .delete('/api/user')
      .send(userid)
      .end((err, res) => {
        res.should.have.status(200);
   
       expect(res.body.userName).to.be.null;
        
      });
  
      done(); });

});


describe("POST: /api/user", function () {
  it('it should not POST a user without userName field', (done) => {
    let user = {
      firstName: "Testy",
      lastName: "Testisen",
      userName: 'tete',
      password:"test", 
      email: "test@test.tt",
      type: null,
      company:null,
      companyUrl:null

    }
    chai.request(server)
      .post('/api/user')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
      
         console.log(userFacade.getAllUsers)
      });
     
      done(); });

});
describe("PUT: /api/user", function (){
  it('should give a user a new job and then test if user really got a new job',  (done)=>{
    let userid= userFacade.findByUsername('hw')._id;

    chai.request(server)
    .put('/api/user')
    .send({_id:userid,job:{type: 'piccolo',company: 'notmycompany', companyUrl:'www.notmycompany.org'}})
    .end((err, res) => {
      res.should.have.status(200);
     expect(res.body.job[1].type).to.be.equal('piccolo');
      
    });
    done(); });
})
