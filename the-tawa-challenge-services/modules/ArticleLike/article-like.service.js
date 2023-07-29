const articleLikeModel = require("./article-like.model");
const referenceGenerator = require("../../shared/generators.js");

// list article Likes
exports.listData = async (req, res, next) => {
  try {
    const list = await articleLikeModel.find();
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

// get article Like by _id
exports.getData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const articleLike = await articleLikeModel.findOne({ _id: id });
    if (articleLike) {
      res.status(200).json(articleLike);
    } else {
      res.status(404).json("article Like doesn't exist Found");
    }
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

// list article Like by user
exports.listDataByUser = async (req, res, next) => {
  try {
    const { user } = req.params;
    const articleLikeList = await articleLikeModel.find({
      user: user,
    });
    if (articleLikeList) {
      res.status(200).json(articleLikeList);
    } else {
      res.status(404).json("no likes by this user");
    }
  } catch (error) {
    res.json("error", {
      error: error,
    });
  }
};

// list article Like by article
exports.listDataByArticle = async (req, res, next) => {
  try {
    const { article } = req.params;
    const articleLikeList = await articleLikeModel.find({
      article: article,
    });
    if (articleLikeList) {
      res.status(200).json(articleLikeList);
    } else {
      res.status(404).json("no likes for this article");
    }
  } catch (error) {
    res.json("error", {
      error: error,
    });
  }
};

// add article Like
exports.addData = async (req, res, next) => {
  try {
    if (
      req.body.article !== undefined ||
      req.body.user !== undefined ||
      req.body.createdBy !== undefined
    ) {
      const existingArticleLike = await articleLikeModel.findOne({
        article: req.body.article,
        user: req.body.user,
      });
      if (!existingArticleLike) {
        const prefix = "IST-";
        const sequentialNumber = (await articleLikeModel.find()).length+1;
        const reference = referenceGenerator.generateReference(
          prefix,
          sequentialNumber
        );
        const articleLike = new articleLikeModel({
          article: req.body.article,
          user: req.body.user,
          createdBy: req.body.createdBy,
          ref:reference
        });
        articleLike.save();
        res.json(articleLike._id);
      } else {
        res.status(500).json({ error: "article like already exists" });
      }
    } else {
      res
        .status(400)
        .json({ error: "BAD REQUEST : No Data has been inserted " });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete article Like

exports.deleteData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingArticleLike = await articleLikeModel.findOne({
      isDeleted: false,
      _id: id,
    });
    if (existingArticleLike) {
      const articleLike = await articleLikeModel.findByIdAndUpdate(id, {
        $set: { isDeleted: true },
      });
      if (articleLike) {
        res.status(200).json("deleted successfully");
      } else {
        res.json({ error: "Error while deleting the article Like" });
      }
    } else {
      res.status(404).json({ error: "article like doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error responding to your request" });
  }
};

// restore article Like

exports.restoreData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingArticleLike = await articleLikeModel.findOne({
      isDeleted: true,
      _id: id,
    });
    if (existingArticleLike) {
      const articleLike = await articleLikeModel.findByIdAndUpdate(id, {
        $set: { isDeleted: false },
      });
      if (articleLike) {
        res.status(200).json("article Like restored successfully");
      } else {
        res.json({ error: "Error while restoring the article Like" });
      }
    } else {
      res.status(404).json({ error: "article Like doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error responding to your request" });
  }
};
