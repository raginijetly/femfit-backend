const User = require("../models/Users");
const {
  ONBOARDING_QUESTIONS,
  MOODS,
  MOOD_HISTORY_DAYS,
} = require("../constants");

const saveOnboardingAnswers = async (req, res) => {
  const { onboardingAnswers } = req.body;
  if (!onboardingAnswers || typeof onboardingAnswers !== "object") {
    return res.json({ status: 400, message: "Invalid onboarding answers" });
  }

  const existingUser = await User.findById(req.user.id);
  if (!existingUser)
    return res.json({ status: 404, message: "User not found" });
  if (existingUser.completedOnboarding)
    return res.json({
      status: 200,
      message: "Onboarding already completed",
    });

  const validOnboardingAnswers = {};
  ONBOARDING_QUESTIONS.forEach((q) => {
    if (onboardingAnswers[q.key] !== undefined) {
      validOnboardingAnswers[q.key] = onboardingAnswers[q.key];
    }
  });

  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { onboardingAnswers: validOnboardingAnswers, completedOnboarding: true },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.json({ status: 404, message: "User not found" });
    }

    return res.json({
      status: 200,
      message: "Onboarding answers saved successfully",
      data: {
        answers: user.onboardingAnswers,
        completedOnboarding: user.completedOnboarding,
      },
    });
  } catch (error) {
    console.error("Error saving onboarding answers:", error);
    return res.json({ status: 500, message: "Internal server error" });
  }
};

const updateOnboardingAnswers = async (req, res) => {
  try {
    const { onboardingAnswers } = req.body;
    if (!onboardingAnswers || typeof onboardingAnswers !== "object") {
      return res.json({ status: 400, message: "Invalid onboarding answers" });
    }

    const existingUser = await User.findById(req.user.id);
    if (!existingUser)
      return res.json({ status: 404, message: "User not found" });

    const mergedOnboardingAnswers = {
      ...(existingUser.onboardingAnswers || {}),
      ...onboardingAnswers,
    };

    const validOnboardingAnswers = {};
    ONBOARDING_QUESTIONS.forEach((q) => {
      if (mergedOnboardingAnswers[q.key] !== undefined)
        validOnboardingAnswers[q.key] = mergedOnboardingAnswers[q.key];
    });

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { onboardingAnswers: validOnboardingAnswers },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.json({ status: 404, message: "User not found" });
    }

    return res.json({
      status: 200,
      message: "Onboarding answers updated successfully",
      data: user?.onboardingAnswers,
    });
  } catch (error) {
    console.error("Error updating onboarding answers:", error);
    return res.json({ status: 500, message: "Internal server error" });
  }
};

const getOnboardingQuestion = async (req, res) => {
  try {
    let userAnswers = {};
    let completedOnboarding = false;
    let moodHistory = [];
    if (req.user && req.user.id) {
      const user = await User.findById(req.user.id);
      if (user && user.onboardingAnswers) {
        userAnswers = user.onboardingAnswers;
        completedOnboarding = user.completedOnboarding;
        moodHistory = user.dailyMood || [];
      } else return res.json({ status: 404, message: "User not found" });
    }
    const questionsWithAnswers = ONBOARDING_QUESTIONS.map((q) => ({
      ...q,
      answer: userAnswers[q.key],
    }));
    return res.json({
      status: 200,
      message: "Onboarding questions retrieved successfully",
      data: {
        questions: questionsWithAnswers,
        totalQuestions:
          ONBOARDING_QUESTIONS[ONBOARDING_QUESTIONS.length - 1].stage,
        completedOnboarding,
        moodHistory,
      },
    });
  } catch (error) {
    console.error("Error getting onboarding question:", error);
    return res.json({ status: 500, message: "Internal server error" });
  }
};

const updateDailyMood = async (req, res) => {
  try {
    const { mood } = req.body;

    if (!MOODS.includes(mood))
      return res.json({ status: 400, message: "Invalid value for mood" });

    const today = new Date();
    const storedMoods = await User.findOne(
      { _id: req.user.id },
      { dailyMood: 1, _id: 0 }
    ).lean();

    if (!storedMoods)
      return res.json({ status: 404, message: "User not found" });
    if (!storedMoods.dailyMood) storedMoods.dailyMood = [];

    if (
      storedMoods &&
      storedMoods.dailyMood &&
      storedMoods.dailyMood.length > 0
    ) {
      const lastMoodDate = new Date(
        storedMoods.dailyMood[storedMoods.dailyMood.length - 1].date
      );
      if (
        lastMoodDate.getDate() === today.getDate() &&
        lastMoodDate.getMonth() === today.getMonth() &&
        lastMoodDate.getFullYear() === today.getFullYear()
      ) {
        return res.json({
          status: 400,
          message: "Daily mood already updated for today",
        });
      }
    }

    const todaysMood = {
      date: today,
      mood: mood.toLowerCase(),
    };

    if (storedMoods.dailyMood.length === MOOD_HISTORY_DAYS)
      storedMoods.dailyMood.shift();

    storedMoods.dailyMood.push(todaysMood);

    await User.updateOne(
      { _id: req.user.id },
      { $set: { dailyMood: storedMoods.dailyMood } }
    );

    return res.json({
      status: 200,
      message: "Daily mood updated successfully",
      data: storedMoods.dailyMood,
    });
  } catch (error) {
    console.error("Error updating daily mood:", error);
    return res.json({ status: 500, message: "Internal server error" });
  }
};

module.exports = {
  saveOnboardingAnswers,
  updateOnboardingAnswers,
  getOnboardingQuestion,
  updateDailyMood,
};
