const express = require('express');
const router = express.Router();
const db = require('../mock-db/word.js');

/* GET users listing. */



router.get('/', function(req, res, next) {
  res.render('word.ejs', { 
      result: db
  })
  console.log(db)
});

module.exports = router;