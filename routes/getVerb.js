const express = require('express');
const router = express.Router();
const db = require('../services/db');

/* GET quotes listing. */
router.get('/', async function(request, response, next) {
  try {
    console.log("request.body", request.query)
    response.json(await db.queryVerb(request));
    // console.log(request.body)
    // response.json(request.body)
  } 
  catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
});


module.exports = router;