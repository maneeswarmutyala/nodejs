const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const User = require("./models/user");
const app = express();
const DB_URI =
  "mongodb+srv://<username>:<password>@nodejs.ej345.mongodb.net/?retryWrites=true&w=majority";

//connecting and listening port
mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
//register view engine
app.set("view engine", "ejs");

//static files
app.use(express.static("public"));
//adding data into mongodb
app.get("/add-user", (req, res) => {
  const user = new User({
    username: "maneesh950",
    name: "maneesh",
  });
  user.save().then((result) =>{
    res.send(result);
  }).catch(err => {
    console.log(err)
  })
});
//retrieving data from mongodb
app.get("/all-users", (req, res) => {
  User.find()
  // .sort({ createdAt : -1}) // sortby fieldname
  .then((result) =>{
    res.render('index', {title: 'users', data: result});
  }).catch(err => {
    console.log(err)
  })
});

//middleware
app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log("req url", req.url);
  next();
});

//routing
app.get("/", (req, res) => {
  const data = [
    { username: "hi", desc: "desc" },
    { username: "hsfdsfi", desc: "descfsf" },
    { username: "dfsdfshi", desc: "fsdfs" },
  ];
  res.render("index", { title: "home", data });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "home" });
});

//redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404 page

app.use((req, res) => {
  res.status(404).render("404", { title: "home" });
});
