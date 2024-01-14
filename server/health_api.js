const getMedicalDefinition = require('./dictionary_api.js')
const dotenv = require('dotenv');
const path = require('path')
const envFilePath = path.resolve(__dirname, '..', '.env');
dotenv.config({ path: envFilePath });
const LOCATION = "northamerica-northeast1"

const cred = `ya29.a0AfB_byC-2ZT5Pu1t0IHzSGkIzBo-m7xrvyJmkQBun4xYXygFyUr0wIjxwPMZq_6NkWYZ4FDyMTFbOX20oFR7jtf4dKbhTsYO8otv1dxxTXMGa8jdcd65TR-uGEfUJ4f9ZaLeH9vVGYefCR_KqYKe7ePranM35zZG9BjmL2bpwewaCgYKAewSARASFQHGX2MitvAxkIOvQnwo3jf78zmTIg0178`
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



fetchGoogleAPI(`Ms. ___ is a 47 year old African American female with Crohn's Disease, DM, and HTN who
presented to the ED after two days of severe abdominal pain, nausea, vomiting, and diarrhea. She
stated that on Wednesday evening after being in her usual state of health she began to experience
sharp lower abdominal pain that radiated throughout all four quadrants. The pain waxed and
waned and was about a 4/10 and more intense than the chronic abdominal pain episodes she
experiences periodically from her Crohn’s disease. The pain was sudden and she did not take any
medications to alleviate the discomfort. The abdominal pain was quickly followed by two
episodes of partial diarrhea and soft stool that was tan in color with no signs of blood. Her
abdominal pain continued and she developed nausea and then vomited six times that evening
before going to sleep. Overnight her abdominal pain worsened and she stayed in bed for most of
the day on Thursday. She had nausea again all day but had no other episodes of diarrhea or
vomiting that day and did not eat anything for fear of vomiting. She was able to drink water and
keep it down.`)