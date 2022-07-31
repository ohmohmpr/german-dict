const express = require('express');
const router = express.Router();
const db = require('../mock-db/infinitiv-clause');

router.get('/', function(req, res, next) {
  res.render('pages/infinitiv-clause.ejs', { 
      words: db
  })
  console.log(db.words)
});

module.exports = router;
