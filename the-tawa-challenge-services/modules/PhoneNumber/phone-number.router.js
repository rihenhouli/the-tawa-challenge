var express = require("express");
var router = express.Router();
const {
  listData,
  listDataByUser,
  addData,
  updateData,
  deleteData,
  restoreData,
  getData,
} = require("./phone-number.service");
const { addDto, updateDto } = require("./phone-number.dto");

// list mail address
router.get("/list", listData);

// list mail address by user
router.get("/user/:user", listDataByUser);

// get mail address by _id
router.get("/:id", getData);

// create mail address
router.post("/add",addDto, addData);

 // update mail address
router.post("/update/:id",updateDto, updateData);

// delete mail address
router.post("/delete/:id", deleteData);

// restore mail address
router.post("/restore/:id",restoreData);

module.exports = router;
