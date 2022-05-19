var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');
const wordRouter = require('./routes/word');
const quotesRouter = require('./routes/quotes');
const adjectiveRouter = require('./routes/adjective');
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

const relativeClauseRouter = require('./routes/relative-clause');
const connectorsRouter = require('./routes/connectors');
const gutGesagtRouter = require('./routes/gut-gesagt');

const app = express()
const port = 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/word', wordRouter);
app.use('/adjective', adjectiveRouter);
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

app.use('/connectors', connectorsRouter);
app.use('/gut-gesagt', gutGesagtRouter);
app.use('/relative-clause', relativeClauseRouter);

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
