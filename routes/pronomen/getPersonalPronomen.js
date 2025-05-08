const express = require('express');
const router = express.Router();
const db = require('../../services/db');

/* GET quotes listing. */
router.get('/', async function(request, response, next) {
  try {
    quizPersonalPronomen = await db.queryPersonalPronomen();
    response.render('pronomen/getPersonalPronomen.ejs', { 
      quizPersonalPronomen: quizPersonalPronomen
    })
  } 
  catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
});


module.exports = router;