require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3001 || 3002;
const budgets = require("./models/budget.js");
const morgan = require("morgan");
const methodOverride = require("method-override");
const req = require("express/lib/request");

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"));
app.use("/static", express.static("public"));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/budgets/", (req, res) => {
  let bankAccount = 0
   budgets.forEach((amount,index) => {
    bankAccount += parseInt(amount.amount)
   });
  
  console.log(bankAccount)
  
  res.render("index.ejs", { allBudgets: budgets, bankTotal: bankAccount  });
});

app.get("/budgets/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/budgets/:index", (req, res) => {
  res.render("show.ejs", { budget: budgets[req.params.index] });
});

app.get("/budgets/:index/edit", (req, res) => {
  res.send("edit");
});

app.post('/budgets', (req, res) => {
  
  budgets.push(req.body);
  console.log(budgets);
  res.redirect('/budgets');
});




app.listen(PORT, () => {
  console.log(`We are listening on port ${PORT}`);
});
