const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middleware/authMiddleware");
const User = require("../models/Users");
const { differenceInDays } = require("date-fns");

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

router.get("/home", authenticateToken, async (req, res) => {
  const user = await User.findById(req.user.id);

  const retValue = {
    cycleDay: 1,
    cyclePhase: "unknown",
    nextPhaseIn: -1,
    cyclePercentage: 0,
    cycleLength: 28, // Default cycle length
  };

  if (
    !!user.onboardingAnswers.lastPeriod &&
    user.onboardingAnswers.lastPeriod != "idk"
  ) {
    const daysSincePeriod = differenceInDays(
      new Date(),
      new Date(user.onboardingAnswers.lastPeriod)
    );
    const cycleLength = 28;

    // Assume a 28-day cycle for demo purposes
    const cycleDayNum = (daysSincePeriod % cycleLength) + 1;
    retValue.cycleDay = cycleDayNum;

    // Determine cycle phase
    let phase = "";
    let daysUntilNextPhase = 0;

    if (cycleDayNum <= 5) {
      phase = "menstruation";
      daysUntilNextPhase = 6 - cycleDayNum;
    } else if (cycleDayNum <= 13) {
      phase = "follicular";
      daysUntilNextPhase = 14 - cycleDayNum;
    } else if (cycleDayNum <= 16) {
      phase = "ovulation";
      daysUntilNextPhase = 17 - cycleDayNum;
    } else {
      phase = "luteal";
      daysUntilNextPhase = 29 - cycleDayNum;
    }

    retValue.cyclePhase = phase;
    retValue.nextPhaseIn = daysUntilNextPhase;
    retValue.cyclePercentage = Math.round((cycleDayNum / 28) * 100);
    retValue.cycleLength = cycleLength;
  }

  res.json({
    status: 200,
    message: "Home API is working",
    data: { user, userInfo: retValue },
  });
});

module.exports = router;
