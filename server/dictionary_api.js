import fetch from 'node-fetch';

async function getMedicalDefinition(word) {
    const apiKey = '513c2f38-de23-4473-babc-46cbec2858d6';
    const baseUrl = "https://www.dictionaryapi.com/api/v3/references/medical/json/";
    const url = `${baseUrl}${word}?key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

// Replace 'your-api-key' with your actual Merriam-Webster API key
const word = 'tenofovir';

getMedicalDefinition(word, apiKey)
    .then(result => keyInfo(result))
    .catch(error => console.error(error));

function keyInfo(result) {
    const shortDef = result[0]?.shortdef[0];
    console.log(shortDef);
}