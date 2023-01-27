const Task = require("../model/Task");

exports.fetchAll = async (req, res) => {
  const task = await Task.find();
  console.log(task);
  return res.json({ success: true, task });
};

exports.storeTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    console.log(task);

    await task.save();
    return res.status(201).json({ success: true, task });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
};

exports.deleteSpecific = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);

  return res.json({ success: true, task });
};

exports.viewSpecific = async (req, res) => {
  const task = await Task.findById(req.params.id);
  console.log(task);
  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task Not Found",
    });
  }

  return res.json({ success: true, task });
};
