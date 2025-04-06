require("dotenv").config();
const fs = require("fs");
const logError = require("../errorLogger");

const filePath = process.env.FILE_PATH;

function checkAndCreateFile(filePath) {
  if (!filePath) {
    console.log("file path is not defined");
    return;
  }

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if(err){
        fs.writeFile(filePath, "Sample Text", (writeErr) => {
            if(writeErr){
                logError(`Error ceating file , ${writeErr}`)
            }
            else{
                console.log('file created successfully')
            }
        })
    }
    else{
        console.log('file already exist')
    }
  });
}

checkAndCreateFile(filePath);
