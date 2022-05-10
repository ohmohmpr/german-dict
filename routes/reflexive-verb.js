const express = require('express');
const router = express.Router();
const db = require('../mock-db/reflexive-verb');

/* GET users listing. */



router.get('/', function(req, res, next) {
  res.render('pages/reflexive-verb.ejs', { 
      words: db
  })
  console.log(db.reflexive_verb)
});

module.exports = router;
