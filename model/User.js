const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 18) {
        throw new Error(`Age Can't  Be Less Than 18`);
      }
    },
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        {
          throw new Error(`Email Is Not Valid`);
        }
      }
    },
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
