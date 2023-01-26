const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/tasks")
  .then(() => console.log("Database is Connected"))
  .catch((err) => console.log(err));

const User = require("./model/User");
const Task = require("./model/Task");
app.use(express.json());

app.post("/task", async (req, res) => {
  try {
    const task = new Task(req.body);
    console.log(task);

    await task.save();
    return res.status(201).json({ success: true, task });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
});

app.post("/user", async (req, res) => {
  try {
    const user = new User(req.body);
    console.log(user);

    await user.save();
    return res.status(201).json({ success: true, user });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
});

// async function db() {
//   try {
//     const user = new User({
//       name: "test",
//       age: 23,
//       email: "test@gmail.com",
//       password: "rohit@121",
//     });

//     const task = new Task({
//       description: "task",
//       isCompleted: true,
//     });

//     await user.save();
//     await task.save();

//     console.log(task);
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// db();
app.listen(port, () => {
  console.log(`Server Is Running At Port ${port}`);
});
