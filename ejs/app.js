const express = require("express");

const app = express();

//register view engine

app.set("view engine", "ejs");
//listening port
app.listen(3000);
//routing
app.get("/", (req, res) => {
  const data = [
    { title: "hi", desc: "desc" },
    { title: "hsfdsfi", desc: "descfsf" },
    { title: "dfsdfshi", desc: "fsdfs" },
  ];
  res.render("index", { title: "home" , data});
});

app.get("/about", (req, res) => {
  res.render("about",{ title: "home"});
});

//redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404 page

app.use((req, res) => {
  res.status(404).render("index",{ title: "home"});
});
