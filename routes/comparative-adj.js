const express = require('express');
const router = express.Router();
const db = require('../mock-db/comparative-adj');

/* GET users listing. */



router.get('/', function(req, res, next) {
  res.render('pages/comparative-adj.ejs', { 
      words: db
  })
  console.log(db.comparative_adj)
});

module.exports = router;
