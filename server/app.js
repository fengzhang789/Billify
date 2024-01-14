var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config({path: '../.env'});
const fetchGoogleAPI = require('./health_api')
const port = 5000

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/', (req, res) => {
  res.json({message: "hello"})
})

app.post('/api', async (req, res) => {
  const inputString = req.body.data;
  var returnData = await fetchGoogleAPI(inputString)
  res.json(returnData);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;