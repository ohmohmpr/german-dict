const express = require('express');
const router = express.Router();
const db = require('../services/db');

/* POST quotes listing. */
router.post('/', async function(request, response, next) {
  console.log("Error from routes/post");
  try {
    response.json(await db.post(request.body));
    // console.log(request.body)
    // response.json(request.body)
  } 
  catch (err) {
    console.log("Error from routes/post");
    console.error(`Error`, err.message);
    next(err);
  }
});

module.exports = router;