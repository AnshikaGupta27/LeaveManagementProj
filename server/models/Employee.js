import mongoose from "mongoose";
const { Schema } = mongoose;

const employeeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  employeeId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  gender: { type: String },
  department: {
    type: String,
    enum: ["HR", "IT", "Finance"], 
    required: true
  },
  
  designation: { type: String },
  salary: { type: Number },
  employmentStatus: {
    type: String,
    enum: ["active", "inactive", "terminated", "resigned", "retired", "notice", "freelancer"],
  },
  joiningDate: { type: Date },
  lastWorkingDay: { type: Date },
  resignationDate: { type: Date },
  reasonForSeparation: { type: String },
  noticePeriod: { type: String },
  tenureStart: { type: Date },
  tenureEnd: { type: Date },
  fnfDate: { type: Date },
  fnfStatus: { type: String, enum: ["completed", "pending"] },
  remark: { type: String },
  contractStart: { type: Date },
  contractEnd: { type: Date },
  contractDuration: { type: String },
  project: { type: String },
  clientName: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;