const vision = require('@google-cloud/vision');
const path = require('path');
const dotenv = require('dotenv');

const envFilePath = path.resolve(__dirname, '..', '.env');
dotenv.config({ path: envFilePath });

const client_email = process.env.GCV_CLIENT_EMAIL;
const private_key = process.env.GCV_PRIVATE_KEY;

console.log(client_email)

const CREDENTIALS = JSON.parse(JSON.stringify({
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQD5zQ/ubNLXGW1H\nSeqrYQVV+P5yhJli3WCI68zPp5Ehd7Ethr65bRq3nAoNrDAwwlaDYIPM8syRU9CH\nCl0vLImO3KXT+eNRjq9pqjg+CDNrg2+jBjOrGWVub7nwiEtWenvYFzjz5lYVkJY5\nd0tDctXWMHxBc3zcmnzfvZ75p2QeV10ei0w+VXXpUj20xMB5P4Xw6pD2/hTADQVR\nT15iIL09rksWmetkiiZM98/2wB7uyIFhbrSwhroCjYOxWTB41G+aD2kiK5rkEOCv\n7M2hUhfop/X1lq5+oyDsb0AmCEevLaama81AEMxUHCu0gpxGSGPCTOzGf4NCAmQx\nh/y79FUFAgMBAAECggEAdN4YVv64wYOW2aReUuGoQmmkeWVJ8bQKhuRyxK/ruVGr\nJdaFgnDl8ALjvTPSs+0n1n0gDJGHXXJt+8/AeuKGVL0sI/kj/bMYpAHMIFFr5R/v\n6cBsCd9u0fUZc8wAGyxgpl9u+MTJf3tOnQIPxzWBj5zNdT2XrAnm5DJtnvVOZNak\nC4FkqFNyg+Sn0gab/Vxv3rWqhQX6oQtwDxsipZoWnacXnZOmHSV0yWEv2Fel8YWm\nsozxWjA2IoJqSUszM1TkDaGeBdKd28qefbngoZIKMJ/4nBV6UlMTE78N6GwK95Ap\nkcwn8v/PDM7wtdJoKR4WEhabF7g45vdIL1wCqAEi/QKBgQD/SMIoIIvgLlAi4+Zk\nJYs9kS8pBcO8iene3fedu07f4DtporzdGOjClKlOEeglE6vXbuofGCzMHc1spBQk\nnMbscpwX3Dl4QTcGUfZXuNC7D6LzgzHafbT8jz61O3VChazs/moBlE8eeI9gyjwk\nwFNe0rrMHn8MGCjZhfFMhx1W7wKBgQD6gF41mAvfMZnqVXHTu0ZLZ08N6eSbmVow\nOR76mTREv8PXnqsjNln6Wi84bodrPSl4TwPlds6iUUEQgACvmDjEZmpx6mPBlGTt\nEzl2FpJQXCDccKgNypBvCK8/SKOBxXnvoqHfLp5E4DekNZ52BjwYjApqWFZ+AAJx\nqJbuKJnzSwKBgHsyFpic1EPUtdGQn9+WirKkfNjUMlirSZTHE7cn7HF32dQpt/EP\nE0zLx0SouZoi+xvVJ+Dnnr7GZxtVt27PxePXj2KoYYeaGT7QkQxWYUzUx/OyTX2+\ningTfNSjI/x9XC1mvauTcfcngTHZhtrJgbJSCdl1oiQpCJWo4QDod407AoGBANZJ\nBU4XWOB+z8lzekHDS+io4Sln0VWBo3LpCiUY9WtyF5fVdVRT5DiS+R3u/wyvb1Ap\nV43tSen0VBJHTU7oincHnTsBZIBt7sAW1+q6eEMh7EJmZHwXseIprbAW9TfHs/1Y\nQ9xlRqJoo3BnJbyUrMfa0/YQxzxVycFslF/6f2dtAoGBAODiav29NMGNU+6nfTEE\n6DKJRlRM3eTpsJo4fEFGANMKq0dhT1QUIfZczq9L9cavouhuPdiZpkoSkQUrVsCp\nuDjjhmNsj6bE7xZuQqZweB62O4iZvKiXGDxI9rhLt8/2Ex50irJSRJkHAMV4U16y\nznZX40Hf/wfU8kh7E2XQSqQ4\n-----END PRIVATE KEY-----\n",
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

//readWords(fileNameEx);
