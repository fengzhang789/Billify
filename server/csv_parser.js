const { medical } = require('./database.js')
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

// // ONLY RUN THIS FILE ONCE!
// fs.createReadStream('../SOB Data/ALL_SOB_DATA_NEW.csv')
//     .pipe(csv())
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//         console.log(results);

//     results.forEach(item => {
//         var medicalData = new medical({
//             number: item.Number,
//             specialty: item.Specialty,
//             title: item.Title,
//             anes: item.Anes,
//             asset: item.Asst,
//             fee: item.Fee,
//         })
    
//         medicalData.save()
//             .then(res => console.log('saved'))
//             .catch(err => console.log(err))
//     })
// });


// medical.find({ title: "Mandatory Special Necessities Benefit Request Fgorm" }, )