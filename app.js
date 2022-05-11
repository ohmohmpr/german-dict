var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');
const wordRouter = require('./routes/word');
const verbRouter = require('./routes/verb');
const verbGrammarRouter = require('./routes/verb-grammar');
const adjectiveRouter = require('./routes/adjective');
const sentenceRouter = require('./routes/sentence');
const prepositionRouter = require('./routes/preposition');
const wFrageRouter = require('./routes/w-Frage');
const connectorsRouter = require('./routes/connectors');
const reflexiveVerbRouter = require('./routes/reflexive-verb');
const comparativeADJRouter = require('./routes/comparative-adj');

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
app.use('/verb', verbRouter);
app.use('/verb-grammar', verbGrammarRouter);
app.use('/adjective', adjectiveRouter);
app.use('/sentence', sentenceRouter);
app.use('/preposition', prepositionRouter);
app.use('/w-frage', wFrageRouter);
app.use('/connectors', connectorsRouter);
app.use('/reflexive-verb', reflexiveVerbRouter);
app.use('/comparative-adj', comparativeADJRouter);

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
