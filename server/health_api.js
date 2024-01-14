const dotenv = require('dotenv');
const path = require('path')
const envFilePath = path.resolve(__dirname, '..', '.env');
dotenv.config({ path: envFilePath });

const data = JSON.parse(process.env.GOOGLE_CLOUD_HEALTHCARE_API);

console.log(data.private_key)