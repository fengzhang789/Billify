var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config({path: '../.env'});
const fetchGoogleAPI = require('./health_api')
const port = 5000
const findInDB = require('./csv_parser')

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
  try {
    const inputString = req.body.data;
    const data = await fetchGoogleAPI(inputString)
    console.log(data[0].text.content)
    var dbData = await findInDB("title",  data[0].text.content, null);

    var returnData = [data, dbData]
    console.log(returnData)
    res.json(returnData);
  } catch (e) {
    console.log(e)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;