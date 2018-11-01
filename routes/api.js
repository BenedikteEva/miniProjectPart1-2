var express = require('express');
var router = express.Router();
const userFacade = require('../facades/userFacade')
const loginFacade = require('../facades/loginFacade')
const blogFacade = require('../facades/blogFacade')
require('mongoose').set('debug', true)

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('api', {
    title: "Mini Project Part 1 full stack js api"
  })
});

// Get all users.
router.get('/allusers', async function (req, res, next) {
  try {
    let allusers = await userFacade.getAllUsers();
    res.json(allusers);
  } catch (err) {
    // next(err) Flytter din err op i stacken, og viser din exception.
    next(err);
  }
});

// Find user by name.
router.get('/userbyname/:userName', async function (req, res, next) {
  try {
    let user = await userFacade.findByUsername(req.params.userName);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// Find user by id.
router.get('/userbyid/:_id', async function (req, res, next) {
  try {
    let user = await userFacade.findById(req.params._id);

   res.json(user);

  } catch (err) {
    next();
  }
});

// New user. 
router.post('/user', async function (req, res, next) {
  try {
    const newUser = req.body;
    await userFacade.addUser(newUser.firstName, newUser.lastName, newUser.userName, newUser.password, newUser.email, newUser.type, newUser.company, newUser.companyUrl);
    res.send('user added.')

  } catch (err) {
    next(err);
  }

});

// delete user
router.delete('/user/:_id', async function (req, res, next) {


    const id = req.params._id;
    await userFacade.deleteUser(id);
try {
    // If user does not exist send a messege to the client.
    if(res.status(404)) {
      res.send('User does not exist.')
    }else{
    res.send('User deleted.');
    }
  } catch(err) {
    next(err);
  }
  
});

router.put('/user/:id', async function (req, res, next) {
 
  let userwithnewjob = await userFacade.addJobToUser(req.params.id, req.body.type, req.body.company, req.body.companyUrl);



      let userjson = res.json(userwithnewjob)
     userwithnewjob.save((err, user, done) => {
        if (err) {
          res.send(err);
        }
        else { //If no errors, send it back to the client
          res.json(userwithnewjob)}})
 
})




router.post('/login', async function (req, res, next) {

  let loginUser = await loginFacade.login(req.body.userName, req.body.password, req.body.longitude, req.body.latitude, req.body.distance);
  let responseObk = res.json(loginUser)


  res.render('login', {
    title: 'login',
    friends: 'friends:' + responseObk


  })
})


// Get all blogs
router.get("/blogs", async function (req, res, next) {
  try {
    let blogs = await blogFacade.getAllBlogs();
    res.json(blogs);

  } catch (err) {
    next(err);
  }
});


router.post("/blog", async function (req, res, next) {
  try {
    let newBlog = req.body;
    let userId = newBlog.author;

    let author = await userFacade.findById(userId);
    let id = author._id;
    console.log(author);

    let blog = await blogFacade.addLocationBlog(newBlog.info, newBlog.pos.longitude, newBlog.pos.latitude, id)
   
    res.json(blog)
  } catch (err) {
    next(err);
  }
});


router.get('/blog/:_id', async function (req, res, next) {
  try {
    let blog = await blogFacade.findLocationBlog(req.params._id);
    res.json(blog);
  } catch(err) {
    next(err);
  }


});


router.put("/like_blog/:id", async function (req, res, next) {
  await blogFacade.likeLocationBlog(req.params.id, req.body.likedBy);
  
  let blog = await blogFacade.findLocationBlogInfo("Cool blog")
  res.json(blog);


});

module.exports = router;
