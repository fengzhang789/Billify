const getMedicalDefinition = require('./dictionary_api.js')
const dotenv = require('dotenv');
const path = require('path')
const envFilePath = path.resolve(__dirname, '..', '.env');
dotenv.config({ path: envFilePath });
const LOCATION = "northamerica-northeast1"

const cred = `ya29.a0AfB_byDI2WSEHwmZNLHf-pnHyiAa8TNk64HNhoDqRJuFl-0CoPL4laPKM0IaUK8A_CbEIXtfKQk3ErBA7QaMlYhmy4IcDceKvWruIgVLRjtjJWY3_ToetiqXAG6_2QY-EmY9yo5TvHLN12Or_tOfKPS_3dytVJ69r3uK0zD1LlgaCgYKAcQSARASFQHGX2MiXKxA0DpmpkIq8CdvITF2IA0178`
const uri = `https://healthcare.googleapis.com/v1/projects/key-prism-411223/locations/northamerica-northeast1/services/nlp:analyzeEntities`



// REQUEST TO API 
const fetchGoogleAPI = async (message) => {
    var entityMentions;

    var header = {
        'Authorization': `Bearer ${cred}`,
    };
    var requestBody = {
        "documentContent": message,
    }
    requestBody = JSON.stringify(requestBody)

    // FETCH FUNCTION
    await fetch(uri, {
        method: 'POST',
        headers: header,
        body: requestBody,
    })
        .then(res => res.json())
        .then(data => entityMentions = data.entityMentions)
        .catch(err => console.log(err))
    
    entityMentions = await entityMentions.filter(item => {
        return (item.type === "MEDICAL_DEVICE" || item.type === "MEDICINE" || item.type === "PROCEDURE" || item.type === "ANATOMICAL_STRUCTURE");
    })

    return entityMentions;
}


module.exports = fetchGoogleAPI;