require("dotenv").config();

const express = require("express");
const app = express();
const PORT =  3001 || 3002;
const budgets = require("./models/budget.js");
const morgan = require("morgan")
const methodOverride = require("method-override")
const req = require("express/lib/request")

//Middleware
app.use(express.urlencoded({extended: false}))
app.use(morgan("tiny"))
app.use('/static', express.static('public'))
app.use(methodOverride("_method"))

 
  
app.get("/", (req, res) => {
  res.send(budgets);
  res.send("You are home!");
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
