const express = require('express')
require('dotenv').config()
const connectDB = require('./db/db.connect')
const cloudinary = require('cloudinary')
const cors = require('cors')
const multer = require('multer')
const Image = require('./models/images.model')


const app = express()
app.use(cors({
  origin:"*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
}); 


app.get('/health', async (req, res) => {
  try {
    const info =  await cloudinary.api.ping();
    res.json({ message: "server is healthy" , info });
  } catch (error) {
    res.status(500).json({ message: "server is unhealthy", error: error.message });
  }
});


app.get('/', (req, res) => {
  res.json({ message: "file upload server running" })
})


const storage = multer({ storage: multer.diskStorage({}) })
const upload = storage.single('file');

app.post('/upload', upload, async (req, res) => {
  try {
    const  file  = req.file;
    console.log(file)
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" })
    }
    // upload file to cloudinary
    const result = await cloudinary.uploader.upload(file.path, { folder: 'uploads' })

    console.log(result)

    const image = new Image({
      imageUrl: result.secure_url,
    })
    const savedImage = await image.save();
    console.log('savedImage',savedImage);

    res.status(200).json(
      { message: "File uploaded successfully", url: result.secure_url }
    )
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "File upload failed", error: error.message })
  }
});


app.get('/images', async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch images", error: error.message });
  }
});



const PORT = process.env.PORT || 3000;



async function startServer() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
  });
}

startServer();
