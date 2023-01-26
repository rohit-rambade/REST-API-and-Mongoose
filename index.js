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
      name: "test",
      age: 23,
      email: "test@gmail.com",
      password: "rohit@121",
    });

    const task = new Task({
      description: "task",
      isCompleted: true,
    });

    await user.save();
    await task.save();

    console.log(task);
  } catch (e) {
    console.log(e.message);
  }
}

db();
