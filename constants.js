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

const PNC = {
  follicular: {
    basicInfo: {
      title: "Follicular Phase",
      description:
        "The follicular phase begins on the first day of your period and lasts until ovulation. It's a time of renewal and growth.",
      hormones: {
        estrogen: [10, 20, 30, 40, 50, 60, 70],
        progesterone: [20, 30, 40, 50, 60, 70, 80],
        testosterone: [80, 70, 60, 50, 40, 30, 20],
      },
    },
    workout: {
      strength: {
        upperBody: {
          excercises: [
            { name: "Push-ups", sets: 3, reps: 10, duration: 30 },
            { name: "Dumbbell Rows", sets: 3, reps: 10, duration: 30 },
            { name: "Shoulder Press", sets: 3, reps: 10, duration: 30 },
          ],
        },
        lowerBody: {
          excercises: [
            { name: "Squats", sets: 3, reps: 10, duration: 30 },
            { name: "Lunges", sets: 3, reps: 10, duration: 30 },
            { name: "Deadlifts", sets: 3, reps: 10, duration: 30 },
          ],
        },
      },
      cardio: {
        highIntensity: {
          excercises: [
            { name: "Burpees", sets: 3, reps: 10, duration: 30 },
            { name: "Jump Rope", sets: 3, reps: 10, duration: 30 },
            { name: "Sprints", sets: 3, reps: 10, duration: 30 },
          ],
        },
        lowIntensity: {
          excercises: [
            { name: "Brisk Walking", sets: 1, reps: 1, duration: 30 },
            { name: "Cycling", sets: 1, reps: 1, duration: 30 },
            { name: "Swimming", sets: 1, reps: 1, duration: 30 },
          ],
        },
      },
      yoga: {
        flexibility: {
          excercises: [
            { name: "Downward Dog", sets: 1, reps: 1, duration: 30 },
            { name: "Child's Pose", sets: 1, reps: 1, duration: 30 },
            { name: "Cat-Cow Stretch", sets: 1, reps: 1, duration: 30 },
          ],
        },
        strengthAndFlexibility: {
          excercises: [
            { name: "Warrior II", sets: 1, reps: 1, duration: 30 },
            { name: "Tree Pose", sets: 1, reps: 1, duration: 30 },
            { name: "Bridge Pose", sets: 1, reps: 1, duration: 30 },
          ],
        },
      },
    },
    nutrition: {},
  },
  ovulation: {
    basicInfo: {
      title: "Ovulation Phase",
      description:
        "Ovulation is the phase when an egg is released from the ovary. It's a time of peak fertility and energy.",
      hormones: {
        estrogen: [20, 30, 40, 50, 60, 70, 80],
        progesterone: [10, 20, 30, 40, 50, 60, 70],
        testosterone: [30, 40, 50, 60, 70, 80, 90],
      },
    },
    workout: {
      strength: {
        upperBody: {
          excercises: [
            { name: "Push-ups", sets: 3, reps: 12, duration: 30 },
            { name: "Dumbbell Rows", sets: 3, reps: 12, duration: 30 },
            { name: "Shoulder Press", sets: 3, reps: 12, duration: 30 },
          ],
        },
        lowerBody: {
          excercises: [
            { name: "Squats", sets: 3, reps: 12, duration: 30 },
            { name: "Lunges", sets: 3, reps: 12, duration: 30 },
            { name: "Deadlifts", sets: 3, reps: 12, duration: 30 },
          ],
        },
      },
      cardio: {
        highIntensity: {
          excercises: [
            { name: "Burpees", sets: 3, reps: 12, duration: 30 },
            { name: "Jump Rope", sets: 3, reps: 12, duration: 30 },
            { name: "Sprints", sets: 3, reps: 12, duration: 30 },
          ],
        },
        lowIntensity: {
          excercises: [
            { name: "Brisk Walking", sets: 1, reps: 1, duration: 30 },
            { name: "Cycling", sets: 1, reps: 1, duration: 30 },
            { name: "Swimming", sets: 1, reps: 1, duration: 30 },
          ],
        },
      },
      yoga: {
        flexibility: {
          excercises: [
            { name: "Downward Dog", sets: 1, reps: 1, duration: 30 },
            { name: "Child's Pose", sets: 1, reps: 1, duration: 30 },
            { name: "Cat-Cow Stretch", sets: 1, reps: 1, duration: 30 },
          ],
        },
      },
      nutrition: {},
    },
  },
  luteal: {
    basicInfo: {
      title: "Luteal Phase",
      description:
        "The luteal phase occurs after ovulation and before your period. It's a time of hormonal changes and preparation for menstruation.",
      hormones: {
        estrogen: [30, 40, 50, 60, 70, 80, 90],
        progesterone: [20, 30, 40, 50, 60, 70, 80],
        testosterone: [10, 20, 30, 40, 50, 60, 70],
      },
    },
    workout: {
      strength: {
        upperBody: {
          excercises: [
            { name: "Push-ups", sets: 3, reps: 8, duration: 30 },
            { name: "Dumbbell Rows", sets: 3, reps: 8, duration: 30 },
            { name: "Shoulder Press", sets: 3, reps: 8, duration: 30 },
          ],
        },
        lowerBody: {
          excercises: [
            { name: "Squats", sets: 3, reps: 8, duration: 30 },
            { name: "Lunges", sets: 3, reps: 8, duration: 30 },
            { name: "Deadlifts", sets: 3, reps: 8, duration: 30 },
          ],
        },
      },
      cardio: {
        highIntensity: {
          excercises: [
            { name: "Burpees", sets: 3, reps: 8, duration: 30 },
            { name: "Jump Rope", sets: 3, reps: 8, duration: 30 },
            { name: "Sprints", sets: 3, reps: 8, duration: 30 },
          ],
        },
        lowIntensity: {
          excercises: [
            { name: "Brisk Walking", sets: 1, reps: 1, duration: 30 },
            { name: "Cycling", sets: 1, reps: 1, duration: 30 },
            { name: "Swimming", sets: 1, reps: 1, duration: 30 },
          ],
        },
      },
      yoga: {
        flexibility: {
          excercises: [
            { name: "Downward Dog", sets: 1, reps: 1, duration: 30 },
            { name: "Child's Pose", sets: 1, reps: 1, duration: 30 },
            { name: "Cat-Cow Stretch", sets: 1, reps: 1, duration: 30 },
          ],
        },
      },
    },
    nutrition: {},
  },
  menstruation: {
    basicInfo: {
      title: "Menstruation Phase",
      description:
        "The menstruation phase is when you have your period. It's a time of rest and recovery.",
      hormones: {
        estrogen: [10, 20, 30, 40, 50, 60, 70],
        progesterone: [20, 30, 40, 50, 60, 70, 80],
        testosterone: [80, 70, 60, 50, 40, 30, 20],
      },
    },
    workout: {
      strength: {
        upperBody: {
          excercises: [
            { name: "Push-ups", sets: 2, reps: 6, duration: 30 },
            { name: "Dumbbell Rows", sets: 2, reps: 6, duration: 30 },
            { name: "Shoulder Press", sets: 2, reps: 6, duration: 30 },
          ],
        },
        lowerBody: {
          excercises: [
            { name: "Squats", sets: 2, reps: 6, duration: 30 },
            { name: "Lunges", sets: 2, reps: 6, duration: 30 },
            { name: "Deadlifts", sets: 2, reps: 6, duration: 30 },
          ],
        },
      },
      cardio: {
        highIntensity: {
          excercises: [
            { name: "Burpees", sets: 2, reps: 6, duration: 30 },
            { name: "Jump Rope", sets: 2, reps: 6, duration: 30 },
            { name: "Sprints", sets: 2, reps: 6, duration: 30 },
          ],
        },
        lowIntensity: {
          excercises: [
            { name: "Brisk Walking", sets: 1, reps: 1, duration: 30 },
            { name: "Cycling", sets: 1, reps: 1, duration: 30 },
            { name: "Swimming", sets: 1, reps: 1, duration: 30 },
          ],
        },
      },
      yoga: {
        flexibility: {
          excercises: [
            { name: "Downward Dog", sets: 1, reps: 1, duration: 30 },
            { name: "Child's Pose", sets: 1, reps: 1, duration: 30 },
            { name: "Cat-Cow Stretch", sets: 1, reps: 1, duration: 30 },
          ],
        },
        strengthAndFlexibility: {
          excercises: [
            { name: "Warrior II", sets: 1, reps: 1, duration: 30 },
            { name: "Tree Pose", sets: 1, reps: 1, duration: 30 },
            { name: "Bridge Pose", sets: 1, reps: 1, duration: 30 },
          ],
        },
      },
    },
    nutrition: {},
  },
};

module.exports = {
  ONBOARDING_QUESTIONS,
  PNC,
  MOODS,
  MOOD_HISTORY_DAYS,
};
