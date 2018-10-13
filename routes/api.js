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
  next();
 
  res.render('allusers', {
    title: 'all users',
    allusers: allusers
  })

});
router.get('/user/:userName', async function(req,res,next){
  let user = await userFacade.findByUsername(req.params.userName);
  next();
  res.render('user', {
    title :'user',
    user: user

  })
});



 

module.exports = router;
