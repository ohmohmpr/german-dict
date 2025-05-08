const express = require('express');
const router = express.Router();
const db = require('../../services/db');

/* GET quotes listing. */
router.get('/', async function(request, response, next) {
  try {
    quitJemandNiemand = await db.getJemandNiemand();
    response.render('pronomen/getJemandNiemand.ejs', { 
      quitJemandNiemand: quitJemandNiemand
    })
  } 
  catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
});


module.exports = router;