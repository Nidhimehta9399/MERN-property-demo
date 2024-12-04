const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Role = require("../models/Role");
const User = require("../models/User");

const getUser = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteUserByEmail = async (req, res) => {
  const email = req.params.email;
  const users = await User.find();
  const deleteIndex = users.filter((item) => item.email === email);
  if (deleteIndex == -1) {
    return res.status(404).send({ status: false, message: "User not found" });
  }
  users.slice(deleteIndex, 1);
  res.status(204).send({ status: true, message: "delete successfully..." });
};

const addUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Only allow 'admin' role if it's explicitly provided (this could be handled better in production)
    const userRole = role && role === "admin" ? "admin" : "user";

    const user = new User({
      username: username,
      email: email,
      password: bcrypt.hashSync(password, 8),
      role: userRole,
    });

    // Save the user
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token with role information
    const token = jwt.sign({ userId: user._id, role: user.role }, "secret", {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      role: user.role,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { getUser, addUser, deleteUserByEmail, login };
