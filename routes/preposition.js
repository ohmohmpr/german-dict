const express = require('express');
const router = express.Router();
const db = require('../mock-db/preposition');

/* GET users listing. */



router.get('/', function(req, res, next) {
  res.render('pages/preposition.ejs', { 
      words: db
  })
  console.log(db.words)
});

module.exports = router;
