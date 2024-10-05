
const fs = require('fs');
const connetDB = require('./database/conn');
const {config} = require('dotenv');
const {Product} = require('./models/product.model');
const { default: mongoose } = require('mongoose');
const Category = require('./models/category.model');

config()

connetDB()

const data = fs.readFileSync('product.json','utf-8');

const productJson = JSON.parse(data);

const categoryData = fs.readFileSync('category.json','utf-8');

const categoryJson = JSON.parse(categoryData);


 const seedDatabase = async () => {
    for(let data of productJson){
        try {
            const newproduct = new Product({
                name:data.name,
                description:data.description,
                thumbnail:data.thumbnail,
                images:data.images,
                price:data.price,
                rating:data.rating,
                category:data.category,
                brand:data.brand
            })
            const savedProduct = await newproduct.save();
    
            console.log('product name',savedProduct.name)
        } catch (error) {
            console.error('error saved product ',error)
        }
     }

    mongoose.connection.close()
 }

//  seedDatabase()


async function seedCategory(){
    try {

        for(let category of categoryJson){
            console.log(category)
            const newCategory = new Category({
                name:category.name,
                description:category.description,
                icon:category.icon,
                subcategories:category.subcategories,
                featuredProducts:category.featuredProducts,
                categoryImgUrl:category.categoryImgUrl
            })
            const savedCategory = await newCategory.save();
            console.log('saved category',savedCategory.name)
        }

        
    } catch (error) {
        console.error('error to seed category',error)
    }
}

seedCategory()