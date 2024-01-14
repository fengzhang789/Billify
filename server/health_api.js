const dotenv = require('dotenv');
const path = require('path')
const envFilePath = path.resolve(__dirname, '..', '.env');
dotenv.config({ path: envFilePath });
const LOCATION = "northamerica-northeast1"
const PROJECT_KEY = process.env.CLOUD_KEY

var requestBody = {
    "documentContent": "Ms. kar is a 47 year old African American female with Crohn's Disease, DM, and HTN who presented to the ED after two days of severe abdominal pain, nausea, vomiting, and diarrhea. She stated that on Wednesday evening after being in her usual state of health she began to experience sharp lower abdominal pain that radiated throughout all four quadrants. The pain waxed and waned and was about a 4/10 and more intense than the chronic abdominal pain episodes she experiences periodically from her Crohn’s disease. The pain was sudden and she did not take any medications to alleviate the discomfort. The abdominal pain was quickly followed by two episodes of partial diarrhea and soft stool that was tan in color with no signs of blood. Her abdominal pain continued and she developed nausea and then vomited six times that evening before going to sleep. Overnight her abdominal pain worsened and she stayed in bed for most of the day on Thursday. She had nausea again all day but had no other episodes of diarrhea or vomiting that day and did not eat anything for fear of vomiting. She was able to drink water and keep it down. By late Thursday night, her pain had intensified to a 10/10 and she called 911 and was brought to the ER by ambulance from her home in Burlington."
  }

requestBody = JSON.stringify(requestBody)

// const cred = process.env.GOOGLE_CLOUD_HEALTHCARE_API.private_key
const cred = `ya29.a0AfB_byDuQQQjfo7KwEV5fUSx4LWuhEwdhmuEbEmnKeam3_Bhe5tuflgQ0Bks-bfdgfolKRhcjoKUAtssAtUVVkX0ycSvs2B6Lt-gyRqi3UoGskYpIuIh7fBdGiQW7KmsbEOaV1IvFRAYZOc1wYS1zCK6S5gidDOWyo-w7VG0EQaCgYKAXsSARASFQHGX2MixxE2ZRYqbeC0yEDAGacgeg0177`
const uri = `https://healthcare.googleapis.com/v1/projects/key-prism-411223/locations/northamerica-northeast1/services/nlp:analyzeEntities`
const data = process.env.GOOGLE_CLOUD_HEALTHCARE_API;

var header = {
    'Authorization': `Bearer ${cred}`,
};  


// REQUEST TO API 
fetch(uri, {
    method: 'POST',
    headers: header,
    body: requestBody,
}).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))