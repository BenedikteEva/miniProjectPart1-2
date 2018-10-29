var express = require('express');
var router = express.Router();
const userFacade = require('../facades/userFacade')
const loginFacade= require('../facades/loginFacade')
require('mongoose').set('debug',true)
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('api', {
    title: "Mini Project Part 1 full stack js api"
  })
});


router.get('/allusers',async function (req, res, next) {
  let allusers = await userFacade.getAllUsers();
  let allusersjson=res.json(allusers);
  
 
  res.render('allusers', {
    title: 'all users',
    allusers: allusersjson
  })

});
router.get('/userbyname/:userName', async function(req,res,next){
  let user = await userFacade.findByUsername(req.params.userName);
  let userjson=res.json(user);

  res.render('userbyname', {
    title :'user',
    user: userjson

  })
});
router.get('/userbyid/:_id', async function(req,res,next){
  
  let user = await userFacade.findById(req.params._id);
  let userjson=res.json(user);

  res.render('userbyid', {
    title :'user',
    user: userjson

  })
   
});

router.post('/user', async function(req,res,next){
 
  let newUser =  await userFacade.addUser(req.body.firstName, req.body.lastName, req.body.userName, req.body.password, req.body.email, req.body.type, req.body.company, req.body.companyUrl);

 
  newUser.save((err,user, done) => {
    if(err) {
        res.send(err);
    }
    else { //If no errors, send it back to the client
      res.render('user', {
        title:'Created user',
        message :'succesfully created',
      
    
      })  
    }

  })
  
});

router.patch('/user/:id', function(req,res, next){
let userwithnewjob=  userFacade.addJobToUser(req.params.id, req.body.type, req.body.company, req.body.companyUrl);

userwithnewjob.save((err,user, done) => {
  if(err) {
      res.send(err);
  }
  else { //If no errors, send it back to the client
   let userjson= res.json(userwithnewjob)
    res.render('user', {
      title: 'User with a job',
      message :userjson
   
  
    }) 
  }
  done();
})
})


router.delete('/user',async function(req,res,next){
  
  await userFacade.deleteUser(req.params._id);


  res.render('user', {
    title:'Deleted user',
    user: 'user has succesfully been deleted',
  


  })
   
})
router.post('/login',async function(req,res,next){
 
  let loginUser =  await loginFacade.login(req.body.userName,req.body.password, req.body.longitude, req.body.latitude, req.body.distance );

 
  newUser.save((err,user, done) => {
    if(err) {
        res.send(err);
    }
    else { //If no errors, send it back to the client
      res.render('login', {
        title:'loggedin',
        friends:res.json(loginUser)
      
    
      })  
    }

  })
  
});
 

module.exports = router;
