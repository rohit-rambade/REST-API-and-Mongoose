const express = require("express");

const router = express.Router();

const {
  viewUser,
  viewSpecificUser,
  storeUser,
  UpdateSpecificUser,
  deleteSpecificUser,
  loginUser,
} = require("../controller/user");

//View
router.get("/viewuser", viewUser);
// View Specific
router.get("/user/:id", viewSpecificUser);
// Insert
router.post("/user", storeUser);
// Update
router.patch("/user/:id", UpdateSpecificUser);
// Delete
router.delete("/delete/:id", deleteSpecificUser);
router.post("/user/login", loginUser);
module.exports = router;
