import { Schema } from "mongoose";
import mongoose from "mongoose";

const studentSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  middle_name: {
    type: String,
  },
  last_name: {
    type: String,
    required: true,
  },
  class_name: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    required: true,
  },
  roll_no: {
    type: Number,
    required: true,
  },
  address_1: {
    type: String,
    required: true,
  },
  address_2: {
    type: String,
  },
  landmark: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Student", studentSchema);
