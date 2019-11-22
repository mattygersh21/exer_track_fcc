const express = require('express');
const router = express.Router();
const Member = require('../models/members');
const customId = require('custom-id');
const bodyParser = require('body-parser');

router.post('/new-user', (req, res, next) => {
  
  const newCustomId = customId({});
  
  const member = new Member({
    username: req.body.username,
    _id: newCustomId
  });
  member.save();
  
  console.log("An origination point tried to access the post method with API endpoint '/api/exercise/new-user'.");
  console.log("Username " + member.username + " was created with member ID " + member._id + ". Enter this member ID in the userID field when adding your activies to track your activity date in our database!")
  
  res.json({ 
    message0: "The function at API endpoint /api/exercise/new-user is routed correctly.",
    message1: "Username " + member.username + " was created with member ID " + member._id + ". Enter this member ID in the userID field when adding your activies to track your activity in our database!",
    username: member.username,
    _id: member._id
  });
});

router.get('/users', (req, res, next) => {
  Member.find({}, (error, data) => {
    res.json(data)
  });
});

module.exports = router;