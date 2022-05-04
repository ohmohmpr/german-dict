const express = require('express');
const router = express.Router();
const db = require('../mock-db/connectors');

/* GET users listing. */



router.get('/', function(req, res, next) {
  res.render('pages/connectors.ejs', { 
      words: db
  })
  console.log(db.words)
});

module.exports = router;
