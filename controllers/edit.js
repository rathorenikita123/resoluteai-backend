import manageStudents from "../models/manageStudents.js";

const edit = (req, res) => {
  try {
    const { id } = req.params;
    const {
      first_name,
      middle_name,
      last_name,
      class_name,
      division,
      roll_no,
      address_1,
      address_2,
      landmark,
      city,
      pincode,
    } = req.body;
    const student = manageStudents.editStudent(
      {
        first_name,
        middle_name,
        last_name,
        class_name,
        division,
        roll_no,
        address_1,
        address_2,
        landmark,
        city,
        pincode,
      },
      id
    );
    return res.status(200).json({
      status: 200,
      success: true,
      message: "Student edited successfully",
      data: student,
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

export default edit;
