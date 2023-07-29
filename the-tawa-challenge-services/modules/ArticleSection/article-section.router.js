var express = require("express");
var router = express.Router();
const {
  listData,
  getData,
  addData,
  updateData,
  deleteData,
  restoreData,
  listDataByArticle
} = require("./article-section.service");
const { addDto, updateDto } = require("./article-section.dto");

// list article sections 
router.get("/list", listData);

// list article sections 
router.get("/article/:article", listDataByArticle);

// get article section by _id
router.get("/:id", getData);

// create article section
router.post("/add",addDto, addData);

 // update article section
router.post("/update/:id",updateDto, updateData);

// delete article section
router.post("/delete/:id", deleteData);

// restore article section
router.post("/restore/:id",restoreData);

module.exports = router;
