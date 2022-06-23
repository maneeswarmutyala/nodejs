const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");
//adding data into mongodb
router.get("/add", userController.adduser);

//retrieving  data from mongodb
router.get("/users", userController.userindex);

//retrieving a user data from mongodb
router.get("/users/:id", userController.getuserdetails);

//delete data from mongodb
router.delete("/users/:id", userController.deleteuser);

module.exports = router;
