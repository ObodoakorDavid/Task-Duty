/** @format */

const express = require("express");
const {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const methodNotAllowed = require("../utils/methodNotAllowed");

const router = express.Router();

router.route("/").get(getAllTasks).post(createTask).all(methodNotAllowed);
router
  .route("/:id")
  .get(getSingleTask)
  .patch(updateTask)
  .delete(deleteTask)
  .all(methodNotAllowed);

module.exports = router;
