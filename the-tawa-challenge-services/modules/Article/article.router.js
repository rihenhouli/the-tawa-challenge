var express = require("express");
var router = express.Router();
const {
  sendEmail,
  listData,
  listDataByArchive,
  listDataByCategory,
  listDataByTitle,
  getData,
  addData,
  updateData,
  deleteData,
  restoreData,
  publishData,
} = require("./article.service");
const { addDto, updateDto } = require("./article.dto");

// list articles
router.get("/list", listData);

// get article by _id
router.get("/:id", getData);

// create article
router.post("/add", addDto, addData);

// publish article
router.post("/publish", publishData);

// update article
router.post("/update/:id", updateDto, updateData);

// delete article
router.post("/delete/:id", deleteData);

// restore article
router.post("/restore/:id", restoreData);

module.exports = router;
