/** @format */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const notFound = require("./middlewares/notFound");
const taskRouter = require("./routes/taskRouter");
const authRouter = require("./routes/authRouter");

const app = express();

// fWDTZN2mdgFSPPK2

// nodemon for automatically restarting our server

// allows requests to go through
app.use(cors());
// allows access to the req.body
app.use(express.json());
app.use("/auth", authRouter);
app.use("/task", taskRouter);
app.use(notFound);

const start = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
    app.listen(3000, () => {
      console.log("Server is listening on PORT:3000");
    });
  } catch (error) {
    console.log(`Could not connect because of ${error.message}`);
  }
};

start();
