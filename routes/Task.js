const express = require("express");

const router = express.Router();
const {
  fetchAll,
  storeTask,
  deleteSpecific,
  viewSpecific,
} = require("../controller/task");

// View
router.get("/viewtask", fetchAll);

// View Specific
router.get("/task/:id", storeTask);

// Insert
router.post("/task", deleteSpecific);

//Delete
router.delete("/taskd/:id", viewSpecific);

module.exports = router;
