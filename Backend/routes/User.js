const express = require("express");
const { getUser, addUser, deleteUserByEmail, login } = require("../controllers/User");

const router = express.Router();

router.get("/", getUser);
router.post("/", addUser);
router.post("/login", login);
router.delete("/", deleteUserByEmail);

module.exports = router;
