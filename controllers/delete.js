import manageStudents from "../models/manageStudents.js";

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await manageStudents.find((student) => student.id === id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    const index = manageStudents.indexOf(student);
    manageStudents.splice(index, 1);
    return res.status(200).json({
      message: "Student deleted successfully",
      status: 200,
      success: true,
      data: manageStudents,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
      error: true,
      status: 400,
    });
  }
};

export default remove;
