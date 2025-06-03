const express = require('express');
const upload = require('./upload');
const fs = require('fs');
const path = require('path');

const app = express();

app.set('view engine','ejs')
app.use(express.static('public'))
app.use('/uploads', express.static('uploads')) // Make uploads directory accessible
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    // Read files from uploads directory
    fs.readdir('uploads', (err, files) => {
        if (err) {
            return res.render('index', { files: [] });
        }
        
        // Filter for image files only
        const imageFiles = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
        });
        
        res.render('index', { files: imageFiles });
    });
})

app.post('/upload', upload.single('file'), (req,res) => {
      res.redirect('/')
})




const PORT = 3000;

app.listen(PORT, () => {
    console.log(`file server started`)
})
