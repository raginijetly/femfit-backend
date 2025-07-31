const User = require("../models/Users");
const { differenceInDays } = require("date-fns");
const { PER_DAY_CYCLE_DATA } = require("../constants");

const homeController = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) return res.json({ status: 404, message: "User not found" });

  // Initialize userInfo with default values
  const userInfo = {
    cycleDay: 1,
    cyclePhase: "unknown",
    nextPhaseIn: -1,
    cyclePercentage: 0,
    cycleLength: 28, // Default cycle length
  };

  // Initialize cycle info with default values
  let cycleInfo = {
    name: "Awaiting Cycle Start",
    overview:
      "Log your period to begin your personalized cycle tracking journey.",
    description:
      "Once you log the first day of your period, this space will fill with daily insights about your hormones, energy levels, and unique superpowers. We're excited to guide you!",
    superpower: "Unlock Your Superpowers ✨",
    fact: "Your body is amazing! Get ready to learn more about its rhythms.",
    estrogen: {
      percentage: 0,
      notes: "Hormone levels will appear here once your cycle begins.",
    },
    progesterone: {
      percentage: 0,
      notes: "Hormone levels will appear here once your cycle begins.",
    },
    testosterone: {
      percentage: 0,
      notes: "Hormone levels will appear here once your cycle begins.",
    },
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

    // Determine cycle phase
    let daysUntilNextPhase = 0;
    if (cycleDayNum <= 5) {
      daysUntilNextPhase = 6 - cycleDayNum;
    } else if (cycleDayNum <= 13) {
      daysUntilNextPhase = 14 - cycleDayNum;
    } else if (cycleDayNum <= 16) {
      daysUntilNextPhase = 17 - cycleDayNum;
    } else {
      daysUntilNextPhase = 29 - cycleDayNum;
    }
    userInfo.cycleDay = cycleDayNum;
    userInfo.cyclePhase = PER_DAY_CYCLE_DATA[cycleDayNum].name;
    userInfo.nextPhaseIn = daysUntilNextPhase;
    userInfo.cyclePercentage = Math.round((cycleDayNum / 28) * 100);
    userInfo.cycleLength = cycleLength;

    // Update cycle info based on the current cycle day
    cycleInfo = PER_DAY_CYCLE_DATA[cycleDayNum];
  }

  res.json({
    status: 200,
    message: "Home API is working",
    data: { user, userInfo, cycleInfo },
  });
};

module.exports = { homeController };
