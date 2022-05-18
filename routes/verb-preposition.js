const express = require('express');
const router = express.Router();
const db = require('../mock-db/verb-preposition');

/* GET users listing. */



router.get('/', function(req, res, next) {
  res.render('pages/verb-preposition.ejs', { 
    verb: db
  })
  console.log(db.verb)
});

module.exports = router;
