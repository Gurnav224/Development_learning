const StudentSchema = new mongoose.Schema({
    registrationNumber: String,
    studentId: String,
    StudentName: String,
    studentProfileImgUrl: String,
    emergencyContact: Number,
    standard: String,
    fatherOrGaurdian: String,
  });
  
  const Student = mongoose.model("Student", StudentSchema);
  
  module.exports = Student;