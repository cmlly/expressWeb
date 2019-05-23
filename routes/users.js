var express = require('express');
var router = express.Router();

var {mongoose,User} = require('../db');


router.post('/',function(req,res){
  var data = {
      name:req.body.name,
      passward:req.body.passward,
      phone:req.body.phone,
      email:req.body.email
  }
  console.log(data);
  var addUser = new User(data)
  addUser.save()
  res.send(JSON.stringify(data))
})

module.exports = router;
