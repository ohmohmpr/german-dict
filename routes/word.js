const express = require('express');
const router = express.Router();
const db = require('./../db-mock.js');

/* GET users listing. */
const dictionary = [
    { 
        artikel: "die", 
        wort: "wand",                 
        english_sentence: "The picture is on the wall.",                 
        german_sentence: "Das Bild hängt an der Wand."                 
    },
    { 
        artikel: "das", 
        wort: "Aushilfe",                 
        english_sentence: "We're looking for a temp.",                 
        german_sentence: "Wir suchen eine Aushilfe."                 
    }
]



router.get('/', function(req, res, next) {
  res.render('word.ejs', { result: dictionary })
});

module.exports = router;
