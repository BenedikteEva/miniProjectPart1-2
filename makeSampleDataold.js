var mongoose = require( 'mongoose' );
var users=require('./models/User.js');
var makeUser=mongoose.model("User",users.userSchema);
 var positions = require('./models/Position.js');
var makePosition = mongoose.model("Position", positions.PositionSchema);  
var jobs=require('./models/Job.js');
var makeJobs= mongoose.model('Job', jobs.JobSchema);
var locationBlogs=require('./models/LocationBlog.js')
var makeLocationBlogs= mongoose.model('LocationBlog', locationBlogs.locationBlogSchema)
mongoose.connect('mongodb://BenedikteEva:sg04pbem@ds125263.mlab.com:25263/miniproject',{ useNewUrlParser: true, useCreateIndex: true })
var db = mongoose.connection;




 //skal stå først når dette bliver kørt. 
makeUser.create({userName:'Anton', password: "anton1",firstName:'Anton', lastName:'du forventede Antonsen ikke?', 
email:"anton@ant.on" }, );

// create a new user
var newUser2 = new makeUser({
  userName: 'Kurt Wonnegut',
  email: "kw@somewhere.dk"
});

// save the user
newUser2.save(function(err) {
  if (err){
      throw err
  };
  console.log('User created!');
});   



db.collection('users').insertMany([
  {userName:'Sweetie', password: "sweetie",firstName:'Sweetie', lastName:'Sweetums', 
email:"sweetie@sweets.on" ,created:Date.now()},
{userName:'Hardie', password: "hardie",firstName:'Hardie', lastName:'Hards', 
email:"hardie@hards.on" }]); 




 db.collection('jobs').insertMany([
  {type: "Owner", company: "Mycompany", companyUrl: "www.mycompany.com"},
  {type: "Secretary", company: "Mycompany", companyUrl: "www.mycompany.com"},
  {type: "Janitor", company: "MyOtherCompany", companyUrl: "www.myothercompany.com"},
  {type: "Owner", company: "MyOthercompany", companyUrl: "www.myothercompany.com"}


]) 
db.collection('locationBlogs').insertMany([
  {   created: Date.now(),
    lastUpdated:  Date.now(),
    info:'blog about location',
    slug:'whats a slug',
    img: ['http://dmracekanin2011.dk/wp-content/uploads/2018/02/shutterstock_589399619.jpg']},
    {   created: Date.now(),
      lastUpdated:  Date.now(),
      info:'blog about some other location',
      slug:'got picture of a slug',
      img: ['https://spectator.imgix.net/content/uploads/2018/06/l.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=820&h=550']}

]) 

/* db.collection('positions').insertMany([
  {user: makeUser.findById(1)}

]) */