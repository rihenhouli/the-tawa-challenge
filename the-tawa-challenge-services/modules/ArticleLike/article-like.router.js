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
} = require("./article-like.service");
const { addDto } = require("./article-like.dto");

// list article likes 
router.get("/list", listData);

// get article like by _id
router.get("/:id", getData);

// get article like by user
router.get("/user/:user", listDataByUser);

// get article like by article
router.get("/article/:article", listDataByArticle);

// create article like
router.post("/add", addDto, addData);

// delete article like
router.post("/delete/:id", deleteData);

// restore article like
router.post("/restore/:id", restoreData);

module.exports = router;
