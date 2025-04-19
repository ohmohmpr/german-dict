const express = require('express');
const router = express.Router();
const db = require('../services/db');

/* GET quotes listing. */
router.get('/', async function(request, response, next) {
  try {
    quizSatz = await db.quizSätzeverbinden(request);
    response.render('pages/getQuizSätzeverbinden.ejs', { 
      quizSatz: quizSatz
    })
  }
  catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
});


module.exports = router;