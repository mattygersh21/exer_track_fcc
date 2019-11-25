const express = require('express');
const router = express.Router();
const Member = require('../models/members');
const Activity = require('../models/activities');


router.post('/add', (req, res, next) => {
  Member.findById(req.body.userId, (error, data) => {
    console.log("The add activities endpoint is connected");
  
  const activity = new Activity(req.body);
  if(req.body.date === "") {
    activity.date = Date.now();
  } else {
    activity.date = req.body.date;
  }
  activity.username = data.username;
  console.log(activity);
  // activity.save((error, data) => {
  //   data = data.toObject()
  //   data._id = data.userId
  //   });
  activity.save()
  console.log(activity);
  res.json({
    message: "The add activities endpoint is connected",
    activity
  });
  });
  
})


module.exports = router;