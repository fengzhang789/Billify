const { artery } = require('./database.js')
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

// Arteries
fs.createReadStream('../SOB Data/arteries.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results);

    results.forEach(item => {
        var arteryData = new artery({
            number: item.Number,
            code: item.Code,
            title: item.Title,
            anes: item.Anes,
            asset: item.Asst,
            fee: item.Fee,
        })
    
        arteryData.save()
            .then(res => console.log('saved'))
            .catch(err => console.log(err))
    })
});