const express = require('express');
const router = express.Router();
const db = require('../../services/db');

/* GET quotes listing. */
router.get('/', async function(request, response, next) {
  try {
    quitJederAlle = await db.getJederAlle();
    response.render('pronomen/getJederAlle.ejs', { 
      quitJederAlle: quitJederAlle
    })
  } 
  catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
});


module.exports = router;