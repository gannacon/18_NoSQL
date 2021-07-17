// Create the required custom methods at the bottom of this file

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
  },

  name: {
    type: String,
    trim: true,
  },

  duration: {
    type: Number,
    trim: true,
  },

  weight: {
    type: Number,
    trim: true,
  },
  reps: {
    type: Number,
    trim: true,
  },
  sets: {
    type: Number,
    trim: true,
  },
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("Workout", WorkoutSchema);

// Export the User model
module.exports = User;
