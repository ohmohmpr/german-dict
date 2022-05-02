const express = require('express');
const router = express.Router();
const db = require('../mock-db/w-frage');

/* GET users listing. */



router.get('/', function(req, res, next) {
  res.render('pages/w-frage.ejs', { 
      words: db
  })
  console.log(db.words)
});

module.exports = router;
