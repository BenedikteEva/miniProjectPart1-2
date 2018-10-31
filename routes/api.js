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
    let userjson = res.json(user);
    res.render(userjson);

  } catch (err) {
    next();
  }
});

// New user. 
router.post('/user/', async function (req, res, next) {
  try {
    const newUser = req.body;
    await userFacade.addUser(newUser.firstName, newUser.lastName, newUser.userName, newUser.password, newUser.email, newUser.type, newUser.company, newUser.companyUrl);
    res.send('user added.')

    // Skal måske bruges senere i view, når der oprettes en bruger.
    /* res.render('user', {
      title: 'Created user',
      message: 'succesfully created',
    }) */

  } catch (err) {
    next(err);
  }
});

// add job to user. Har ikke testet den. Bo
router.put('/user/:id', async function (req, res, next) {
  // console.log('req.body.type' + req.body.type + req.body.company + req.body.companyUrl + req.params.id)
  let userwithnewjob = await userFacade.addJobToUser(req.params.id, req.body.type, req.body.company, req.body.companyUrl);
  // console.log('userwithnewjob' + userwithnewjob)

  let userjson = res.json(userwithnewjob)
  userwithnewjob.save((err, user, done) => {
    if (err) {
      res.send(err);
    } else { //If no errors, send it back to the client
      res.render('user', {

        message: userjson
      });
    }
  });
});

// Update user. VIRKER IKKE!
router.put("/update_user/", async function (req, res, next) {
  try {
    user = req.body;
    console.log(user);

    let updatedUser = await userFacade.updateUser(user);

    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
});

// VIRKER IKKE??? 404?
router.delete('/delete_user/:id', async function (req, res, next) {
  try {
    await userFacade.deleteUser(req.params.id);
    res.send('User deleted.');
  } catch(err) {
    next(err);
  }
  
  // Måske bruges senere.
  /* res.render('user', {
    title: 'Deleted user',
    user: 'user has succesfully been deleted',
  })
 */
});

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
