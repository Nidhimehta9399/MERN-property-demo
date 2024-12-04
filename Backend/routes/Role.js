const express = require("express");
const { getRoles, addRoles } = require("../controllers/Role");

const router = express.Router();

router.get("/", getRoles);
router.post("/", addRoles);

module.exports = router;
