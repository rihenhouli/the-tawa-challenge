const articleInterestModel = require("./article-interest.model");
const referenceGenerator = require("../../shared/generators.js");

// list article Interests
exports.listData = async (req, res, next) => {
  try {
    const list = await articleInterestModel.find();
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

// get article Interest by _id
exports.getData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const articleInterest = await articleInterestModel.findOne({ _id: id });
    if (articleInterest) {
      res.status(200).json(articleInterest);
    } else {
      res.status(404).json("article Interest doesn't exist Found");
    }
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

// list article Interest by user
exports.listDataByUser = async (req, res, next) => {
  try {
    const { user } = req.params;
    const articleInterestList = await articleInterestModel.find({
      user: user,
    });
    if (articleInterestList) {
      res.status(200).json(articleInterestList);
    } else {
      res.status(404).json("no interests by this user");
    }
  } catch (error) {
    res.json("error", {
      error: error,
    });
  }
};

// list article Interest by article
exports.listDataByArticle = async (req, res, next) => {
  try {
    const { article } = req.params;
    const articleInterestList = await articleInterestModel.find({
      article: article,
    });
    if (articleInterestList) {
      res.status(200).json(articleInterestList);
    } else {
      res.status(404).json("no interests for this article");
    }
  } catch (error) {
    res.json("error", {
      error: error,
    });
  }
};

// add article Interest
exports.addData = async (req, res, next) => {
  try {
    if (
      req.body.article !== undefined ||
      req.body.user !== undefined ||
      req.body.createdBy !== undefined
    ) {
      const existingArticleInterest = await articleInterestModel.findOne({
        article: req.body.article,
        user: req.body.user,
      });
      if (!existingArticleInterest) {
        const prefix = "IST-";
        const sequentialNumber = (await articleInterestModel.find()).length+1;
        const reference = referenceGenerator.generateReference(
          prefix,
          sequentialNumber
        );
        const articleInterest = new articleInterestModel({
          article: req.body.article,
          user: req.body.user,
          createdBy: req.body.createdBy,
          ref:reference
        });
        articleInterest.save();
        res.json(articleInterest._id);
      } else {
        res.status(500).json({ error: "article interest already exists" });
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

// delete article Interest

exports.deleteData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingArticleInterest = await articleInterestModel.findOne({
      isDeleted: false,
      _id: id,
    });
    if (existingArticleInterest) {
      const articleInterest = await articleInterestModel.findByIdAndUpdate(id, {
        $set: { isDeleted: true },
      });
      if (articleInterest) {
        res.status(200).json("deleted successfully");
      } else {
        res.json({ error: "Error while deleting the article Interest" });
      }
    } else {
      res.status(404).json({ error: "article interest doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error responding to your request" });
  }
};

// restore article Interest

exports.restoreData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingArticleInterest = await articleInterestModel.findOne({
      isDeleted: true,
      _id: id,
    });
    if (existingArticleInterest) {
      const articleInterest = await articleInterestModel.findByIdAndUpdate(id, {
        $set: { isDeleted: false },
      });
      if (articleInterest) {
        res.status(200).json("article Interest restored successfully");
      } else {
        res.json({ error: "Error while restoring the article Interest" });
      }
    } else {
      res.status(404).json({ error: "article Interest doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error responding to your request" });
  }
};
