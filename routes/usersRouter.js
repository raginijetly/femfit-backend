const { Router } = require("express");
const { saveOnboardingAnswers, updateOnboardingAnswers, getOnboardingQuestion, updateDailyMood } = require("../controllers/usersController");
const { authenticateToken } = require("../middleware/authMiddleware");

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.json({ status: 200, message: "Test User Route!" });
});

userRouter.post("/onboarding-answers", authenticateToken, saveOnboardingAnswers);
userRouter.put("/onboarding-answers", authenticateToken, updateOnboardingAnswers);
userRouter.get("/onboarding-questions", authenticateToken, getOnboardingQuestion);
userRouter.put("/update-mood", authenticateToken, updateDailyMood);

module.exports = userRouter;
