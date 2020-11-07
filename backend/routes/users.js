const router = require("express").Router();

let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const dailyTasks = req.body.dailyTasks;
  const dailyMood = req.body.dailyMood;
  const historyTask = req.body.historyTask;
  const historyMood = req.body.historyMood;

  const newUser = new User({
    username,
    password,
    dailyTasks,
    dailyMood,
    historyTask,
    historyMood,
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
