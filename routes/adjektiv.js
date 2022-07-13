const express = require('express');
const router = express.Router();
const db = require('../mock-db/adjektiv');

/* GET users listing. */



router.get('/', function(req, res, next) {
  res.render('pages/adjektiv.ejs', { 
    adjektiv: db
  })
  console.log(db.adjektiv)
});

module.exports = router;
