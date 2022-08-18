const express = require('express');
const router = express.Router();
const db = require('../mock-db/partizip-i');

/* GET users listing. */



router.get('/', function(req, res, next) {
  res.render('pages/partizip-i.ejs', { 
      words: db
  })
  console.log(db.words)
});

module.exports = router;
