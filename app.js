var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');
const wordRouter = require('./routes/word');
const adjektivRouter = require('./routes/adjektiv');
const adverbRouter = require('./routes/adverb');
const quotesRouter = require('./routes/quotes');
const artikelRouter = require('./routes/artikel');
const pronomenRouter = require('./routes/pronomen');
const sentenceRouter = require('./routes/sentence');
const prepositionRouter = require('./routes/preposition');
const comparativeADJRouter = require('./routes/comparative-adj');

const wFrageRouter = require('./routes/w-frage');
const interrogativePronounsRouter = require('./routes/interrogative-pronouns');

const verbRouter = require('./routes/verb');
const verbPrepositionRouter = require('./routes/verb-preposition');
const verbGrammarRouter = require('./routes/verb-grammar');
const reflexiveVerbRouter = require('./routes/reflexive-verb');
const konjunktivIIRouter = require('./routes/konjunktiv-ii');
const partizipIRouter = require('./routes/partizip-i');

const gutGesagtRouter = require('./routes/gut-gesagt');
const relativeClauseRouter = require('./routes/relative-clause');
const infinitivClauseRouter = require('./routes/infinitiv-clause');
const connectorsRouter = require('./routes/connectors');

const modalPräteritumRouter = require('./routes/modal-praeteritum');
const modalVerbenRouter = require('./routes/modalverben');
const passivRouter = require('./routes/passiv');
const interjectionRouter = require('./routes/interjection');

const postRouter = require('./routes/post');

const app = express()
const port = 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/word', wordRouter);
app.use('/adjektiv', adjektivRouter);
app.use('/adverb', adverbRouter);
app.use('/artikel', artikelRouter);
app.use('/pronomen', pronomenRouter);
app.use('/sentence', sentenceRouter);
app.use('/preposition', prepositionRouter);
app.use('/comparative-adj', comparativeADJRouter);

app.use('/w-frage', wFrageRouter);
app.use('/interrogative-pronouns', interrogativePronounsRouter);

app.use('/verb', verbRouter);
app.use('/verb-preposition', verbPrepositionRouter);
app.use('/verb-grammar', verbGrammarRouter);
app.use('/reflexive-verb', reflexiveVerbRouter);
app.use('/konjunktiv-ii', konjunktivIIRouter);
app.use('/partizip-i', partizipIRouter);

app.use('/connectors', connectorsRouter);
app.use('/gut-gesagt', gutGesagtRouter);
app.use('/relative-clause', relativeClauseRouter);
app.use('/infinitiv-clause', infinitivClauseRouter);
app.use('/modal-praeteritum', modalPräteritumRouter);
app.use('/modalverben', modalVerbenRouter);
app.use('/passiv', passivRouter);
app.use('/interjection', interjectionRouter);

app.use('/post', postRouter);
app.use('/quotes', quotesRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
