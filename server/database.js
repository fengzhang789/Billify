const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

const envFilePath = path.resolve(__dirname, '..', '.env');
dotenv.config({ path: envFilePath });

const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;

// DATABASE CONNECTION
const uri = `mongodb+srv://${username}:${password}@cluster0.rulvrss.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Bind connection to error event for connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const Schema = mongoose.Schema;

const arterySchema = new Schema({
  number: String,
  code: String,
  title: String,
  anes: String,
  asset: String,
  fee: String,
});

// Define and export the model after the connection is established
const artery = mongoose.model('artery', arterySchema);
module.exports = { artery };
