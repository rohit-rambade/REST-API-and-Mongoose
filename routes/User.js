const express = require("express");

const router = express.Router();

const {
  viewUser,
  viewSpecificUser,
  storeUser,
  UpdateSpecificUser,
  deleteSpecificUser,
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

module.exports = router;
