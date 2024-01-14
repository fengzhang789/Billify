const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

axios.get('https://www.dr-bill.ca/ohip_billing_codes') 
    .then(({ data }) => {
        const $ = cheerio.load(data);

        const billingLinks = $("a").map((index, value) => {
            const $link = $(value).attr("href");
            return {'link': $link};
        }) 
        .toArray()
        .filter(item => item.link && item.link.startsWith('https://www.dr-bill.ca/ohip_billing_codes/specialty/'));

        // Convert the data to CSV format
        const csvData = billingLinks.map(item => `${item.link}`).join('\n');

        // Write the CSV data to a file
        fs.writeFileSync('output.csv', csvData, 'utf-8');

        console.log('CSV file created: output.csv');
    })
    .catch(error => {
        console.error('Error:', error.message);
    });