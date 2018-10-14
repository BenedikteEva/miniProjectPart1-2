var mongoose = require('mongoose');
require("../dbSetup.js")();
var users = require('../models/User.js');
var User = mongoose.model("User", users.userSchema);
var locblogs = require('../models/LocationBlog.js');
var LocBlog= mongoose.model("LocationBlog", locblogs.locationBlogSchema);


function addLocationBlog (info,longitude, lattitude, author){
  


  
    let position= {longitude:longitude, latitude:lattitude};
let locblogDetail= {info:info,pos:position, author:author, likedBy:author._id};
var blog = new LocBlog(locblogDetail);

return blog.save();
}
async function likeLocationBlog(blogid, likedbyid){

   const likedList=[];
  
  await LocBlog.findOne({ _id: blogid}).select('likedBy').exec(function (err,res){
  
    likedList.push(likedbyid)
  res.likedBy.forEach(element => {
    likedList.push(element);
  });  LocBlog.updateOne({ _id: blogid }, { $set: { likedBy: likedList }}).exec();
   
  });

  


    
}

module.exports={addLocationBlog:addLocationBlog,likeLocationBlog:likeLocationBlog}