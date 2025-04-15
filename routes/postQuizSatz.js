const express = require('express');
const router = express.Router();
const db = require('../services/db');

/* POST quotes listing. */
router.get('/', async function(request, response, next) {
  try {
    querySätzeFields = await db.querySätzeFields()
    response.render('pages/postQuizSatz.ejs', { 
      querySätzeFields: querySätzeFields
    })
  } 
  catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
});

module.exports = router;