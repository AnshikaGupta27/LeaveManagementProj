import Employee from "../models/Employee.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

// Add new employee
const addEmployee = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      employeeId,
      gender,
      department, // ✅ now a string like "HR", "Engineering", etc.
      designation,
      salary,
      employmentStatus,
      joiningDate,
      lastWorkingDay,
      resignationDate,
      reasonForSeparation,
      noticePeriod,
      tenureStart,
      tenureEnd,
      fnfDate,
      fnfStatus,
      remark,
      contractStart,
      contractEnd,
      contractDuration,
      project,
      clientName,
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, error: "User already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Set profile image based on gender
    let profileImage = "/uploads/default.png";
    if (gender === "female") {
      profileImage = "/uploads/female.png";
    } else if (gender === "male") {
      profileImage = "/uploads/male.png";
    }

    // Create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: "employee",
      profileImage,
    });
    const savedUser = await newUser.save();

    // Create employee
    const newEmployee = new Employee({
      userId: savedUser._id,
      employeeId,
      name,
      email,
      password: hashedPassword,
      gender,
      department, // ✅ now stored as string directly
      designation,
      salary,
      employmentStatus,
      joiningDate,
      lastWorkingDay,
      resignationDate,
      reasonForSeparation,
      noticePeriod,
      tenureStart,
      tenureEnd,
      fnfDate,
      fnfStatus,
      remark,
      contractStart,
      contractEnd,
      contractDuration,
      project,
      clientName,
    });

    await newEmployee.save();

    return res.status(201).json({ success: true, message: "Employee added successfully" });
  } catch (error) {
    console.error("Error adding employee:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

export { addEmployee };
