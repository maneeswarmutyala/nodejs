const User = require("../models/user");
const userindex = (req, res) => {
  User.find()
    // .sort({ createdAt : -1}) // sortby fieldname
    .then((result) => {
      res.render("index", { title: "users", data: result });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "404" });
    });
};
const getuserdetails = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((result) => {
      res.render("index", { title: "users", data: result });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "404" });
    });
};
const deleteuser = (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/" });
    })
    .catch((err) => {
      console.log(err);
    });
};
const adduser = (req, res) => {
  const userDetails = {
    username: "maneesh950",
    name: "maneesh",
  };
  const user = new User(req.body || userDetails);
  user
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  userindex,
  getuserdetails,
  deleteuser,
  adduser,
};
