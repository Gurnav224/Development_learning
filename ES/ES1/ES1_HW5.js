let studentsData = [
  {
    name: "Rahul",
    rollNo: 101,
    hindi: 80,
    english: 75,
    maths: 90,
  },
  {
    name: "Amit",
    rollNo: 102,
    hindi: 85,
    english: 70,
    maths: 95,
  },
  {
    name: "Priya",
    rollNo: 103,
    hindi: 78,
    english: 92,
    maths: 87,
  },
];

// add computer marks to each student

const marksForComputer = [88, 92, 95];
const marksForScience = [82, 90, 88];

// function to print the student details;

function printStudentDetails(student) {

 let details = `Name: ${student.name} , Roll No: ${student.rollNo}, Hindi: ${student.hindi}, English: ${student.english}, Maths: ${student.maths}, `
 if(student.computers!==undefined){
  details += `, Computers: ${student.computers}`
 }
 if(student.science !== undefined){
  details += `, Science ${student.science}`
 }

 console.log(details)

}

console.log("\n1.1: students data with computers:");
for (let i = 0; i < studentsData.length; i++) {
  studentsData[i].computers = marksForComputer[i];
  let student = studentsData[i];

  printStudentDetails(student);
}


// add computers marks to each student



// add science marks to each student;

console.log("\n1.2: updated students data with science Marks:");
for (let i = 0; i < studentsData.length; i++) {
  studentsData[i].science = marksForScience[i];
  let student = studentsData[i];
 printStudentDetails(student)
}

let kaveri = {
  name: "Kaveri",
  rollNo: 104,
  hindi: 84,
  english: 88,
  maths: 78,
  computers: 90,
  science: 86,
};

console.log("\n2.1: Kaveris data:");
console.log(kaveri);

console.log("\n2.2: updated student data with kaveri");
studentsData.push(kaveri);

for (let i = 0; i < studentsData.length; i++) {
  let student = studentsData[i];
 printStudentDetails(student)
}


function calculateMarks(student){
  let subjects = Object.keys(student);
  let subjArr = [];

  for(let i=0; i<subjects.length; i++){
    if(subjects[i]!=='name' && subjects[i]!=='rollNo'){
      subjArr.push(subjects[i])
    }

  }

  let totalMarks = 0

  for(let i=0; i<subjArr.length; i++){
   totalMarks = totalMarks+student[subjArr[i]];
   student.totalMarks = totalMarks;
   student.avgMarks = totalMarks/subjArr.length
  }
}


// add total marks to studentsData
console.log("\n2.3: Updated Student Data with Total Marks");
for (let i = 0; i < studentsData.length; i++) {
  

  let student = studentsData[i];

  calculateMarks(student)
  console.log(
    `Name: ${student.name} , Roll No: ${student.rollNo} , Total Marks: ${student.totalMarks}`
  );
}

console.log("\n2.4: Updated Student Data With Average Marks:");

for (let i = 0; i < studentsData.length; i++) {
let student = studentsData[i]
  console.log(
    `Name: ${student.name} , Roll No: ${student.rollNo} , Average Marks: ${student.avgMarks}`
  );
}

function calculateGrade(studentsData) {
  for (let i = 0; i < studentsData.length; i++) {
    let avgMarks = studentsData[i].avgMarks;
    if (avgMarks >= 90 && avgMarks <= 100) {
      studentsData[i].grade = "A";
    } else if (avgMarks >= 80 && avgMarks <= 89) {
      studentsData[i].grade = "B";
    } else if (avgMarks >= 70 && avgMarks <= 79) {
      studentsData[i].grade = "C";
    } else if (avgMarks >= 60 && avgMarks <= 69) {
      studentsData[i].grade = "D";
    } else if (avgMarks >= 50 && avgMarks <= 59) {
      studentsData[i].grade = "E";
    } else {
      studentsData[i].grade = "E";
    }
  }
}

calculateGrade(studentsData);

console.log(`\n`);

for (let i = 0; i < studentsData.length; i++) {
  console.log(`
    =================  Report Card for ${studentsData[i].name} ====================
    Roll No: ${studentsData[i].rollNo}
    -----
    Marks
    -----
    Hindi: ${studentsData[i].hindi}
    English: ${studentsData[i].english}
    Science: ${studentsData[i].science}
    Computer: ${studentsData[i].computers}
    Maths: ${studentsData[i].maths}
    ------
    Total: ${studentsData[i].totalMarks}
    Average: ${studentsData[i].avgMarks}
    Grade: ${studentsData[i].grade}
    ---------- --------- ----------- -----------
    `);
}
