const userImageModel = require("./user-image.model");
const path = require("path");
const referenceGenerator = require("../../shared/generators.js");

// list user images
exports.listData = async (req, res, next) => {
  try {
    const list = await userImageModel.find();
    if (list.length > 0) {
      res.status(200).json(list);
    } else {
      res.status(404).json("No data Found");
    }
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

// get user Image by _id
exports.getData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userImage = await userImageModel.findOne({ _id: id });
    if (userImage) {
      res.status(200).json(userImage);
    } else {
      res.status(404).json("user Image doesn't exist Found");
    }
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

// list user Image by user
exports.listDataByUser = async (req, res, next) => {
  try {
    const { user } = req.params;
    const userImageList = await userImageModel.find({
      user: user,
    });
    if (userImageList) {
      res.status(200).json(userImageList);
    } else {
      res.status(404).json("user Image doesn't exist for this user");
    }
  } catch (error) {
    res.json("error", {
      error: error,
    });
  }
};

// list user Image by Main
exports.listDataByMain = async (req, res, next) => {
  try {
    const userImageList = await userImageModel.find({
      isMain: true,
    });
    if (userImageList) {
      res.status(200).json(userImageList);
    } else {
      res.status(404).json("No main images");
    }
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

// add user Image
exports.addData = async (req, res, next) => {
  try {
    console.log(req.body)
    console.log(typeof req.body.isMain)
    const isMain = req.body.isMain === "true" ? true : false;
    console.log(typeof isMain)
    if (
      req.body.user !== undefined ||
      req.body.userImageAlt !== undefined ||
      req.body.createdBy !== undefined
    ) {
      const existinguserImage = await userImageModel.findOne({
        userImageName: req.file.filename,
      });
      if (!existinguserImage) {
        const prefix = "usr-img-";
        const sequentialNumber = (await userImageModel.find()).length+1;
        const reference = referenceGenerator.generateReference(
          prefix,
          sequentialNumber
        );
        const userImage = new userImageModel({
          userImagePath: req.file.path,
          userImageName: req.file.filename,
          ...req.body,
          isMain: isMain,
          ref:reference
        });
        userImage.save();
        if(isMain===true)
        {
          await userImageModel.updateMany(
            { user: req.body.user, _id: { $ne: userImage._id } },
            { $set: { isMain: false } }
          );
        }
        res.json(userImage._id);
      } else {
        res.status(520).json({ error: "user Image already exists" });
      }
    } else {
      res
        .status(400)
        .json({ error: "BAD REQUEST : No Data has been inserted " });
    }
  } catch (error) {
    res.status(550).json({ message: error });
  }
};

// download data
exports.downloadData = async (req, res) => {
  try {
    const filename = req.params.filename;
    const userImage = await userImageModel.findOne({
      userImageName: filename,
    });
    

    if (!userImage) {
      return res.status(404).json({ message: "user image not found" });
    }

    const filePath = path.join(
      __dirname,
      "../../public/images/users",
      filename
    );
    res.set("Content-Disposition", `attachment; filename="${filename}"`);
    res.set("Cache-Control", "no-store"); // Pruser caching
    res.sendFile(filePath);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// update user Image
exports.updateData = async function (req, res, next) {
  try {
    const { id } = req.params;
    const dbuserImage = await userImageModel.findById({ _id: id });
    if (dbuserImage) {
      // userImageAlt
      let userImageAlt = req.body.userImageAlt;
      if (req.body.userImageAlt === undefined) {
        userImageAlt = dbuserImage.userImageAlt;
      }

      // isMain
      let isMain = req.body.isMain;
      if (req.body.isMain === undefined) {
        isMain = dbuserImage.isMain;
      }

      if (
        req.body.userImageAlt !== undefined ||
        req.body.isMain !== undefined
      ) {
        if (
          (req.body.userImageAlt !== dbuserImage.userImageAlt &&
            req.body.userImageAlt !== undefined) ||
          (req.body.isMain !== dbuserImage.isMain &&
            req.body.isMain !== undefined)
        ) {
          const updateduserImage = {
            userImageAlt: userImageAlt,
            isMain: isMain,
          };
          const userImage = await userImageModel.findByIdAndUpdate(id, {
            $set: updateduserImage,
          });
          if (!userImage) {
            res.status(500).json({ error: "Error while updating Image " });
          } else {
            res.json(await userImageModel.findById({ _id: id }));
          }
        } else {
          res
            .status(400)
            .json({ error: "BAD REQUEST : No changes have been made" });
        }
      } else {
        res
          .status(400)
          .json({ error: "BAD REQUEST : No Data has been inserted " });
      }
    } else {
      res.status(404).json({ error: "NOT FOUND : user  doesn't exist" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// delete user Image
exports.deleteData = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id)
    const existinguserImage = await userImageModel.findOne({
      isDeleted: false,
      _id: id,
    });
    if (existinguserImage) {
      const userImage = await userImageModel.findByIdAndUpdate(id, {
        $set: { isDeleted: true },
      });
      if (userImage) {
        res.status(200).json("user Image deleted successfully");
      } else {
        res.json({ error: "Error while deleting the user Image" });
      }
    } else {
      res.status(404).json({ error: "user Image doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// restore user Image

exports.restoreData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existinguserImage = await userImageModel.findOne({
      isDeleted: true,
      _id: id,
    });
    if (existinguserImage) {
      const userImage = await userImageModel.findByIdAndUpdate(id, {
        $set: { isDeleted: false },
      });
      if (userImage) {
        res.status(200).json("user Image restored successfully");
      } else {
        res.json({ error: "Error while restoring the user Image" });
      }
    } else {
      res.status(404).json({ error: "user Image doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error responding to your request" });
  }
};
