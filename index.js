const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/tasks")
  .then(() => console.log("Database is Connected"))
  .catch((err) => console.log(err));

const User = require("./model/User");
const Task = require("./model/Task");

async function db() {
  try {
    const user = new User({
      name: "rohit",
      age: 23,
      email: "rohit@gmail.com",
      password: "rohit@121",
    });

    await user.save();

    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}

db();
