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
    const user = new User(req.body);
    console.log(user);

    await user.save();
    return res.status(201).json({ success: true, user });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
};

exports.UpdateSpecificUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Not Found",
    });
  }

  const keys = Object.keys(req.body);

  for (let key of keys) {
    user[key] = req.body[key];
  }

  await user.save();

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

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid Email / Password",
    });
  }

  const isMatch = await bcryptjs.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid Email / Password",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Login Success",
    user,
  });
};
