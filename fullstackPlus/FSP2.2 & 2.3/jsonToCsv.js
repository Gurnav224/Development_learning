const fs = require('fs');
const { Parser } = require('json2csv');
const path = require('path');

const filePath = path.join(__dirname , "data.json");


try {
    const jsonData = fs.readFileSync(filePath, "utf-8");

    const data = JSON.parse(jsonData);

    // create new csv parser
    const json2CsvParser = new Parser();

    const csv = json2CsvParser.parse(data);

    // write the csv data to file

    const csvfilePath = path.join(__dirname, "convertedData.csv");

    fs.writeFileSync(csvfilePath, csv);

    console.log('json to csv converted successfully')

} catch (error) {
    console.error('error to converting json to csv')
}