var express = require("express");
var router = express.Router();
const {
  listData,
  listDataByUser,
  addData,
  forgotPassword
} = require("./user-password.service");
const { addDto } = require("./user-password.dto");

// list user Password
router.get("/list", listData);

// list user Password by user
router.get("/user/:user", listDataByUser);

// create user Password
router.post("/add",addDto, addData);

// forgot Password
router.post("/reset", forgotPassword);


module.exports = router;
