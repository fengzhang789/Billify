const vision = require('@google-cloud/vision');
const path = require('path');
const dotenv = require('dotenv');

const envFilePath = path.resolve(__dirname, '..', '.env');
dotenv.config({ path: envFilePath });

const client_email = process.env.GCV_CLIENT_EMAIL;
const private_key = process.env.GCV_PRIVATE_KEY;

console.log(client_email)

const CREDENTIALS = JSON.parse(JSON.stringify({
    "private_key": private_key,
    "client_email": client_email,
}));

const CONFIG = {
    credentials: {
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email
    }
}

// Creates a client
const client = new vision.ImageAnnotatorClient(CONFIG);

const fileNameEx = '../handwriting.png';

async function readWords(fileName) {
    // Performs text detection on the local file
    try {
        const [result] = await client.textDetection(fileName);
        const detections = result.textAnnotations;
        console.log('Text:');
        console.log(detections[0].description);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

module.exports = readWords;
