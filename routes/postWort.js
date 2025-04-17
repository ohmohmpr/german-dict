const express = require('express');
const router = express.Router();
const db = require('../services/db');

/* POST quotes listing. */
router.post('/', async function(request, response, next) {
  try {
    response.json(await db.postWort(request.body));
    // console.log(request.body)
    // response.json(request.body)
  } 
  catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
});

module.exports = router;