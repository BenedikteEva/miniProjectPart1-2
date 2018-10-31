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


router.get('/allusers', async function (req, res, next) {
  let allusers = await userFacade.getAllUsers();
  let allusersjson = res.json(allusers);


  res.render('allusers', {
    title: 'all users',
    allusers: allusersjson
  })

});
router.get('/userbyname/:userName', async function (req, res, next) {
  let user = await userFacade.findByUsername(req.params.userName);
  let userjson = res.json(user);

  res.render('userbyname', {
    title: 'user',
    user: userjson

  })
});
router.get('/userbyid/:_id', async function (req, res, next) {

  let user = await userFacade.findById(req.params._id);
  let userjson = res.json(user);

  res.render('userbyid', {
    title: 'user',
    user: userjson

  })

});

router.post('/user', async function (req, res, next) {

  let newUser = await userFacade.addUser(req.body.firstName, req.body.lastName, req.body.userName, req.body.password, req.body.email, req.body.type, req.body.company, req.body.companyUrl);


  newUser.save((err, user, done) => {
    if (err) {
      res.send(err);
    }
    else { //If no errors, send it back to the client
      res.render('user', {
        title: 'Created user',
        message: 'succesfully created',


      })
    }

  })

});

router.put('/user/:id', async function (req, res, next) {
  console.log('req.body.type'+req.body.type+req.body.company+req.body.companyUrl+req.params.id)
  let userwithnewjob = await userFacade.addJobToUser(req.params.id, req.body.type, req.body.company, req.body.companyUrl);
 console.log('userwithnewjob'+userwithnewjob)


      let userjson = res.json(userwithnewjob)
     userwithnewjob.save((err, user, done) => {
        if (err) {
          res.send(err);
        }
        else { //If no errors, send it back to the client
      res.render('user', {
       
        message: userjson
      })}})
 
})


router.delete('/user', async function (req, res, next) {

  await userFacade.deleteUser(req.params._id);


  res.render('user', {
    title: 'Deleted user',
    user: 'user has succesfully been deleted',



  })

})
router.post('/login', async function (req, res, next) {

  let loginUser = await loginFacade.login(req.body.userName, req.body.password, req.body.longitude, req.body.latitude, req.body.distance);
  let responseObk = res.json(loginUser)


  res.render('login', {
    title: 'login',
    friends: 'friends:' + loginUser


  })
})

// REST endpoints for Blogs.

// Get all blogs
router.get("/blogs", async function (req, res, next) {
  try {
    let blogs = await blogFacade.getAllBlogs();
    let blogsJson = res.json(blogs);
    next();
    res.render('blogs', {
      title: 'allblogs',
      blogs: blogsJson
    })
  } catch (err) {
    next(err);
  }
});

// Add location blog.
router.post("/blog", async function (req, res, next) {
  try {
    let newBlog = req.body;
    let userId = newBlog.author;

    let author = await userFacade.findById(userId);
    let id = author._id;
    console.log(author);

    let blog = await blogFacade.addLocationBlog(newBlog.info, newBlog.pos.longitude, newBlog.pos.latitude, id)
    let blogjson = res.json(blog)
    res.render('blog', {
      title: 'blog',
      blog: blogjson
    })
  } catch (err) {
    next(err);
  }
});
router.get('/blog/:_id', async function (req, res, next) {

  let blog = await blogFacade.findById(req.params._id);
  let blogjson = res.json(blog);

  res.render('blog', {
    title: 'blog',
    blog: blogjson

  })

});

// Like location blog.
router.put("/blog/:id", async function (req, res, next) {
  await blogFacade.likeLocationBlog(req.params.id, req.body.likedBy);
  let blog = await blogFacade.findLocationBlogInfo("Cool blog")
  let blogjson = res.json(blog);

  res.render('blog', {
    title: 'blog',
    blog: blogjson

  })

});


module.exports = router;
