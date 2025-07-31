const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middleware/authMiddleware");

router.get("/workout", authenticateToken, (req, res) => {
  res.json({ status: 200, message: "Workout API is working" });
});

router.get("/logs", authenticateToken, (req, res) => {
  res.json({ status: 200, message: "Logs API is working" });
});

router.get("/nutrition", authenticateToken, (req, res) => {
  res.json({ status: 200, message: "Nutrition API is working" });
});

router.get("/info", authenticateToken, (req, res) => {
  res.json({ status: 200, message: "Info API is working" });
});

router.get("/update", authenticateToken, (req, res) => {
  res.json({ status: 200, message: "Update API is working" });
});

module.exports = router;
