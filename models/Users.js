const mongoose = require("mongoose");
const { MOODS } = require("../constants");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    nickname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      maxlength: 100,
    },
    password: {
      type: String,
      required: true,
    },
    onboardingAnswers: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    completedOnboarding: {
      type: Boolean,
      default: false,
    },
    dailyMood: [
      {
        date: { type: Date, required: true },
        mood: { type: String, required: true, enum : MOODS }, 
        _id: false
      }
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
