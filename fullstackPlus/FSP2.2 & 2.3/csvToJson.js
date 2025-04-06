const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

// path to the csv file
const csvFilePath = path.join(__dirname, "data.csv");

// an array to store CSV data
const results = [];

//read the csv file
fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end",() => {
    const jsonFilePath = path.join(__dirname, "data.json");
    try {
        fs.writeFileSync(jsonFilePath, JSON.stringify(results, null, 2))
        console.log('csv data converted to json successfully')
    } catch (error) {
        console.error('Error writing the JSON file', error)
    }
  })
.on("error", (err) => {
    console.error("Error reading the csv file ", err)
})