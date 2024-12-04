const Role = require("../models/Role");

const getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    return res.status(200).json(roles);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const addRoles = async (req, res) => {
  try {
    const new_role = new Role(req.body);
    new_role.save();
    res.status(201).json({ message: "roles added..." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getRoles, addRoles };
