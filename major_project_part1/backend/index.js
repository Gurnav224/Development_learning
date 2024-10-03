const express = require("express");
const connetDB = require("./database/conn");
const {config} = require('dotenv');
const { Product } = require("./models/product.model");
const cors = require('cors');
const Category = require("./models/category.model");



config({path:'./.env'});



const app = express();

app.use(cors({
  origin:"*",
  credentials:true,
  optionsSuccessStatus:200
}))

app.use(express.json())


app.get("/", (req, res) => {
  res.send("ecommerce backend is running");
});



// API => GET ALL THE PRODUCTS 

async function getAllProducts(){
  try {
    const products = await Product.find({});
    return products;
  } catch (error) {
    console.error('failed to get all products from db',error)
  }
}

app.get('/api/products', async (req , res) => {
  try {
    const products = await getAllProducts();

    if(products.length !== 0) {
      res.status(200).json({message:'get all the products',data:{products}})
    }
    else{
      res.status(400).json({error:'no products found'})
    }

  } catch (error) {
    console.error('error getting products',error);
    res.status(500).json({error:'server error'})
  }
})

// API => GET SINGLE PRODUCT

async function getSingleProduct(id){
  try {
    const product = await Product.findById(id);
   return product;
  } catch (error) {
    console.error('failed to get single product',error)
  }
}

app.get('/api/products/:id', async (req , res) => {
  const {id} = req.params;
  try {
    const product  = await getSingleProduct(id);

    if(product){
      res.status(200).json({message:'get product by id',data:{
        product
      }})
    }
    else{
      res.status(400).json({error:'product not found'})
    }
  } catch (error) {
    res.status(500).json({message:'error to get single product'})
  }
})


// API => GET ALL THE CATEGORIES


async function getAllCategories(){
  try {
    const categories = await Category.find();
    return categories
  } catch (error) {
    console.error('error to get Categories',error)
  }
}

app.get('/api/categories',async (req , res) => {
  try {
    const categories = await getAllCategories();
    if(categories.length !== 0 ){
      res.status(200).json({data:{categories}})
    }
    else{
      res.status(400).json({error:'no categories not found'})
    }
  } catch (error) {
    console.error('failed to get categories',error)
    res.status(500).json({error:'server error'})
  }
})


// API => GET CATEGORY BY ID

async function getCategoryById(id){
  try {
    const category = await Category.findById(id);
    return category
  } catch (error) {
    console.error('failed to get category by id',error)
  }
}

app.get('/api/categories/:id' , async (req , res) => {
  const {id} = req.params;
  try {
    const category = await getCategoryById(id);
    if(category){
      res.status(200).json({data:{category}})
    }
    else{
      res.status(400).json({data:{category}})
    }
  } catch (error) {
    console.error('failed to get category by id',error)
    res.status(500).json({error:'server error'})
  }
})


const PORT =  process.env.PORT || 5000

const startServer = async () => {
  try {
    await connetDB()
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
    
  } catch (error) {
    console.error('failed to start the server')
  }
}


startServer()