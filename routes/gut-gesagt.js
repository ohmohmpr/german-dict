const express = require('express');
const router = express.Router();
const db = require('../mock-db/gut-gesagt');

/* GET users listing. */



router.get('/', function(req, res, next) {
  res.render('pages/gut-gesagt.ejs', { 
      words: db
  })
  console.log(db.words)
});

module.exports = router;
