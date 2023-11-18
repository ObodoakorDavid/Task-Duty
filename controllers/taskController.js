/** @format */

const Task = require("../models/task");

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ message: "Task Created Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getAllTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ data: tasks });
};

const getSingleTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findOne({ _id: id });

  if (!task) {
    return res.status(404).json({ message: `No Task with ID:${id}` });
  }

  res.status(200).json({ data: task });
};

const updateTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findOneAndUpdate({ _id: id }, req.body);

  if (!task) {
    return res.status(404).json({ message: `No Task with ID:${id}` });
  }

  res.json({ message: "Task Updated Successfully" });
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findOneAndDelete({ _id: id });

  if (!task) {
    return res.status(404).json({ message: `No Task with ID:${id}` });
  }

  res.json({ message: "Task Deleted" });
};

module.exports = {
  createTask,
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
};
