const express = require("express");
const User = require("../model/User");

const router = express.Router();

//View
router.get("/viewuser", async (req, res) => {
  const user = await User.find();
  console.log(user);
  return res.json({ success: true, user });
});
// View Specific
router.get("/user/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  console.log(user);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Not Found",
    });
  }

  return res.json({ success: true, user });
});

// Insert

router.post("/user", async (req, res) => {
  try {
    const user = new User(req.body);
    console.log(user);

    await user.save();
    return res.status(201).json({ success: true, user });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
});

// Update
router.patch("/user/:id", async (req, res) => {
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
});

// Delete
router.delete("/delete/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Not Found",
    });
  }

  return res.json({ success: true, user });
});

module.exports = router;
