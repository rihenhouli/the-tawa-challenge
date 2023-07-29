const articleSectionModel = require("./article-section.model");

// list article section

exports.listData = async (req, res, next) => {
  try {
    const list = await articleSectionModel.find();
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

// list article section by article

exports.listDataByArticle = async (req, res, next) => {
  try {
    const list = await articleSectionModel.find({article:req.params.article});
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

// get Article Section by _id

exports.getData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const articleSection = await articleSectionModel.findOne({ _id: id, isDeleted: false });
    if (articleSection) {
      res.status(200).json(articleSection);
    } else {
      res.status(404).json("Article Section doesn't exist Found");
    }
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

// add ArticleSection
exports.addData = async (req, res, next) => {
  try {
    const { articleSectionContent, article, articleSectionName, createdBy } = req.body;
    if (
      articleSectionContent !== undefined ||
      article !== undefined ||
      articleSectionName !== undefined ||
      createdBy !== undefined
    ) {
      const existingArticleSection = await articleSectionModel.findOne({
        articleSectionName: articleSectionName,
        article: article,
        isDeleted: false,
      });
      console.log(existingArticleSection);

      if (!existingArticleSection) {
        const articleSection = new articleSectionModel({ ...req.body });
        articleSection.save();
        res.json(articleSection._id);
      } else {
        res.status(500).json({ error: "Article Section already exists" });
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

// update article section

exports.updateData = async function (req, res, next) {
  try {
    const { id } = req.params;
    const dbarticleSection = await articleSectionModel.findById({ _id: id });
    if (dbarticleSection) {
      // articleSectionName
      let articleSectionName = req.body.articleSectionName;
      if (req.body.articleSectionName === undefined) {
        articleSectionName = dbarticleSection.articleSectionName;
      }
      // articleSectionContent
      let articleSectionContent = req.body.articleSectionContent;
      if (req.body.articleSectionContent === undefined) {
        articleSectionContent = dbarticleSection.articleSectionContent;
      }
      if (
        req.body.articleSectionName !== undefined ||
        req.body.articleSectionContent !== undefined
      ) {
        if (
          (req.body.articleSectionName !== dbarticleSection.articleSectionName &&
            req.body.articleSectionName !== undefined) ||
          (req.body.articleSectionContent !== dbarticleSection.articleSectionContent &&
            req.body.articleSectionContent !== undefined)
        ) {
          const existingarticleSection = await articleSectionModel.findOne({
            articleSectionName: req.body.articleSectionName,
            article: dbarticleSection.article,
            _id: { $ne: id },
          });
          if (!existingarticleSection) {
            const updatedarticleSection = { ...req.body };
            const articleSection = await articleSectionModel.findByIdAndUpdate(id, {
              $set: updatedarticleSection,
            });
            if (!articleSection) {
              res.status(500).json({ error: "Error while updating article section" });
            } else {
              res.json(await articleSectionModel.findById({ _id: id }));
            }
          } else {
            res.status(409).json({ error: "CONFLICT : article section already exists" });
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
      res.status(404).json({ error: "NOT FOUND : article section doesn't exist" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// delete articleSection

exports.deleteData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingArticleSection = await articleSectionModel.findOne({
      isDeleted: false,
      _id: id,
    });
    if (existingArticleSection) {
      const ArticleSection = await articleSectionModel.findByIdAndUpdate(id, {
        $set: { isDeleted: true },
      });
      if (ArticleSection) {
        res.status(200).json("article section deleted successfully");
      } else {
        res.json({ error: "Error while deleting the articleSection" });
      }
    } else {
      res.status(404).json({ error: "article section doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error responding to your request" });
  }
};

// restore articleSection

exports.restoreData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingArticleSection = await articleSectionModel.findOne({
      isDeleted: true,
      _id: id,
    });
    if (existingArticleSection) {
      const ArticleSection = await articleSectionModel.findByIdAndUpdate(id, {
        $set: { isDeleted: false },
      });
      if (ArticleSection) {
        res.status(200).json("article section restored successfully");
      } else {
        res.json({ error: "Error while restoring the article section" });
      }
    } else {
      res.status(404).json({ error: "article section doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error responding to your request" });
  }
};
