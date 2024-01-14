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


// looking, do not include, limit.


// findInDB finds all the items in the MONGODB database that has fieldname including searchString
const findInDB = async (fieldName, searchString, returnFields) => {
    var queryObj = new Object();
    // Add a regex condition to the queryObj if searchString is provided
    if (searchString) {
        queryObj[fieldName] = { $regex: new RegExp(searchString, 'i') };
    }

    const returnData = await medical.find(queryObj, returnFields).limit(5)
    return returnData;
}

module.exports = findInDB