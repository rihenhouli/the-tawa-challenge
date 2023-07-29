var express = require("express");
var router = express.Router();
const {
  listData,
  listDataByUser,
  listDataByArticle,
  getData,
  addData,
  deleteData,
  restoreData,
} = require("./article-interest.service");
const { addDto } = require("./article-interest.dto");

// list article interests 
router.get("/list", listData);

// get article interest by _id
router.get("/:id", getData);

// get article interest by user
router.get("/user/:user", listDataByUser);

// get article interest by article
router.get("/article/:article", listDataByArticle);

// create article interest
router.post("/add", addDto, addData);

// delete article interest
router.post("/delete/:id", deleteData);

// restore article interest
router.post("/restore/:id", restoreData);

module.exports = router;
