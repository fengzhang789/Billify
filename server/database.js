const { MongoClient, ServerApiVersion } = require('mongodb');
const path = require('path');
const dotenv = require('dotenv');

// Specify the path to the parent folder
const envFilePath = path.resolve(__dirname, '..', '.env');

// Load environment variables from the file
dotenv.config({ path: envFilePath });

const username = process.env.DATABASE_USERNAME
const password = process.env.DATABASE_PASSWORD

console.log(username)
console.log(password)

const uri = `mongodb+srv://${username}:${password}@cluster0.rulvrss.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);