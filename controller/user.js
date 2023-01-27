const User = require("../model/User");
const bcryptjs = require("bcryptjs");
exports.viewUser = async (req, res) => {
  const user = await User.find();
  console.log(user);
  return res.json({ success: true, user });
};

exports.viewSpecificUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  console.log(user);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Not Found",
    });
  }

  return res.json({ success: true, user });
};

exports.storeUser = async (req, res) => {
  try {
    req.body.password = await bcryptjs.hash(req.body.password, 7);
    const user = new User(req.body);
    console.log(user);

    await user.save();
    return res.status(201).json({ success: true, user });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
};

exports.UpdateSpecificUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Not Found",
    });
  }

  return res.json({ success: true, user });
};

exports.deleteSpecificUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Not Found",
    });
  }

  return res.json({ success: true, user });
};
