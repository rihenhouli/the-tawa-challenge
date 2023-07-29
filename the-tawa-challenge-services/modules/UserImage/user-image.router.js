var express = require("express");
var router = express.Router();
const {
  listData,
  listDataByUser,
  getData,
  addData,
  deleteData,
  restoreData,
  updateData,
  downloadData,
  listDataByuser,
  listDataByMain,
} = require("./user-image.service");
const { addDto, updateDto } = require("./user-image.dto");

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/users");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, uniqueSuffix + extension);
  },
});

const upload = multer({ storage: storage });

// list user images
router.get("/list", listData);

// list user image by Main
router.get("/main", listDataByMain);

// get user image by _id
router.get("/:id", getData);

// list user image by user
router.get("/user/:user", listDataByUser);

// upload user image
router.post("/upload", upload.single("image"), addDto, addData);

// download user image
router.get("/download/:filename", downloadData);

// update user image
router.post("/update", updateDto, updateData);

// delete user image
router.post("/delete/:id", deleteData);

// restore user image
router.post("/restore/:id", restoreData);

module.exports = router;
