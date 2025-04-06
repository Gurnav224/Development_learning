require('dotenv').config();

const fs = require('fs');
const path  = require('path');


const directoryPath = path.resolve(process.env.DIRECTORY_PATH);
const thresholdDays = parseInt(process.env.THRESHOLD_DAYS);
const thresholdDate = new Date(Date.now() - thresholdDays * 24 * 60 * 60 * 1000);

console.log(thresholdDate)

fs.readdir(directoryPath, (err, files) => {
    if(err){
        console.error('Error detecting directory ', err)
    }

    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);

        fs.stat(filePath, (err, stats) => {
            if(err){
                return console.error('error getting file stats', err)
            }
            console.log(stats.mtime < thresholdDate)
            if(stats.mtime < thresholdDate){
                fs.unlink(filePath, (err) => {
                    if(err){
                        console.error('error to deleting the file', err)
                    }
                    else{
                        console.log('file successfully deleted', filePath)
                    }
                })
            }
        })
    })
})
