const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    dailyTasks: { type: Array },

    dailyMood: {},

    historyTask: { type: Array },
    historyMood: { type: Array },
  },

  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
