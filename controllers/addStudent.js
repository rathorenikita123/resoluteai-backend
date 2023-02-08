import Student from "../models/manageStudents.js";

const addStudent = (req, res) => {
  try {
    const CreateStudent = new Student(req.body);

    CreateStudent.save();
    return res.status(201).json({
      status: 201,
      success: true,
      message: "Student added successfully",
      data: new_student,
    });
  } catch (err) {
    return res.status(400).json({
      status: 400,
      success: false,
      error: true,
      message: err.message,
    });
  }
};

export default addStudent;
