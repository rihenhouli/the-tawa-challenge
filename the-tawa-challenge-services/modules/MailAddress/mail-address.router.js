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
  declineMailAddress,
  getDataByValue
} = require("./mail-address.service");
const { addDto, updateDto } = require("./mail-address.dto");

// list mail address
router.get("/list", listData);

// list mail address by user
router.get("/user/:user", listDataByUser);

// list mail address by user
router.get("/email/:email", getDataByValue);

// response negative to confirmation mail
router.get("/decline/:email", declineMailAddress );

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
