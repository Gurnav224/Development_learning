const multer = require('multer')
const fs = require('fs')

// Ensure uploads directory exists
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads')
}

const stroage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, 'uploads/')
    },
    filename:(req,file,cb) => {
        cb(null, Date.now() + '-' +file.originalname)
    }
})

const upload = multer({storage:stroage});


module.exports = upload;
