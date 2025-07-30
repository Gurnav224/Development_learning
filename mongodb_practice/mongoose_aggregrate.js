const mongoose = require('mongoose');
require('dotenv').config();

const client =  mongoose.connect("mongodb://root:example@127.0.0.1:27017/?authSource=admin",{dbName:'ecommerce_db'});

client.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
}); 


const userSchema = new mongoose.Schema({ // Define the User schema
  username: {
    type: String, // Username field will be a String
    required: true, // It is a required field
    unique: true // Each username must be unique
  },
  email: {
    type: String, // Email field will be a String
    required: true, // It is a required field
    unique: true, // Each email must be unique
    lowercase: true, // Store the email in lowercase
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'] // Validate email format
  },
  password: {
    type: String, // Password field will be a String
    required: true, // It is a required field
    minlength: 6 // Password must have at least 6 characters
  },
  createdAt: {
    type: Date, // Creation date field will be a Date
    default: Date.now // Default value is the current date and time
  }
});


const User = mongoose.model('User', userSchema);


const orderSchema = new mongoose.Schema({ // Define the Order schema
  user: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the User model using ObjectId
    ref: 'User', // Mongoose will use the 'User' model for population
    required: true // User is a required field for an order
  },
  products: [{ // Products is an array of subdocuments
    name: {
      type: String, // Product name will be a String
      required: true
    },
    quantity: {
      type: Number, // Product quantity will be a Number
      required: true,
      min: 1 // Quantity must be at least 1
    },
    price: {
      type: Number, // Product price will be a Number
      required: true,
      min: 0 // Price cannot be negative
    }
  }],
  totalAmount: {
    type: Number, // Total amount will be a Number
    required: true,
    min: 0
  },
  status: {
    type: String, // Order status will be a String
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'], // Restrict possible values
    default: 'pending' // Default status is 'pending'
  },
  orderDate: {
    type: Date, // Order date field will be a Date
    default: Date.now // Default value is the current date and time
  }
});


const Order = mongoose.model('Order', orderSchema);






async function  findAllUser() {
   const users = await User.find();

   console.log(users)
}

// findAllUser()


// 💡 “How much money has each user spent in total?”


async function totalSpentByUsersFromProducts() {
  const result = await Order.aggregate([
    { $unwind: "$products" }, // Step 1: break out each product

    {
      $project: {
        user: 1,
        lineTotal: {
          $multiply: ["$products.price", "$products.quantity"]
        }
      }
    }, // Step 2: calculate price × quantity for each product

    {
      $group: {
        _id: "$user",
        totalSpent: { $sum: "$lineTotal" }
      }
    }, // Step 3: group and sum

    {
      $lookup: {
        from: "users",
        localField: "_id",
        foreignField: "_id",
        as: "userInfo"
      }
    }, // Step 4: join with User collection

    { $unwind: "$userInfo" },

    {
      $project: {
        _id: 0,
        username: "$userInfo.username",
        email: "$userInfo.email",
        totalSpent: 1
      }
    }
  ]);

  console.log("📦 Spent per user (from products):", result);
}


// totalSpentByUsersFromProducts()


/*
first you grup it by user , total the amount
*/


const salesSchema = new mongoose.Schema({
    user:String,
    amount:Number
})


const Sales = mongoose.model('sale',salesSchema);


async function insertSalesData(params) {
const inserted =   await Sales.insertMany(
  [{ user: "Aman", amount: 100 },
{ user: "Aman", amount: 150 },
{ user: "Priya", amount: 200 },
{ user: "Priya", amount: 300 }
  ]
)
console.log('inserted data', inserted)
}


// insertSalesData()



async function getSalesData(){
  const sales = await Order.aggregate([
    {$unwind:"$products"},
    {
      $project:{
        user:1,
        lineTotal:{
          $multiply:["$products.price","$products.quantity"]
        }
      }
    },
    {
      $group:{
        _id:"$user",
        totalSpent:{$sum:"$lineTotal"}
      }
    },
    {
      $lookup:{
        from:"users",
        localField:"_id",
        foreignField:"_id",
        as:"userInfo"
      }

    },
    {$unwind:"$userInfo"},
    {
      $project:{
      _id:0,
      username:"$userInfo.username",
      email:"$userInfo.email",
      totalSpent:1
      }

    },
    {$sort:{totalSpent:-1}},
    {$limit:2}
  ])
  console.log('sales user data', sales)
}

// getSalesData()


async function deliveredItem(){
  const order = await Order.aggregate([
    {$match:{status:"shipped"}}
  ]);

  console.log('order ', order)
}


// deliveredItem()

async function quiz(){
  const cancelledOrder = await Order.aggregate([
    {$match:{status:'cancelled'}},
    {$group:{_id:"user",cancelledOrder:{$sum:1}}}
  ])

  console.log('cancel order', cancelledOrder)
}


quiz()