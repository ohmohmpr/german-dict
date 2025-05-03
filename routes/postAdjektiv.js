const express = require('express');
const router = express.Router();
const db = require('../services/db');

/* POST quotes listing. */
router.post('/', async function(request, response, next) {
  try {
    response.json(await db.postAdjektiv(request.body));
  } 
  catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
});

module.exports = router;