const getMedicalDefinition = require('./dictionary_api.js')
const dotenv = require('dotenv');
const path = require('path')
const envFilePath = path.resolve(__dirname, '..', '.env');
dotenv.config({ path: envFilePath });
const LOCATION = "northamerica-northeast1"

const cred = `ya29.a0AfB_byDs14_AuyyUHNFGc_jQnG_iBsv_qSQr5o4-TQk-i-KSZUDxsEo3-fOuXFpHQu8DEW-SN6HFz4PG10AZFRAOBdTNYdpCW4ilmX5oXhGBhXXYBoRPZ6Mzk4bIUa1Tt0HpFqiLWKZtPp8NoUZBrOH_aZHuiGCQkXuy5iqJLeIaCgYKAcISARASFQHGX2MidJ2he07SpstcHRIq65cYJg0178`
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
        return (item.type === "MEDICAL_DEVICE" || item.type === "MEDICINE" || item.type === "PROCEDURE");
    })

    return entityMentions;
}


module.exports = fetchGoogleAPI;