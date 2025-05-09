const express = require('express');
const router = express.Router();
const db = require('../../services/db');

/* GET quotes listing. */
router.get('/', async function(request, response, next) {
  try {
    quizReflexivPronomen = await db.queryReflexivPronomen();
    response.render('pronomen/getReflexivPronomen.ejs', { 
      quizReflexivPronomen: quizReflexivPronomen
    })
  } 
  catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
});


module.exports = router;