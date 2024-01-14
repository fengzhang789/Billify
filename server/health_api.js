const getMedicalDefinition = require('./dictionary_api.js')
const dotenv = require('dotenv');
const path = require('path')
const envFilePath = path.resolve(__dirname, '..', '.env');
dotenv.config({ path: envFilePath });
const LOCATION = "northamerica-northeast1"

const cred = `ya29.a0AfB_byB9JP8He8D2ACl3I-uXHimaK6GrYGfjhkydWuBOALotO-oZFtxpwXZqG4NRHhMI3cbjhNOe_EtOQj5OoOpiKulOIUc7f6VZkl0h3771G8-_9u12Yo-ABItXJqveTUjkCQu0v-HtPHB2S_cmpDHqy8sGfm8CV71d6EOlgGQaCgYKAXwSARASFQHGX2MinqERh21qwjBe0hbVZlpFEA0178`
const uri = `https://healthcare.googleapis.com/v1/projects/key-prism-411223/locations/northamerica-northeast1/services/nlp:analyzeEntities`



// REQUEST TO API 
const fetchGoogleAPI = async (message) => {
    var entityMentions;
    var finalReturn = [];

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