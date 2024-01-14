async function getMedicalDefinition(word) {
    const apiKey = '513c2f38-de23-4473-babc-46cbec2858d6';
    const baseUrl = "https://www.dictionaryapi.com/api/v3/references/medical/json/";
    const url = `${baseUrl}${word}?key=${apiKey}`;

    var res = await fetch(url)
    res = await res.json()

    if (res.length === 1) {
        return keyInfo(res);
    }
    return getMedicalDefinition(res[0])
}

// Replace 'your-api-key' with your actual Merriam-Webster API key
const word = 'cancer is bad';

getMedicalDefinition(word).then(res => console.log(res))

function keyInfo(result) {
    const shortDef = result[0].shortdef[0];
    return shortDef;
}

module.exports = getMedicalDefinition;