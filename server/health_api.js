const getMedicalDefinition = require('./dictionary_api.js')
const dotenv = require('dotenv');
const path = require('path')
const envFilePath = path.resolve(__dirname, '..', '.env');
dotenv.config({ path: envFilePath });
const LOCATION = "northamerica-northeast1"

const cred = `ya29.a0AfB_byBcxi791TxTl7SBdT36CEGwKhvgHNfhbVmR3Byyj5DgrOJtZPyJ3uqXkPLK6kTWixwjvsUl1YksZZSJU6rTXrz_r4_4zrc5PTG4ZI6uE8_h9XdxrFhwW_ECaipmS2lEojobBjv1cvcRLtTXD4gzGMRc6D76eVT-FqbVQWMaCgYKAZsSARASFQHGX2Mi0JwCKHAE69XBSQdXvGVuOg0178`
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

    for (var item of entityMentions) {
        var definition = await getMedicalDefinition(item.text.content);
        console.log(definition)
        finalReturn.push({...item, definition: definition});
    }

    console.log(finalReturn);
    return finalReturn
}


module.exports = fetchGoogleAPI;