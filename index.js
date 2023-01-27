const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const port = process.env.PORT || 3000;
mongoose
  .connect("mongodb://127.0.0.1:27017/tasks")
  .then(() => console.log("Database is Connected"))
  .catch((err) => console.log(err));

const userRoutes = require("./routes/User");
const taskRoutes = require("./routes/Task");

app.use(userRoutes);

app.use(taskRoutes);

app.listen(port, () => {
  console.log(`Server Is Running At Port ${port}`);
});
