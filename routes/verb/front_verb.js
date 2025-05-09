const express = require('express');
const router = express.Router();

router.get('/', async function(request, response, next) {
  try {
    response.render('verb/verb.ejs', {})
  } 
  catch (err) {
    next(err);
  }
});

module.exports = router;