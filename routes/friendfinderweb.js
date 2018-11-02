var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');


//const URL = 'http://localhost:3000/api/';
const URL = 'https://miniprojectfsjsbebop.herokuapp.com/api/'

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('friendfinderweb', {
    title: 'Friend Finder blog app',
    besked: " Her kan du oprette dig som bruger, logge ind og se dine venner samt tilføje en locationblog og rette iden"
  });
});

router.post('/loginweb', async function (req, res, next) {
  const body=JSON.stringify({'userName': req.body.username, 'password': req.body.password, 'longitude': req.body.Longitude, 'latitude': req.body.Latitude, 'distance': req.body.distance })
  let loginUser = await fetch(URL + 'login', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: body
 
  }).then(function (response) {
   return response.json();
  }).catch((err) => {
    console.log('catch' + err)
  })

console.log(loginUser)

if (loginUser.friends.length!==0){
  res.render('loginweb', {
    title: 'loggedin',
    friends:loginUser.friends
    })}
    else{
      res.render('loginweb', {
        title: 'loggedin',
        friends:"you are the only one logged in in this distance"
    }
      )}

  })




router.get('/listofallblogs', async function (req, res, next) {
  let blogs = await fetch(URL + 'blogs').then(response => {
    response.json()
      .then(data => {
        console.log('data' + data[0].info)
        return data.map((blog) => { blog.info })
      })
  }).catch((err) => {
    console.log('catch' + err)
  })


  res.render('listofallblogs', {
    title: 'blogs',
    besked: 'Just to check if somethings happening',
    blogs: blogs

  })
})
module.exports = router;