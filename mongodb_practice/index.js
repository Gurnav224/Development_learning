
const mongoose = require('mongoose');


const client =  mongoose.connect('mongodb+srv://Gurnav:mongodb@cluster0.l6rke.mongodb.net/?retryWrites=true&w=majority',{dbName:'StudentDB'});

client.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
}); 


// Define a schema for the collection
const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    }
});


// Create a model based on the schema
const Student = mongoose.model('Student', StudentSchema);

// Function to create a new student
async function createStudent(name, age, email, address, skills) {
    const student = new Student({
        name,
        age,
        email,
        address,
        skills
    });

    try {
        const savedStudent = await student.save();
        console.log('Student created:', savedStudent);
    } catch (error) {
        console.error('Error creating student:', error);
    }
}

// createStudent('John Doe', 20, 'john.doe@example.com', '123 Main St', ['JavaScript', 'MongoDB']);



// insert many students
async function createMultipleStudents(students) {
    try {
        const savedStudents = await Student.insertMany(students);
        console.log('Students created:', savedStudents);
    } catch (error) {
        console.error('Error creating students:', error);
    }
}   

const students = [
    { name: 'Alice Smith', age: 22, email: 'alice.smith@example.com', address: '456 Elm St', skills: ['Python', 'Django'] },
    { name: 'Bob Johnson', age: 21, email: 'bob.johnson@example.com', address: '789 Oak St', skills: ['Java', 'Spring'] },
    { name: 'Charlie Brown', age: 23, email: 'charlie.brown@example.com', address: '101 Pine St', skills: ['JavaScript', 'React'] },
    { name: 'David Wilson', age: 24, email: 'david.wilson@example.com', address: '202 Maple St', skills: ['C++', 'Machine Learning'] },
    { name: 'Eve Davis', age: 20, email: 'eve.davis@example.com', address: '303 Birch St', skills: ['Ruby', 'Rails'] },
    { name: 'Frank Miller', age: 22, email: 'frank.miller@example.com', address: '404 Cedar St', skills: ['Go', 'Kubernetes'] },
    { name: 'Grace Lee', age: 21, email: 'grace.lee@example.com', address: '505 Fir St', skills: ['JavaScript', 'Node.js'] },
    { name: 'Hank Taylor', age: 23, email: 'hank.taylor@example.com', address: '606 Spruce St', skills: ['PHP', 'Laravel'] },
    { name: 'Ivy Martinez', age: 20, email: 'ivy.martinez@example.com', address: '707 Willow St', skills: ['Swift', 'iOS'] }
];

// createMultipleStudents(students);



// get all students
async function getAllStudents() {
    try {
        const students = await Student.find();
        console.log('All students:', students);
    } catch (error) {
        console.error('Error fetching students:', error);
    }
}

// getAllStudents();

// find all javacript stack developers

async function findJavaScriptDevelopers() {
    try {
        const jsDevelopers = await Student.find({ skills: 'JavaScript' });
        console.log('JavaScript developers:', jsDevelopers);
    } catch (error) {
        console.error('Error fetching JavaScript developers:', error);
    }
}



// findJavaScriptDevelopers();


// find students with age greater than 21
async function findStudentsOlderThan21() {
    try {
        const students = await Student.find({ age: { $gt: 23 } });
        console.log('Students older than 21:', students);
    } catch (error) {
        console.error('Error fetching students older than 21:', error);
    }
}

// findStudentsOlderThan21();


// update a student's email
async function updateStudentEmail(name, newEmail) {
    try {
        const updatedStudent = await Student.findOneAndUpdate(
            { name },
            { email: newEmail },
            { new: true }
        );
        console.log('Updated student:', updatedStudent);
    } catch (error) {
        console.error('Error updating student email:', error);
    }
}

// updateStudentEmail('Alice Smith', 'alice.newemail@example.com');


// update a student's skills
async function updateStudentSkills(name, newSkills) {
    try {
        const updatedStudent = await Student.findOneAndUpdate(
            { name },
            { skills: newSkills },
            { new: true }
        );
        console.log('Updated student skills:', updatedStudent);
    } catch (error) {
        console.error('Error updating student skills:', error);
    }
}   

 updateStudentSkills('Bob Johnson', ['Java', 'Spring Boot', 'Microservices']);    






/*
 mongoDB CRUD operations: mongoDB provides a set of operations to manage data in collections. The basic CRUD operations are:
CRUD operations in MongoDB refer to the basic operations that can be performed on documents within a collection. These operations are:  


1. Create: Insert a new document into a collection.
2. Read: Retrieve documents from a collection.
3. Update: Modify existing documents in a collection.
4. Delete: Remove documents from a collection.
5. Find: Query documents based on specific criteria.
6. InsertMany: Insert multiple documents at once.
7. FindOneAndUpdate: Find a document and update it in one operation.
8. FindOneAndDelete: Find a document and delete it in one operation.
*/// delete a student by name
async function deleteStudentByName(name) {
    try {
        const deletedStudent = await Student.findOneAndDelete({ name });
        console.log('Deleted student:', deletedStudent);
    } catch (error) {
        console.error('Error deleting student:', error);
    }
}   

deleteStudentByName('Charlie Brown');