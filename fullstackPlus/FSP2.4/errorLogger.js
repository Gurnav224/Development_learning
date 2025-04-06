const fs = require('fs');
const path = require('path');


function logError(message){
    const loggerErrorPath = path.resolve("./logs/error.log");

    fs.appendFile(loggerErrorPath, 
        `${new Date().toISOString()}: ${message} \n`,
        (error) => {
            if(error){
                console.error('failed to log error', error)
            }
        }
    )
}



module.exports = logError;