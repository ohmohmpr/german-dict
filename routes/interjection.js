const express = require('express');
const router = express.Router();
const db = require('../mock-db/interjection');

/* GET users listing. */



router.get('/', function(req, res, next) {
  res.render('pages/interjection.ejs', { 
      words: db
  })
  console.log(db.words)
});

module.exports = router;
