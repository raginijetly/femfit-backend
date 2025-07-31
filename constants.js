const ONBOARDING_QUESTIONS = [
  // Question 1
  {
    key: "age",
    stage: 1,
    priority: 0,
    type: "numberInput",
    question: "How old are you?",
    text: "We'll tailor recommendations specific to your life stage",
    placeholder: "e.g. 21",
  },
  // Question 2
  {
    key: "lastPeriod",
    stage: 2,
    priority: 0,
    type: "date",
    question: "When was your last period?",
    text: "This helps us personalize your fitness plan based on your cycle",
    placeholder: `"The date can be a rough estimate, does not have to be exact. It can be updated later."`,
  },
  // Question 3
  {
    key: "regularPeriod",
    stage: 3,
    priority: 0,
    type: "singleSelect",
    question: "Are your periods regular?",
    text: "This helps us better understand your cycle patterns",
    options: [
      {
        value: "yes",
        title: "Yes",
        text: "Great! We can provide insights to help you optimize your lifestyle and habits to better align with your cycle.",
      },
      {
        value: "no",
        title: "No",
        text: "Okay, we can help you track your periods and better understand your body's signals, even if they're irregular.",
      },
      {
        value: "idk",
        title: "I'm unsure",
        text: "No problem. We'll help you learn more about your cycle and provide personalized insights.",
      },
    ],
  },
  // Question 4
  {
    key: "currentFitnessLevel",
    type: "singleSelect",
    stage: 4,
    priority: 0,
    question: "What's your current fitness level?",
    text: "This helps us tailor workouts to your experience",
    options: [
      {
        value: "justStarting",
        title: "Just starting out",
      },
      {
        value: "gettingBack",
        title: "Getting back into fitness",
      },
      {
        value: "alreadyActive",
        title: "Already active",
      },
      {
        value: "veryExperienced",
        title: "Very experienced",
      },
    ],
  },
  // Question 5
  {
    key: "dietaryPreferences",
    type: "multiSelect",
    stage: 5,
    priority: 0,
    question: "Do you have any dietary preferences or restrictions?",
    text: "Select all that apply to personalize your nutrition guidance",
    placeholder: "Please specify your allergies/restrictions",
    options: [
      { value: "none", title: "No restrictions" },
      { value: "vegetarian", title: "Vegetarian" },
      { value: "vegan", title: "Vegan" },
      { value: "glutenFree", title: "Gluten-free" },
      { value: "dairyFree", title: "Dairy/Lactose free" },
      { value: "other", title: "Other allergies/restrictions" },
    ],
  },
  // Question 6
  {
    key: "healthGoals",
    type: "multiSelect",
    stage: 6,
    priority: 0,
    question: "What are your primary health goals?",
    text: "Select all that apply to personalize your journey",
    options: [
      { value: "weightManagement", title: "Weight Management" },
      { value: "getStronger", title: "Get Stronger" },
      { value: "reduceStress", title: "Reduce stress / Manage my mood better" },
      { value: "improveSleep", title: "Improve sleep quality" },
      { value: "balanceHormones", title: "Balance my hormones" },
    ],
  },
  // Question 7
  {
    key: "healthConditions",
    type: "multiSelect",
    stage: 7,
    priority: 0,
    question: "Do you have any health conditions?",
    text: "Select all that apply to help us provide safer recommendations",
    options: [
      { value: "pcos", title: "PCOS" },
      { value: "thyroid", title: "Thyroid Disorder" },
      { value: "diabetes", title: "Diabetes" },
      { value: "fibroids", title: "Fibroids" },
      { value: "endometriosis", title: "Endometriosis" },
      { value: "none", title: "None of these apply to me" },
    ],
  },
  // Question 8
  {
    key: "lifeStages",
    type: "singleSelect",
    stage: 8,
    priority: 0,
    question: "Are you in any of these life stages?",
    text: "Select one option that applies to you",
    options: [
      {
        value: "prenatal",
        title: "Prenatal",
        text: "Congratulations! We're here to support you and your changing needs during this journey.",
      },
      {
        value: "postpartum",
        title: "Postpartum",
        text: "Congratulations! We're here to support your recovery and wellness after childbirth.",
      },
      {
        value: "menopause",
        title: "Menopause",
        text: "Changing bodies are hard. We are here to guide you through these changes and help adapt your lifestyle better.",
      },
      {
        value: "none",
        title: "None of these apply to me",
        // text: "No problem, we can still provide personalized insights based on your cycle.",
      },
    ],
  },
  // Question 9
  {
    key: "symptoms",
    type: "multiSelect",
    stage: 9,
    priority: 0,
    question: "Have you experienced any of these symptoms?",
    text: "In the past few months, select all that apply",
    options: [
      { value: "acne", title: "Acne" },
      { value: "hairLoss", title: "Hair Loss" },
      { value: "excessiveHairGrowth", title: "Excessive Hair Growth" },
      { value: "lowLibido", title: "Low Libido" },
      { value: "fatigue", title: "Fatigue" },
      { value: "none", title: "None of these apply to me" },
    ],
  },
  // Question 10
  {
    key: "bmi",
    type: "bmi",
    stage: 10,
    priority: 0,
    question: "Let's calculate your BMI",
    text: "This helps us personalize your fitness recommendations",
    options: [
      {
        value: "height",
        title: "Height (cm)",
        text: "e.g. 165 cm",
      },
      {
        value: "weight",
        title: "Weight (kg)",
        text: "e.g. 60 kg",
      },
    ],
  },
  // // Question 10
  // {
  //   key: "height",
  //   type: "numberInput",
  //   stage: 10,
  //   priority: 0,
  //   question: "What is your height?",
  //   text: "This helps us calculate your BMI and tailor recommendations",
  //   label: "Height (cm)",
  //   placeholder: "e.g. 165 cm",
  // },
  // // Question 11
  // {
  //   key: "weight",
  //   type: "numberInput",
  //   stage: 10,
  //   priority: 1,
  //   question: "What is your weight?",
  //   text: "This helps us calculate your BMI and tailor recommendations",
  //   label: "Weight (kg)",
  //   placeholder: "e.g. 60 kg",
  // },
];

/*
  In multiSelect questions,
    - If there is an "other" option, it will open a text input field to enter a custom value, placeholder will be available
    - If there is a "none" option, it will deselect all other options, recommended to place it at the end of the options array
 */

const MOODS = ["energetic", "balanced", "stressed", "tired"];

const MOOD_HISTORY_DAYS = 7;

// const PNC = {
//   follicular: {
//     basicInfo: {
//       title: "Follicular Phase",
//       description:
//         "The follicular phase begins on the first day of your period and lasts until ovulation. It's a time of renewal and growth.",
//       hormones: {
//         estrogen: [10, 20, 30, 40, 50, 60, 70],
//         progesterone: [20, 30, 40, 50, 60, 70, 80],
//         testosterone: [80, 70, 60, 50, 40, 30, 20],
//       },
//     },
//     workout: {
//       strength: {
//         upperBody: {
//           excercises: [
//             { name: "Push-ups", sets: 3, reps: 10, duration: 30 },
//             { name: "Dumbbell Rows", sets: 3, reps: 10, duration: 30 },
//             { name: "Shoulder Press", sets: 3, reps: 10, duration: 30 },
//           ],
//         },
//         lowerBody: {
//           excercises: [
//             { name: "Squats", sets: 3, reps: 10, duration: 30 },
//             { name: "Lunges", sets: 3, reps: 10, duration: 30 },
//             { name: "Deadlifts", sets: 3, reps: 10, duration: 30 },
//           ],
//         },
//       },
//       cardio: {
//         highIntensity: {
//           excercises: [
//             { name: "Burpees", sets: 3, reps: 10, duration: 30 },
//             { name: "Jump Rope", sets: 3, reps: 10, duration: 30 },
//             { name: "Sprints", sets: 3, reps: 10, duration: 30 },
//           ],
//         },
//         lowIntensity: {
//           excercises: [
//             { name: "Brisk Walking", sets: 1, reps: 1, duration: 30 },
//             { name: "Cycling", sets: 1, reps: 1, duration: 30 },
//             { name: "Swimming", sets: 1, reps: 1, duration: 30 },
//           ],
//         },
//       },
//       yoga: {
//         flexibility: {
//           excercises: [
//             { name: "Downward Dog", sets: 1, reps: 1, duration: 30 },
//             { name: "Child's Pose", sets: 1, reps: 1, duration: 30 },
//             { name: "Cat-Cow Stretch", sets: 1, reps: 1, duration: 30 },
//           ],
//         },
//         strengthAndFlexibility: {
//           excercises: [
//             { name: "Warrior II", sets: 1, reps: 1, duration: 30 },
//             { name: "Tree Pose", sets: 1, reps: 1, duration: 30 },
//             { name: "Bridge Pose", sets: 1, reps: 1, duration: 30 },
//           ],
//         },
//       },
//     },
//     nutrition: {},
//   },
//   ovulation: {
//     basicInfo: {
//       title: "Ovulation Phase",
//       description:
//         "Ovulation is the phase when an egg is released from the ovary. It's a time of peak fertility and energy.",
//       hormones: {
//         estrogen: [20, 30, 40, 50, 60, 70, 80],
//         progesterone: [10, 20, 30, 40, 50, 60, 70],
//         testosterone: [30, 40, 50, 60, 70, 80, 90],
//       },
//     },
//     workout: {
//       strength: {
//         upperBody: {
//           excercises: [
//             { name: "Push-ups", sets: 3, reps: 12, duration: 30 },
//             { name: "Dumbbell Rows", sets: 3, reps: 12, duration: 30 },
//             { name: "Shoulder Press", sets: 3, reps: 12, duration: 30 },
//           ],
//         },
//         lowerBody: {
//           excercises: [
//             { name: "Squats", sets: 3, reps: 12, duration: 30 },
//             { name: "Lunges", sets: 3, reps: 12, duration: 30 },
//             { name: "Deadlifts", sets: 3, reps: 12, duration: 30 },
//           ],
//         },
//       },
//       cardio: {
//         highIntensity: {
//           excercises: [
//             { name: "Burpees", sets: 3, reps: 12, duration: 30 },
//             { name: "Jump Rope", sets: 3, reps: 12, duration: 30 },
//             { name: "Sprints", sets: 3, reps: 12, duration: 30 },
//           ],
//         },
//         lowIntensity: {
//           excercises: [
//             { name: "Brisk Walking", sets: 1, reps: 1, duration: 30 },
//             { name: "Cycling", sets: 1, reps: 1, duration: 30 },
//             { name: "Swimming", sets: 1, reps: 1, duration: 30 },
//           ],
//         },
//       },
//       yoga: {
//         flexibility: {
//           excercises: [
//             { name: "Downward Dog", sets: 1, reps: 1, duration: 30 },
//             { name: "Child's Pose", sets: 1, reps: 1, duration: 30 },
//             { name: "Cat-Cow Stretch", sets: 1, reps: 1, duration: 30 },
//           ],
//         },
//       },
//       nutrition: {},
//     },
//   },
//   luteal: {
//     basicInfo: {
//       title: "Luteal Phase",
//       description:
//         "The luteal phase occurs after ovulation and before your period. It's a time of hormonal changes and preparation for menstruation.",
//       hormones: {
//         estrogen: [30, 40, 50, 60, 70, 80, 90],
//         progesterone: [20, 30, 40, 50, 60, 70, 80],
//         testosterone: [10, 20, 30, 40, 50, 60, 70],
//       },
//     },
//     workout: {
//       strength: {
//         upperBody: {
//           excercises: [
//             { name: "Push-ups", sets: 3, reps: 8, duration: 30 },
//             { name: "Dumbbell Rows", sets: 3, reps: 8, duration: 30 },
//             { name: "Shoulder Press", sets: 3, reps: 8, duration: 30 },
//           ],
//         },
//         lowerBody: {
//           excercises: [
//             { name: "Squats", sets: 3, reps: 8, duration: 30 },
//             { name: "Lunges", sets: 3, reps: 8, duration: 30 },
//             { name: "Deadlifts", sets: 3, reps: 8, duration: 30 },
//           ],
//         },
//       },
//       cardio: {
//         highIntensity: {
//           excercises: [
//             { name: "Burpees", sets: 3, reps: 8, duration: 30 },
//             { name: "Jump Rope", sets: 3, reps: 8, duration: 30 },
//             { name: "Sprints", sets: 3, reps: 8, duration: 30 },
//           ],
//         },
//         lowIntensity: {
//           excercises: [
//             { name: "Brisk Walking", sets: 1, reps: 1, duration: 30 },
//             { name: "Cycling", sets: 1, reps: 1, duration: 30 },
//             { name: "Swimming", sets: 1, reps: 1, duration: 30 },
//           ],
//         },
//       },
//       yoga: {
//         flexibility: {
//           excercises: [
//             { name: "Downward Dog", sets: 1, reps: 1, duration: 30 },
//             { name: "Child's Pose", sets: 1, reps: 1, duration: 30 },
//             { name: "Cat-Cow Stretch", sets: 1, reps: 1, duration: 30 },
//           ],
//         },
//       },
//     },
//     nutrition: {},
//   },
//   menstruation: {
//     basicInfo: {
//       title: "Menstruation Phase",
//       description:
//         "The menstruation phase is when you have your period. It's a time of rest and recovery.",
//       hormones: {
//         estrogen: [10, 20, 30, 40, 50, 60, 70],
//         progesterone: [20, 30, 40, 50, 60, 70, 80],
//         testosterone: [80, 70, 60, 50, 40, 30, 20],
//       },
//     },
//     workout: {
//       strength: {
//         upperBody: {
//           excercises: [
//             { name: "Push-ups", sets: 2, reps: 6, duration: 30 },
//             { name: "Dumbbell Rows", sets: 2, reps: 6, duration: 30 },
//             { name: "Shoulder Press", sets: 2, reps: 6, duration: 30 },
//           ],
//         },
//         lowerBody: {
//           excercises: [
//             { name: "Squats", sets: 2, reps: 6, duration: 30 },
//             { name: "Lunges", sets: 2, reps: 6, duration: 30 },
//             { name: "Deadlifts", sets: 2, reps: 6, duration: 30 },
//           ],
//         },
//       },
//       cardio: {
//         highIntensity: {
//           excercises: [
//             { name: "Burpees", sets: 2, reps: 6, duration: 30 },
//             { name: "Jump Rope", sets: 2, reps: 6, duration: 30 },
//             { name: "Sprints", sets: 2, reps: 6, duration: 30 },
//           ],
//         },
//         lowIntensity: {
//           excercises: [
//             { name: "Brisk Walking", sets: 1, reps: 1, duration: 30 },
//             { name: "Cycling", sets: 1, reps: 1, duration: 30 },
//             { name: "Swimming", sets: 1, reps: 1, duration: 30 },
//           ],
//         },
//       },
//       yoga: {
//         flexibility: {
//           excercises: [
//             { name: "Downward Dog", sets: 1, reps: 1, duration: 30 },
//             { name: "Child's Pose", sets: 1, reps: 1, duration: 30 },
//             { name: "Cat-Cow Stretch", sets: 1, reps: 1, duration: 30 },
//           ],
//         },
//         strengthAndFlexibility: {
//           excercises: [
//             { name: "Warrior II", sets: 1, reps: 1, duration: 30 },
//             { name: "Tree Pose", sets: 1, reps: 1, duration: 30 },
//             { name: "Bridge Pose", sets: 1, reps: 1, duration: 30 },
//           ],
//         },
//       },
//     },
//     nutrition: {},
//   },
// };

const PER_DAY_CYCLE_DATA = {
  1: {
    name: "Menstrual",
    overview:
      "Monthly reset phase - your body sheds its uterine lining. Energy is naturally lowest.",
    description:
      "Welcome to Day 1! Your period has officially started, and your body is hitting the reset button. Think of this as your monthly fresh start - your uterus is clearing out the old to make way for the new. Energy might feel low, and that's totally normal.",
    superpower:
      "Rest & Restore Expert: Your body knows exactly what it needs. Intuition Amplifier: Deep listening to your body's signals.",
    fact: "Your period blood is only 36% actual blood - the rest is tissue, vaginal secretions, and minerals!",
    estrogen: {
      percentage: 15,
      notes:
        'Your estrogen is at its starting line - low but ready to begin its monthly climb. This contributes to that "I need my cozy blanket" feeling today.',
    },
    progesterone: {
      percentage: 10,
      notes:
        "Progesterone has done its job last cycle and is taking a well-deserved break. Its low levels signal your body that it's time to shed the uterine lining.",
    },
    testosterone: {
      percentage: 20,
      notes:
        "Your testosterone is also resting at lower levels, which is why you might not feel like conquering the world today - and that's perfectly okay!",
    },
  },
  2: {
    name: "Menstrual",
    overview:
      "Monthly reset phase - your body sheds its uterine lining. Energy is naturally lowest.",
    description:
      "Day 2 of your reset phase! Your body is still in cleanup mode, so don't be surprised if you're craving your cozy bed and comfort foods. This is nature's way of telling you to slow down and recharge.",
    superpower:
      "Patience Master: Expert at honoring natural rhythms. Comfort Curator: Knowing exactly what soothes you.",
    fact: "During menstruation, your pain threshold is actually higher than normal - your body has built-in pain management!",
    estrogen: {
      percentage: 15,
      notes:
        "Still hanging out at baseline levels. Your estrogen is like a friend who's gathering energy before a big adventure - patience, the good stuff is coming!",
    },
    progesterone: {
      percentage: 10,
      notes:
        "Continuing its break while your body finishes its monthly reset. Think of progesterone as taking a spa day while estrogen prepares to take the stage.",
    },
    testosterone: {
      percentage: 20,
      notes:
        "Maintaining its lower levels, supporting your body's natural inclination to rest and restore. Your drive will return soon!",
    },
  },
  3: {
    name: "Menstrual",
    overview:
      "Monthly reset phase - your body sheds its uterine lining. Energy is naturally lowest.",
    description:
      "You're almost halfway through your period! You might notice a tiny spark of energy starting to return. Your hormones are beginning their gentle climb upward. It's like the first hint of sunrise after a long night.",
    superpower:
      "Gentle Awakening: Perfect at easing into action. Energy Conservation: Making every bit of energy count.",
    fact: "Your brain actually changes structure during your cycle - it's literally reshaping itself each month!",
    estrogen: {
      percentage: 20,
      notes:
        "Starting its gentle rise! Like the first rays of sunlight, you might feel a subtle shift in your mood and energy. Your body is beginning to wake up.",
    },
    progesterone: {
      percentage: 12,
      notes:
        'Still keeping things mellow, but there\'s a tiny uptick. Your body is slowly transitioning from "rest mode" to "let\'s get ready" mode.',
    },
    testosterone: {
      percentage: 25,
      notes:
        "Beginning to stir! This small increase might give you just a hint more motivation than yesterday. The spark is returning!",
    },
  },
  4: {
    name: "Menstrual",
    overview:
      "Monthly reset phase - your body sheds its uterine lining. Energy is naturally lowest.",
    description:
      "Day 4 brings a bit more brightness! Your period is likely winding down, and you might feel like you're slowly coming back online. Your body is transitioning from rest mode to \"let's get ready for action\" mode.",
    superpower:
      "Optimism Builder: Natural mood lifting abilities. Gentle Motivation: Perfect energy for light activities.",
    fact: "The average woman uses about 11,000 tampons or pads in her lifetime - you're part of an amazing sisterhood!",
    estrogen: {
      percentage: 25,
      notes:
        "Your estrogen is getting into gear! This rise is why you might feel more optimistic and ready to engage with the world again.",
    },
    progesterone: {
      percentage: 15,
      notes:
        "Still relatively low but climbing slightly. Your body is preparing for the amazing journey ahead - ovulation prep is beginning!",
    },
    testosterone: {
      percentage: 30,
      notes:
        "Getting stronger! You might notice a bit more enthusiasm for activities. Your inner drive is slowly turning back on.",
    },
  },
  5: {
    name: "Menstrual",
    overview:
      "Monthly reset phase - your body sheds its uterine lining. Energy is naturally lowest.",
    description:
      "Final stretch of your period! You're probably feeling more like yourself again. Your energy is making a comeback, and you might notice your mood lifting. It's like emerging from a cozy cocoon.",
    superpower:
      "Comeback Queen: Natural resilience shining through. Energy Rebuilder: Expert at sustainable energy return.",
    fact: "Your cervix changes position during your cycle - it's like an internal GPS system guiding your fertility!",
    estrogen: {
      percentage: 30,
      notes:
        'Rising nicely now! This boost is contributing to that "I\'m back!" feeling. Your estrogen is building momentum for the exciting weeks ahead.',
    },
    progesterone: {
      percentage: 15,
      notes:
        "Maintaining its supportive role at low levels while estrogen takes center stage. The hormonal handoff is smooth and natural.",
    },
    testosterone: {
      percentage: 35,
      notes:
        "Climbing steadily! This increase supports your returning energy and confidence. You're transitioning from rest to readiness.",
    },
  },
  6: {
    name: "Follicular",
    overview:
      "Post-period energy surge phase. Your body prepares for ovulation as energy increases with rising estrogen.",
    description:
      "Hello, post-period energy surge! Welcome to your follicular phase - this is where things get exciting. Your ovaries are waking up and preparing follicles for their big moment. You should start feeling more energetic and optimistic.",
    superpower:
      "Social Butterfly: Natural charisma and connection skills. Goal Getter: Perfect energy for starting new projects.",
    fact: "Estrogen improves verbal memory - you're literally better at remembering words and conversations right now!",
    estrogen: {
      percentage: 40,
      notes:
        "Your estrogen is hitting its stride! This significant jump is why you feel more social, energetic, and ready to take on the world. It's your natural confidence booster.",
    },
    progesterone: {
      percentage: 18,
      notes:
        "Still keeping things calm and steady while estrogen does the heavy lifting. Think of progesterone as the supportive friend cheering from the sidelines.",
    },
    testosterone: {
      percentage: 45,
      notes:
        "Rising with purpose! This boost contributes to your increased drive and motivation. You're entering your power-up phase.",
    },
  },
  7: {
    name: "Follicular",
    overview:
      "Post-period energy surge phase. Your body prepares for ovulation as energy increases with rising estrogen.",
    description:
      "Your inner cheerleader is waking up! Energy levels are climbing, and you might feel more social and ready to take on challenges. Your brain is getting sharper too - great day for learning something new.",
    superpower:
      "Learning Machine: Enhanced cognitive abilities. Social Connector: Natural magnetism and communication skills.",
    fact: "Your spatial reasoning actually changes during this phase - you might prefer different routes or notice spaces differently!",
    estrogen: {
      percentage: 50,
      notes:
        "Estrogen is really showing up now! This level boosts your mood, sharpens your focus, and makes everything feel more possible. You're in your element!",
    },
    progesterone: {
      percentage: 20,
      notes:
        "Staying supportively low while your body focuses on preparing for ovulation. It's like having a calm foundation while estrogen creates the excitement.",
    },
    testosterone: {
      percentage: 55,
      notes:
        "Gaining momentum! This rise supports your increased physical and mental energy. You're building toward your monthly peak.",
    },
  },
  8: {
    name: "Follicular",
    overview:
      "Post-period energy surge phase. Your body prepares for ovulation as energy increases with rising estrogen.",
    description:
      "Feeling like a productivity queen? That's your hormones working their magic! Your mood is stabilizing in a good way, and your cognitive function is hitting its stride. Your body is preparing for the main event.",
    superpower:
      "Mental Clarity Master: Peak cognitive performance. Multitasking Maven: Juggling multiple tasks with ease.",
    fact: "Estrogen increases the connections between brain cells - your neural network is literally more connected!",
    estrogen: {
      percentage: 60,
      notes:
        "Your estrogen is in the zone! This sweet spot level enhances your cognitive abilities and mood stability. You're firing on all cylinders mentally and emotionally.",
    },
    progesterone: {
      percentage: 22,
      notes:
        "Still playing its supporting role beautifully. Low progesterone during this phase allows estrogen's energizing effects to shine through.",
    },
    testosterone: {
      percentage: 65,
      notes:
        "Climbing toward its peak! This level supports your growing confidence and physical capability. You're approaching your power zone.",
    },
  },
  9: {
    name: "Follicular",
    overview:
      "Post-period energy surge phase. Your body prepares for ovulation as energy increases with rising estrogen.",
    description:
      "Strength and endurance are your superpowers today! You might notice you can push harder in workouts or handle stress better. Your body is in preparation mode, building up reserves for the energy peak ahead.",
    superpower:
      "Strength Warrior: Peak physical performance. Stress Handler: Natural resilience to pressure.",
    fact: "Your reaction time is faster during this phase - perfect timing for sports or quick decision-making!",
    estrogen: {
      percentage: 70,
      notes:
        "Estrogen is really flexing now! This high level is why you feel strong, resilient, and ready for anything. It's your body's natural performance enhancer.",
    },
    progesterone: {
      percentage: 25,
      notes:
        "Beginning a very gentle rise as your body fine-tunes for ovulation. Still low enough to let estrogen lead the show.",
    },
    testosterone: {
      percentage: 75,
      notes:
        "Rising powerfully! This boost supports your increased strength and endurance. You're in your athletic prime for the month.",
    },
  },
  10: {
    name: "Follicular",
    overview:
      "Post-period energy surge phase. Your body prepares for ovulation as energy increases with rising estrogen.",
    description:
      "You're in your power zone! This is often when people feel most capable and resilient. Your body is fine-tuning everything for ovulation - think of it as your internal systems running a final check.",
    superpower:
      "Confidence Commander: Natural leadership abilities. Peak Performer: Ready for your biggest challenges.",
    fact: "Your vocal cords actually change during this phase - your voice becomes more attractive to others!",
    estrogen: {
      percentage: 80,
      notes:
        "Near-peak levels! Your estrogen is delivering maximum confidence, energy, and mental clarity. This is your monthly superpower moment approaching.",
    },
    progesterone: {
      percentage: 28,
      notes:
        "Still relatively low but preparing for its post-ovulation starring role. It's like an actor waiting in the wings, ready for their cue.",
    },
    testosterone: {
      percentage: 85,
      notes:
        "Approaching its peak! This high level contributes to your sense of capability and drive. You're nearly at your monthly summit.",
    },
  },
  11: {
    name: "Follicular",
    overview:
      "Post-period energy surge phase. Your body prepares for ovulation as energy increases with rising estrogen.",
    description:
      "Almost at your peak! You're probably feeling strong, focused, and ready to conquer the world. Your hormones are reaching their crescendo, preparing for ovulation. If you're going to take on a big challenge, now's the time!",
    superpower:
      "World Conqueror: Peak confidence and capability. Challenge Crusher: Perfect timing for big goals.",
    fact: "Studies show women are more attractive to potential partners during this phase - nature's marketing strategy!",
    estrogen: {
      percentage: 85,
      notes:
        'So close to peak! This level is giving you everything - energy, confidence, focus, and that "I can do anything" feeling. Your estrogen is putting on quite a show.',
    },
    progesterone: {
      percentage: 30,
      notes:
        "Starting to inch upward as ovulation approaches. Your body is preparing for the hormonal transition that's about to happen.",
    },
    testosterone: {
      percentage: 90,
      notes:
        "Nearly maxed out! This peak level supports your highest energy and motivation of the month. You're at your personal summit.",
    },
  },
  12: {
    name: "Follicular",
    overview:
      "Post-period energy surge phase. Your body prepares for ovulation as energy increases with rising estrogen.",
    description:
      "Pre-ovulation power day! You're likely experiencing high energy, great mood, and peak confidence. Your body is putting on the final touches before the main event. Everything is building toward tomorrow's symphony.",
    superpower:
      "Peak Power: Maximum physical and mental performance. Magnetic Personality: Natural charisma at its highest.",
    fact: "Your pupils actually dilate more during this phase - another subtle sign of peak fertility that others unconsciously notice!",
    estrogen: {
      percentage: 90,
      notes:
        "Almost at the mountaintop! This near-peak level is delivering maximum benefits - you feel amazing because your estrogen is working overtime in the best way.",
    },
    progesterone: {
      percentage: 35,
      notes:
        "Rising in preparation for its starring role post-ovulation. It's like the opening act getting ready as the main performer finishes their set.",
    },
    testosterone: {
      percentage: 95,
      notes:
        "At near-peak power! This level supports your highest physical and mental performance. You're primed for peak everything.",
    },
  },
  13: {
    name: "Follicular",
    overview:
      "Post-period energy surge phase. Your body prepares for ovulation as energy increases with rising estrogen.",
    description:
      "The calm before the storm! You're at near-peak energy and feeling amazing. Your body is making final preparations for ovulation - like a runner at the starting line, ready to sprint. Tomorrow could be your power day!",
    superpower:
      "Unstoppable Force: Peak everything mode activated. Strategic Genius: Perfect for planning and executing big moves.",
    fact: "Your brain's reward system is most active now - you're literally wired to feel more pleasure and satisfaction!",
    estrogen: {
      percentage: 95,
      notes:
        "At the summit's approach! This incredibly high level is why you feel unstoppable. Your estrogen is delivering its monthly masterpiece performance.",
    },
    progesterone: {
      percentage: 40,
      notes:
        "Continuing its gradual rise, getting ready to take over once ovulation happens. The hormonal baton pass is being prepared.",
    },
    testosterone: {
      percentage: 98,
      notes:
        "Nearly at maximum! You're operating at peak capacity - physically, mentally, and emotionally. Tomorrow brings your absolute peak!",
    },
  },
  14: {
    name: "Ovulatory",
    overview:
      "Peak performance phase - egg release occurs. Maximum energy, strength, and confidence.",
    description:
      "It's showtime! This is typically your peak energy day - ovulation is happening or about to happen. Your body is releasing an egg and putting on quite the hormonal performance. You might feel unstoppable, super social, or just amazing.",
    superpower:
      "Superhero Mode: Peak physical and mental abilities. Magnetic Leader: Natural influence and charisma.",
    fact: "You're most likely to take risks today - your brain is wired for adventure and new experiences during ovulation!",
    estrogen: {
      percentage: 100,
      notes:
        'Peak performance! Your estrogen has reached its monthly summit, delivering maximum energy, confidence, and that "I\'m amazing" feeling. This is your hormonal peak experience!',
    },
    progesterone: {
      percentage: 45,
      notes:
        "Starting to rise more noticeably as it prepares to become the star of the second half of your cycle. The transition is beginning.",
    },
    testosterone: {
      percentage: 100,
      notes:
        "Maximum power! You're at your absolute peak for strength, drive, and confidence. This is your monthly superhero moment - embrace it!",
    },
  },
  15: {
    name: "Ovulatory",
    overview:
      "Peak performance phase - egg release occurs. Maximum energy, strength, and confidence.",
    description:
      "Still riding the ovulation wave! You should feel powerful and energized. Your body has just accomplished something incredible - releasing an egg ready for its journey. You're still in peak performance mode.",
    superpower:
      "Victory Lap: Celebrating peak performance. Sustained Excellence: Maintaining high performance levels.",
    fact: "The egg released today can survive 12-24 hours - your body has created a masterpiece with a brief but important lifespan!",
    estrogen: {
      percentage: 95,
      notes:
        "Still very high but starting its gradual descent. You're still feeling fantastic - this level maintains your peak energy and confidence for one more day.",
    },
    progesterone: {
      percentage: 50,
      notes:
        "Rising more significantly now as it prepares to take the lead role. Your body is shifting gears from estrogen-dominant to progesterone-focused.",
    },
    testosterone: {
      percentage: 95,
      notes:
        "Maintaining near-peak levels! You're still in your power zone, though the absolute peak moment has passed. Still superhero time!",
    },
  },
  16: {
    name: "Luteal",
    overview:
      "Post-ovulation phase leading to next period. Progesterone dominates, energy levels begin to decrease.",
    description:
      'Welcome to the post-ovulation phase! The party\'s winding down, but you\'re still feeling pretty good. Your body is shifting gears from "go time" to "let\'s see what happens." Progesterone is starting to take the lead.',
    superpower:
      "Steady Excellence: Sustained high performance. Calm Confidence: Balanced energy with inner peace.",
    fact: "Progesterone has a calming effect similar to some anti-anxiety medications - your body produces its own natural relaxant!",
    estrogen: {
      percentage: 85,
      notes:
        "Coming down from its peak but still providing good energy and mood support. Think of this as a gentle landing rather than a crash.",
    },
    progesterone: {
      percentage: 60,
      notes:
        "Really stepping up now! This rise brings a sense of calm and stability. Progesterone is like your body's natural chill pill taking effect.",
    },
    testosterone: {
      percentage: 85,
      notes:
        "Staying elevated from ovulation! Research shows testosterone remains high during early luteal phase, supporting continued energy.",
    },
  },
  17: {
    name: "Luteal",
    overview:
      "Post-ovulation phase leading to next period. Progesterone dominates, energy levels begin to decrease.",
    description:
      "The energy shift begins! You might notice you're feeling more mellow today. That's progesterone doing its job - it's like your body's natural chill pill. Nothing wrong with embracing a slower pace.",
    superpower:
      "Zen Master: Natural calm and emotional balance. Sustainable Power: Steady, reliable energy.",
    fact: "Your body temperature rises slightly during this phase - you're literally running a bit warmer as progesterone increases!",
    estrogen: {
      percentage: 75,
      notes:
        "Continuing its gentle decline while progesterone takes center stage. Your energy is shifting from intense to more sustainable and grounded.",
    },
    progesterone: {
      percentage: 70,
      notes:
        "Rising beautifully! This increase brings emotional stability and a sense of calm. Your body is creating a peaceful, nurturing internal environment.",
    },
    testosterone: {
      percentage: 80,
      notes:
        "Remaining elevated longer than previously thought! Modern research shows testosterone stays high in early luteal phase.",
    },
  },
  18: {
    name: "Luteal",
    overview:
      "Post-ovulation phase leading to next period. Progesterone dominates, energy levels begin to decrease.",
    description:
      'Settling into your luteal rhythm! Many find their mood stabilizes here - you might feel more grounded and calm. Your body is in "wait and see" mode, preparing your uterus just in case that egg found a partner.',
    superpower:
      "Emotional Intelligence Expert: Enhanced empathy and intuition. Steady Achiever: Consistent, reliable performance.",
    fact: "You're better at reading facial expressions and detecting deception during this phase - your emotional radar is enhanced!",
    estrogen: {
      percentage: 65,
      notes:
        "Steadily declining but still supporting your well-being. This level provides stable energy without the intensity of the follicular phase.",
    },
    progesterone: {
      percentage: 80,
      notes:
        "Reaching high levels that promote calmness and emotional stability. Your body is creating optimal conditions for potential pregnancy.",
    },
    testosterone: {
      percentage: 75,
      notes:
        "Beginning gradual decline but still supportive. You maintain good energy while feeling more grounded and centered.",
    },
  },
  19: {
    name: "Luteal",
    overview:
      "Post-ovulation phase leading to next period. Progesterone dominates, energy levels begin to decrease.",
    description:
      "Your body is in conservation mode! Energy might feel more moderate today, and that's perfectly normal. Think of it as your body being wise with its resources. Great time for steady, sustainable activities.",
    superpower:
      "Resource Manager: Expert at energy conservation. Inner Wisdom: Enhanced introspection and self-awareness.",
    fact: "Your metabolic rate increases during this phase - you burn about 300 extra calories per day even while resting!",
    estrogen: {
      percentage: 55,
      notes:
        "Continuing its gradual descent while maintaining mood support. Your body is shifting to a more introspective, energy-conserving pattern.",
    },
    progesterone: {
      percentage: 85,
      notes:
        "Near its peak! This high level promotes relaxation and emotional balance. It's your body's way of creating inner peace and stability.",
    },
    testosterone: {
      percentage: 65,
      notes:
        "Moderating gradually. You still have good energy but your body is shifting toward more sustainable, grounded activities.",
    },
  },
  20: {
    name: "Luteal",
    overview:
      "Post-ovulation phase leading to next period. Progesterone dominates, energy levels begin to decrease.",
    description:
      "Listen to your body's wisdom today! You might feel like taking things easier, and that's exactly what you should do. Your body is working hard behind the scenes, managing the complex hormone dance.",
    superpower:
      "Zen Goddess: Peak emotional stability and calm. Self-Care Expert: Intuitive understanding of what you need.",
    fact: "Progesterone acts on the same brain receptors as alcohol - it's why you might feel naturally more relaxed (but much healthier)!",
    estrogen: {
      percentage: 45,
      notes:
        "Moderating to lower levels, which might contribute to a preference for quieter, more nurturing activities. Your body is being wise about energy conservation.",
    },
    progesterone: {
      percentage: 90,
      notes:
        "At or near its peak! This maximum level promotes deep calm and emotional stability. You're in your most zen-like hormonal state.",
    },
    testosterone: {
      percentage: 55,
      notes:
        "Continuing gradual decline. This level still supports good energy while encouraging more gentle, restorative activities.",
    },
  },
  21: {
    name: "Luteal",
    overview:
      "Post-ovulation phase leading to next period. Progesterone dominates, energy levels begin to decrease.",
    description:
      "The pre-PMS zone for some! If you experience PMS symptoms, they might start appearing. Your body is beginning to realize that egg probably didn't meet a sperm, so it's preparing for the next reset.",
    superpower:
      "Emotional Depth: Enhanced sensitivity as a superpower. Preparation Expert: Natural planning and organizing abilities.",
    fact: "Women are more sensitive to bitter tastes during this phase - your sensory perception literally changes throughout your cycle!",
    estrogen: {
      percentage: 35,
      notes:
        "Lower levels might contribute to mood sensitivity for some people. Remember, this is temporary and your body is preparing for renewal.",
    },
    progesterone: {
      percentage: 85,
      notes:
        "Still high but beginning to plateau. Your body is maintaining its calm state while preparing for the next phase transition.",
    },
    testosterone: {
      percentage: 45,
      notes:
        "Moderate levels that still support steady energy while your body prepares for its monthly renewal process.",
    },
  },
  22: {
    name: "Luteal",
    overview:
      "Post-ovulation phase leading to next period. Progesterone dominates, energy levels begin to decrease.",
    description:
      "Comfort is key today! Your body might be craving magnesium-rich foods or extra cozy time. This isn't weakness - it's your body knowing what it needs. Think of yourself as a phone that needs charging.",
    superpower:
      "Comfort Curator: Expert at creating cozy, nurturing environments. Intuitive Needs: Perfect at knowing what your body requires.",
    fact: "Your food cravings aren't random - they're often your body's smart way of asking for specific nutrients it needs!",
    estrogen: {
      percentage: 30,
      notes:
        "Continuing to decline, which might make you more sensitive to stress. Your body is asking for extra gentleness and self-compassion.",
    },
    progesterone: {
      percentage: 80,
      notes:
        "Starting its descent from peak levels. Your body is beginning to prepare for the next cycle while maintaining emotional support.",
    },
    testosterone: {
      percentage: 40,
      notes:
        "Lower levels support your body's natural wisdom in seeking comfort and restoration during this transition phase.",
    },
  },
  23: {
    name: "Luteal",
    overview:
      "Post-ovulation phase leading to next period. Progesterone dominates, energy levels begin to decrease.",
    description:
      "Embrace the slow lane! Energy levels are naturally lower as your body prepares for the next cycle. This is like the quiet time before dawn - necessary and restorative.",
    superpower:
      "Rest & Restore Specialist: Natural understanding of recovery needs. Mindful Living: Enhanced present-moment awareness.",
    fact: "Your sleep patterns might change during this phase as your body temperature drops - perfect time for cozy evening routines!",
    estrogen: {
      percentage: 25,
      notes:
        "Lower levels contribute to your body's natural inclination toward rest and introspection. This isn't laziness - it's biological wisdom.",
    },
    progesterone: {
      percentage: 75,
      notes:
        "Declining but still providing emotional support. Your body is gradually shifting gears while maintaining stability.",
    },
    testosterone: {
      percentage: 35,
      notes:
        "Moderate levels that support your preference for gentler activities and deeper rest during this preparation phase.",
    },
  },
  24: {
    name: "Luteal",
    overview:
      "Post-ovulation phase leading to next period. Progesterone dominates, energy levels begin to decrease.",
    description:
      "Gentle movement is your friend today! Think restorative yoga, easy walks, or stretching. Your body is in preparation mode for the next cycle - like slowly dimming the lights before the reset.",
    superpower:
      "Gentle Movement Guide: Perfect at choosing restorative activities. Energy Wisdom: Natural understanding of sustainable practices.",
    fact: "Your coordination might be slightly different during this phase - your brain is literally rewiring itself for the next cycle!",
    estrogen: {
      percentage: 20,
      notes:
        "Low levels mean your body is conserving energy for the renewal process ahead. Honor this by choosing gentle, nurturing activities.",
    },
    progesterone: {
      percentage: 70,
      notes:
        "Continuing to decline as your body prepares for menstruation. Still providing some calming effects during this transition.",
    },
    testosterone: {
      percentage: 30,
      notes:
        "Lower levels support your preference for gentle movement and deeper rest as your body prepares for renewal.",
    },
  },
  25: {
    name: "Luteal",
    overview:
      "Post-ovulation phase leading to next period. Progesterone dominates, energy levels begin to decrease.",
    description:
      "PMS might be knocking! If you experience pre-menstrual symptoms, they could be more noticeable today. Remember, this is temporary and normal. Your body is preparing for its monthly reset.",
    superpower:
      "Transition Navigator: Expert at managing change and preparation. Self-Compassion Master: Natural understanding of gentle self-care.",
    fact: "PMS symptoms affect up to 75% of women - you're definitely not alone if you experience them!",
    estrogen: {
      percentage: 18,
      notes:
        "Very low levels might contribute to PMS symptoms for some. Remember, this dip is temporary and signals that renewal is coming soon.",
    },
    progesterone: {
      percentage: 65,
      notes:
        "Declining significantly as your body prepares to shed the uterine lining. This drop can affect mood and energy for some people.",
    },
    testosterone: {
      percentage: 25,
      notes:
        "Lower levels as your body shifts focus to preparation and rest before the amazing renewal cycle begins again.",
    },
  },
  26: {
    name: "Luteal",
    overview:
      "Post-ovulation phase leading to next period. Progesterone dominates, and energy levels begin to decrease.",
    description:
      "Nourishment and comfort are priorities! Your body is asking for extra care as it prepares for menstruation. Think of this as creating a soft landing for the transition that's coming.",
    superpower:
      "Nurturing Expert: Natural caregiver abilities enhanced. Preparation Specialist: Perfect at getting ready for new beginnings.",
    fact: "Your body is already beginning to prepare for the next cycle - the process of renewal starts before the current cycle even ends!",
    estrogen: {
      percentage: 15,
      notes:
        "Approaching baseline levels as your body prepares for the next cycle. This low point is necessary for the fresh start that's coming.",
    },
    progesterone: {
      percentage: 55,
      notes:
        "Dropping to prepare for menstruation. Your body is signaling that it's time to shed the uterine lining and start fresh.",
    },
    testosterone: {
      percentage: 20,
      notes:
        "Low levels support your body's focus on rest and preparation. The renewal process requires this energy conservation.",
    },
  },
  27: {
    name: "Luteal",
    overview:
      "Post-ovulation phase leading to next period. Progesterone dominates, and energy levels begin to decrease.",
    description:
      "Almost there! Your body is actively preparing for your period to start. You might feel more introspective or need extra rest - that's your body's wisdom talking. The reset is coming!",
    superpower:
      "Introspection Master: Natural ability for deep self-reflection. Reset Preparer: Expert at preparing for new beginnings.",
    fact: "The lining your body is about to shed took an entire month to build - it's an amazing example of your body's incredible capabilities!",
    estrogen: {
      percentage: 12,
      notes:
        "Very low levels as your body prepares for the menstrual reset. This is the quiet before the storm of renewal that's about to begin.",
    },
    progesterone: {
      percentage: 45,
      notes:
        "Continuing to drop, signaling your body to prepare for menstruation. The uterine lining is getting ready to shed and start fresh.",
    },
    testosterone: {
      percentage: 15,
      notes:
        "Low levels encourage deep rest as your body prepares for its monthly renewal process.",
    },
  },
  28: {
    name: "Luteal",
    overview:
      "Post-ovulation phase leading to next period. Progesterone dominates, and energy levels begin to decrease.",
    description:
      "Final countdown! This is typically the last day before your period starts. Hormone levels are at their lowest, making space for the fresh start that's coming. The quiet before renewal begins.",
    superpower:
      "Renewal Preparer: Perfect at clearing space for new beginnings. Cycle Wisdom: Deep understanding of natural rhythms.",
    fact: "Tomorrow (or very soon), you'll begin an entirely new 28-day journey - your body is an incredible example of renewal and resilience!",
    estrogen: {
      percentage: 10,
      notes:
        "At its lowest point, creating space for the new cycle to begin. This dip is essential for the hormonal reset that makes renewal possible.",
    },
    progesterone: {
      percentage: 35,
      notes:
        "Dropping to low levels to signal menstruation. Your body is clearing the stage for a brand new monthly performance to begin.",
    },
    testosterone: {
      percentage: 10,
      notes:
        "Very low levels support the deep rest needed before your body begins its amazing monthly cycle all over again.",
    },
  },
  29: {
    name: "Pre-Menstrual",
    overview:
      "This phase occurs after ovulation, leading up to your next period. Progesterone dominates, and energy levels may start to decrease.",
    description:
      "Extended cycle day! If your cycle runs longer than 28 days, you're still in the pre-menstrual zone. Your body is taking its time with this transition - everyone's timeline is different, and that's perfectly normal. Continue with gentle self-care.",
    superpower: "",
    fact: "",
    estrogen: {
      percentage: 8,
      notes:
        "Very low levels as your body continues preparing for menstruation. Some people need extra time for this transition, and that's completely normal.",
    },
    progesterone: {
      percentage: 25,
      notes:
        "Continuing to decline toward menstrual levels. Your body is taking its time with the preparation process - honor this natural timing.",
    },
    testosterone: {
      percentage: 5,
      notes:
        "Minimal levels support continued rest and preparation. Your body knows its own rhythm and timing.",
    },
  },
  30: {
    name: "Pre-Menstrual",
    overview:
      "This phase occurs after ovulation, leading up to your next period. Progesterone dominates, and energy levels may start to decrease.",
    description:
      "Patience, your reset is coming! Your body is making final preparations for the next cycle. Think of this as the last page of one chapter before starting a fresh new one. Tomorrow might bring your period and the beginning of a brand new cycle!",
    superpower: "",
    fact: "",
    estrogen: {
      percentage: 7,
      notes:
        "Nearly at baseline, ready for the fresh start that's coming. Your body is completing its preparation for the amazing renewal process.",
    },
    progesterone: {
      percentage: 20,
      notes:
        "Almost at menstrual levels, signaling that your period should start soon. The reset button is about to be pushed!",
    },
    testosterone: {
      percentage: 5,
      notes:
        "Very low levels support the final preparation phase. Your body is gathering energy for the incredible monthly journey that's about to begin again.",
    },
  },
};

const CYCLE_PHASES = Object.freeze({
  MENSTRUAL: "Menstrual",
  FOLLICULAR: "Follicular",
  OVULATORY: "Ovulatory",
  LUTEAL: "Luteal",
  PRE_MENSTRUAL: "Pre-Menstrual",
  AWAITING_CYCLE_START: "Awaiting Cycle Start",
});

module.exports = {
  ONBOARDING_QUESTIONS,
  MOODS,
  MOOD_HISTORY_DAYS,
  PER_DAY_CYCLE_DATA,
  CYCLE_PHASES,
};
