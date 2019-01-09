var express = require('express');
var router = express.Router();
const userFacade = require('../facades/userFacade');
const loginFacade = require('../facades/loginFacade');
const blogFacade = require('../facades/blogFacade');
require('mongoose').set('debug', true);

/* GET users listing. */
 router.get('/', function (req, res, next) {

  res.render('api', {
    title: "Mini Project Part 1 full stack js api",

  })

  
}); 
/* 
router.get('/session', function (req, res, next) {
  // Update views
  console.log('req'+req.session.views)
  req.session.views = (req.session.views || 0) + 1

  // Write response

  res.json({
    status: 'Success session',
    views: req.session.views
   
  });
 
}) */

// Get all users.
router.get('/users', async function (req, res, next) {
  try {
    let users = await userFacade.getAllUsers();

    res.json({
      status: 'Success',
      data: users
    });

  } catch (err) {
    res.json({
      status: 'Error',
      data: err
    });
  }
});

// Find user by name.
router.get('/user/:userName', async function (req, res, next) {
  try {
    let user = await userFacade.findByUsername(req.params.userName);

    if (user != null) {
      res.json({
        status: 'Success',
        data: user
      });
    } else {
      // In an API, this can also mean that the endpoint is valid but the resource itself does not exist. 
      res.status(404).json({
        status: 'User does not exist',
        data: user
      });
    };

  } catch (err) {
    res.json({
      status: 'Error',
      data: err
    });
  };
});

// Find user by id. Ingen test da vi hele tiden får nyt id, og vi ikke kan bruge async await.
router.get('/user_id/:_id', async function (req, res, next) {
  try {
    let user = await userFacade.findById(req.params._id);

    if (user != null) {
      res.json({
        status: 'Success',
        data: user
      });
    } else {
      // In an API, this can also mean that the endpoint is valid but the resource itself does not exist. 
      res.status(404).json({
        status: 'User does not exist',
        data: user
      });
    };

  } catch (err) {
    res.json({
      status: 'Error',
      data: err
    });
  };
});

// New user. 
router.post('/user', async function (req, res, next) {
  try {
    const newUser = req.body;
    await userFacade.addUser(newUser.firstName, newUser.lastName, newUser.userName, newUser.password, newUser.email, newUser.type, newUser.company, newUser.companyUrl);

    // Returns the new user for test.
    let user = await userFacade.findByUsername(newUser.userName);

    // 201 = created.
    res.status(201).json({
      status: 'Success',
      data: user
    });
  } catch (err) {
    res.json({
      status: 'Error',
      data: err
    });
  };

});

// delete user
router.delete('/user/:_id', async function (req, res, next) {

  const id = req.params._id;

  await userFacade.deleteUser(id);
  try {
    // If user does not exist send a messege to the client.
    if (res.status(404)) {
      res.json({
        status: 'User does not exist.'
      });
    } else {
      res.json({
        status: 'Success'
      });
    };
  } catch (err) {
    res.json({
      status: 'Error',
      data: err
    });
  }});

//    const id = req.params._id;
 // await userFacade.deleteUser(id);

//try {
    // If user does not exist send a messege to the client.
  //  if(res.status(404)) {
    //  res.render('user',{message:'User does not exist.', title:"Deleted"})
    //}else{
   // res.render('user',{message:'User deleted.',title:"Deleted"});
    //}
  //} catch(err) {
    //next(err);
  //}
  


// Skal refaktores.
router.put('/user/:id', async function (req, res, next) {

  let userwithnewjob = await userFacade.addJobToUser(req.params.id, req.body.type, req.body.company, req.body.companyUrl);



  let userjson = res.json(userwithnewjob)
  userwithnewjob.save((err, user, done) => {
    if (err) {
      res.send(err);
    } else { //If no errors, send it back to the client
      res.json(userwithnewjob)
    }
  })

})

// Login route.
router.post('/login', async function (req, res, next) {
  try {
    let loginUser = await loginFacade.login(req.body.userName, req.body.password, req.body.longitude, req.body.latitude, req.body.distance);
    let responseObk = res.json(loginUser)
console.log(responseObk.statusCode)
    // If user or password does not exist send a messege to the client.
    if (res.status(200)) {
      res.render('login', {
        title: 'login',
        friends: 'friends:' + responseObk
      });}
    if (res.status(404)) {
      res.json({
        status:404,
        message: responseObk.message
      });}
      if (res.status(403)) {
        res.json({
          status:403,
          message: responseObk.message
        });
    } else {
      res.render('login', {
        title: 'login',
        friends: 'friends:' + responseObk
      });
    };
  } catch (err) {
    console.log(err)
    res.json({
      message: 'Wrong username.',
      status: 'Error',
      data: err
    });
  };
});


// Get all blogs
router.get("/blogs", async function (req, res, next) {
  try {
    let blogs = await blogFacade.getAllBlogs();
    res.json(blogs);
    next()
    res.render('listofallblogs',{
      title: 'blogs',
      blogs: blogs.map(blog=>{
        blog.info,
        blog.likedByCount
      })
    })

  } catch (err) {
    res.json({
      status: 'Error',
      data: err
    });
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
    res.json({
      status: 'Error',
      data: err
    });
  }
});


router.get('/blog/:_id', async function (req, res, next) {
  try {
    let blog = await blogFacade.findLocationBlog(req.params._id);
    res.json(blog);
  } catch (err) {
    res.json({
      status: 'Error',
      data: err
    });
  };

});


router.put("/like_blog/:id", async function (req, res, next) {

  try {
    await blogFacade.likeLocationBlog(req.params.id, req.body.likedBy);

    let blog = await blogFacade.findLocationBlogInfo("Cool blog")
    res.json(blog);
  } catch (err) {
    res.json({
      status: 'Error',
      data: err
    });
  };
});

module.exports = router;