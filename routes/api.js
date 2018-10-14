var express = require('express');
var router = express.Router();
const userFacade = require('../facades/userFacade')

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


 

module.exports = router;
