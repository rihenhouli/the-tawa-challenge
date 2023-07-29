var express = require("express");
var router = express.Router();
const {
  listData,
  getData,
  addData,
  updateData,
  deleteData,
  restoreData,
  authenticate,
  signOut,
  sendAccountConfirmationMail
} = require("./user.service");
const { addDto, updateDto } = require("./user.dto");

// list users 
router.get("/list", listData);

// get user by _id
router.get("/:id", getData);

// create user
router.post("/add",addDto, addData);

// confirm user
router.post("/confirm", sendAccountConfirmationMail);

 // update user
router.post("/update/:id",updateDto, updateData);

// delete user
router.post("/delete/:id", deleteData);

// restore user
router.post("/restore/:id",restoreData);


// sign in user
router.post("/sign-in",authenticate);

// sign out user
router.post("/sign-out",signOut);

module.exports = router;
