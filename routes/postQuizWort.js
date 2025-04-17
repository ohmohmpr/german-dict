const express = require('express');
const router = express.Router();
const db = require('../services/db');

/* POST quotes listing. */
router.get('/', async function(request, response, next) {
  try {
    queryFields = await db.queryFields("", "wörter")
    quizWort = await db.quizWort("", "wörter");
    console.log(quizWort)
    response.render('pages/postQuizWort.ejs', { 
      queryFields: queryFields,
      quizWort: quizWort
    })
  } 
  catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
});

module.exports = router;