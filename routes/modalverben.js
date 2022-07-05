const express = require('express');
const router = express.Router();
const db = require('../mock-db/modalverben');

/* GET users listing. */



router.get('/', function(req, res, next) {
  res.render('pages/modalverben.ejs', { 
      words: db
  })
  console.log(db.words)
});

module.exports = router;
