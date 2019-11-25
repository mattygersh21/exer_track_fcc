const express = require('express');
const router = express.Router();
const Member = require('../models/members');
const Activity = require('../models/activities');

router.get('/log', (req, res, next) => {
  console.log("The /api/exercise/log route is connected.")


// The query keyword must be used as the 
  const finalDate = new Date(req.query.to) == "Invalid Date" ? new Date() :  new Date(req.query.to);
  const beginDate = new Date(req.query.from) == "Invalid Date" ? new Date(0) : new Date(req.query.from);
  console.log(beginDate);
  
  Member.findById(req.query.userId, (error, dataMember) => {
//   This will be a query chain. Callback handled later in .exec
    Activity.find({
      userId: req.query.userId,
      date: {
        $lte: finalDate,
        $gte: beginDate
      }
    })
      .limit(parseInt(req.query.limit))
      .sort( {date: 1} )
      .exec((error, dataActivity) => {
        const username = dataMember.username;
        const _id = req.query.userId;
        const from = beginDate;
        const to = finalDate;
        const logArr = dataActivity.map(entry => ({
          description: entry.description,
          duration: entry.duration,
          date: entry.date
        }))
        const count = logArr.length;
        res.json({
          message0: "The /api/exercise/log route is connected.",
          username: username,
          _id: _id,
          from: from,
          to: to,
          logArr: logArr,
          count: count
        })
      })
  });

});

module.exports = router;