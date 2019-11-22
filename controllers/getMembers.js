const express = require('express');
const router = express.Router();
const Member = require('../models/members');

router.get('/users', (req, res, next) => {
  Member.find({}, (error, data) => {
    res.json(data)
  });
});

module.exports = router;