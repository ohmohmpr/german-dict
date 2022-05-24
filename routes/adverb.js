const express = require('express');
const router = express.Router();
const db = require('../mock-db/adverb');

/* GET users listing. */



router.get('/', function(req, res, next) {
  res.render('pages/adverb.ejs', { 
      adverb: db
  })
  console.log(db.adverb)
});

module.exports = router;
