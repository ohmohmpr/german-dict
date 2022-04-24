const express = require('express');
const router = express.Router();
const db = require('../mock-db/adjective.js');

/* GET users listing. */



router.get('/', function(req, res, next) {
  res.render('pages/adjective.ejs', { 
      words: db
  })
  console.log(db)
});

module.exports = router;
