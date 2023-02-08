import Students from "../models/manageStudents.js";

const view = (req, res) => {
  try {
    const { id } = req.params;
    const student = Students.find((student) => student.id === id);
    if (!student) {
      return res.status(404).json({
        status: 404,
        error: "Student not found",
      });
    }
    return res.status(200).json({
      status: 200,
      data: student,
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      error: true,
      success: false,
      message: error.message,
    });
  }
};

export default view;
