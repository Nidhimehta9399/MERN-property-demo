const express = require("express");
const {
  getProperty,
  addProperty,
  deleteProperty,
  editProperty,
  getPropertyByID,
} = require("../controllers/Property");

const authenticate = require("../middleware/authMiddleware");
const requireRole = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/", authenticate, getProperty);
router.post("/", authenticate, requireRole("admin"), addProperty);
router.delete(
  "/:propertyId",
  authenticate,
  requireRole("admin"),
  deleteProperty
);
router.post(
  "/:propertyId",
  authenticate,
  requireRole("admin"),
  getPropertyByID
);
router.patch("/:propertyId", authenticate, requireRole("admin"), editProperty);

module.exports = router;
