require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const budgets = require("./models/budget.js");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(budget);
  // res.send("You are home!");
});

app.get("/budgets", (req, res) => {
  res.render('index.ejs', {allBudgets: budgets})
});

app.get("/budgets/:index", (req, res) => {
  res.render('show.ejs', {budget: budgets[req.params.index]})
});

app.get("/budgets/new", (req, res) => {
  res.render('new.ejs')
});

app.post('/budgets', (req, res) => {
  console.log('req body is', req.body)
  req.body.readyToEat = !!req.body.readyToEat;
  fruits.push(req.body)
  console.log(fruits);
  res.redirect('/budgets')
});


app.listen(PORT, () => {
  console.log(`We are listening on port ${PORT}`);
});
