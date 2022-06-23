const express = require("express");
const morgan = require("morgan");
const app = express();

//register view engine

app.set("view engine", "ejs");
//listening port
app.listen(3000);
//static files
app.use(express.static('public'))

//middleware
app.use(morgan('dev'));
app.use((req, res, next) => {
  console.log('req url', req.url)
  next();
});



//routing
app.get("/", (req, res) => {
  const data = [
    { title: "hi", desc: "desc" },
    { title: "hsfdsfi", desc: "descfsf" },
    { title: "dfsdfshi", desc: "fsdfs" },
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
