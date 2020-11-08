const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
// {path: '../.env'}

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.REACT_APP_ATLAS_URI;
console.warn(process.env.REACT_APP_ATLAS_URI);
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongo db dab conection sucess");
});

// const tasksRouter = require("./routes/tasks");
const usersRouter = require("./routes/users");
// const moodsRouter = require("./routes/moods");

// app.use("/tasks", tasksRouter);
app.use("/users", usersRouter);
// app.use("/moods", moodsRouter);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
