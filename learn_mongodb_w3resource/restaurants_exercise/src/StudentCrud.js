import { MongoClient } from "mongodb";


export async function connectToCluster(uri) {
    let mongoClient;
    try {
        mongoClient =  new MongoClient(uri);
         console.log('Connecting to MongoDB ...');
         await mongoClient.connect();
         console.log('Successfully connected to database');

         return mongoClient
    } catch (error) {
        console.error('failed to connect the database')
        process.exit()
    }
}


async function createStudent(collection) {
     const studentDocument = {
       name: 'John Smith',
       birthdate: new Date(2000, 11, 20),
       address: { street: 'Pike Lane', city: 'Los Angeles', state: 'CA' },
   };

   await collection.insertOne(studentDocument)
}


async function findStudentByName(collection, name){
 return    collection.find(name).toArray()
}

async function updateStudentDetails(collection,name,updateFields){
    await collection.findOneAndUpdate({name:name},{$set:{updateFields}})
}

async function deleteStudentByName(collection, name){
  return  await collection.findOneAndDelete({name})
}

export async function excuteDbCrudOperations(){
    const uri = process.env.DB_URI
    let mongoClient;

    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('school');
        const collection = db.collection('students');

        // console.log('create student');
        // await createStudent(collection)
       const student =  await findStudentByName(collection, {});
       console.log(student)

        console.log('UPDATE Student\'s Birthdate');
        await updateStudentDetails(collection,'John Smith',{ birthdate: new Date(2001, 5, 5) })

          const student2 =  await findStudentByName(collection, {});
       console.log(student2)

       console.log(await deleteStudentByName(collection,'John Smith'))
    } finally{
        await mongoClient.close()
    }
}


