import { connectToCluster } from "./StudentCrud.js";

// 1. Write a MongoDB query to display all the documents in the collection restaurants.
async function findAllRestaurants(collection){
  return await collection.find({}).toArray();
}

//2. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine for all the documents in the collection restaurant.
// 3. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine, but exclude the field _id for all the documents in the collection restaurant.

// 4. Write a MongoDB query to display the fields restaurant_id, name, borough and zip code, but exclude the field _id for all the documents in the collection restaurant



async function displaySelectedRestaurantField(collection, selectedfields){
return await collection.find({},{projection:selectedfields}).limit(3).toArray()
}

//5.  Write a MongoDB query to display all the restaurant which is in the borough Bronx.
// 6. Write a MongoDB query to display the first 5 restaurant which is in the borough Bronx.
// 7.Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx.
// 8. Write a MongoDB query to find the restaurants who achieved a score more than 90.
// 9. Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100.
//10. Write a MongoDB query to find the restaurants which locate in latitude value less than -95.754168.

async function findByBorough(collection , borough) {
    return await collection.find({borough}).skip(5).limit(5).toArray()
}

async function findByScore(collection,score){
    return await collection.find({"address.coord":{$lt:-95.754168}}).toArray()
}
//11. Write a MongoDB query to find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and latitude less than -65.754168.


export async function executeRestaurantDBCrudOperations(){
    const uri = process.env.DB_URI;
    let mongoClient;
    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('sample_restaurants');
        console.log('connected to datbase',db.databaseName);
        const collection = db.collection('restaurants');
        // console.log(await findAllRestaurants(collection))
        // console.log(await displaySelectedRestaurantField(collection,{"restaurant_id":1, "name":1,'cuisine':1,"borough":1,"_id":0}))

        // console.log(await displaySelectedRestaurantField(collection,{"restaurant_id":1, "name":1,"borough":1,"zipCode":1,"_id":0}))

        // console.log(await findByBorough(collection, 'Bronx'))

        console.log(await findByScore(collection, 90))

    } finally {
        await mongoClient.close()
    }
}