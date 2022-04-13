require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const budget = require("./models/budget.js");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(budget);
  // res.send("You are home!");
});

app.get("/budgets", (req, res) => {
  res.send(budget);
  // res.send("You are home!");
});

app.get("/budgets/:index", (req, res) => {
  res.send(budget[req.params.index]);
  // res.send("You are home!");
});

app.listen(PORT, () => {
  console.log(`We are listening on port ${PORT}`);
});
