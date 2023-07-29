const articleModel = require("./article.model");
var express = require("express");
var { ObjectId } = require("mongodb");
const { default: mongoose } = require("mongoose");
const nodemailer = require("nodemailer");
const axios = require("axios");

// list articles
exports.listData = async (req, res, next) => {
  try {
    const list = await articleModel.find();
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

// get article by _id
exports.getData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const article = await articleModel.findOne({ _id: id });
    if (article) {
      res.status(200).json(article);
    } else {
      res.status(404).json("article doesn't exist");
    }
  } catch (error) {
    res.json({
      article: error.article,
      error: error,
    });
  }
};

// add Article
exports.addData = async (req, res, next) => {
  try {
    const { articleTitle, articleCategory, createdBy } = req.body;
    if (
      articleTitle !== undefined ||
      articleCategory !== undefined ||
      createdBy !== undefined
    ) {
      const article = new articleModel({ ...req.body });
      article.save();
      res.json({
        articleId: article._id,
        articleCategory: articleCategory,
        articleTitle: articleTitle,
      });
    } else {
      res
        .status(400)
        .json({ error: "BAD REQUEST : No Data has been inserted " });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update article

exports.updateData = async function (req, res, next) {
  try {
    const id = req.params.id;
    const dbarticle = await articleModel.findById({ _id: id });
    if (dbarticle) {
      // articleTitle
      let articleTitle = req.body.articleTitle;
      if (req.body.articleTitle === undefined) {
        articleTitle = dbarticle.articleTitle;
      }
      // articleCategory
      let articleCategory = req.body.articleCategory;
      if (req.body.articleCategory === undefined) {
        articleCategory = dbarticle.articleCategory;
      }
      // publishDate
      let publishDate = req.body.publishDate;
      if (req.body.publishDate === undefined) {
        publishDate = dbarticle.publishDate;
      }
      // isArchived
      let isArchived = req.body.isArchived;
      if (req.body.isArchived === undefined) {
        isArchived = dbarticle.isArchived;
      }
      // isPublished
      let isPublished = req.body.isPublished;
      if (req.body.isPublished === undefined) {
        isPublished = dbarticle.isPublished;
      }
      if (
        req.body.articleTitle !== undefined ||
        req.body.publishDate !== undefined ||
        req.body.articleCategory !== undefined ||
        req.body.isArchived !== undefined ||
        req.body.isPublished !== undefined
      ) {
        if (
          (req.body.articleTitle !== dbarticle.articleTitle &&
            req.body.articleTitle !== undefined) ||
          (req.body.articleCategory !== dbarticle.articleCategory &&
            req.body.articleCategory !== undefined) ||
          (req.body.publishDate !== dbarticle.publishDate &&
            req.body.publishDate !== undefined) ||
          (req.body.isArchived !== dbarticle.isArchived &&
            req.body.isArchived !== undefined) ||
          (req.body.isPublished !== dbarticle.isPublished &&
            req.body.isPublished !== undefined)
        ) {
          if (req.body.isPublished===true){
            req.body.publishDate=new Date()
          }
          const updatedarticle = { ...req.body };
          const article = await articleModel.findByIdAndUpdate(id, {
            $set: updatedarticle,
          });
          if (!article) {
            res.status(500).json({ error: "Error while updating article" });
          } else {
            res.json(await articleModel.findById({ _id: id }));
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
      res.status(404).json({ error: "NOT FOUND : article doesn't exist" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// publish article

exports.publishData = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const existingArticle = await articleModel.findOne({
      isPublished: false,
      _id: _id,
    });
    if (existingArticle) {
      const article = await articleModel.findByIdAndUpdate(article, {
        $set: { isPublished: true , publishDate: new Date() },
      });
      if (article) {
        res.status(200).json("article publishd successfully");
      } else {
        res.json({ error: "Error while publishing the article" });
      }
    } else {
      res.status(404).json({ error: "article doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error responding to your request" });
  }
};


// delete article

exports.deleteData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingArticle = await articleModel.findOne({
      isDeleted: false,
      _id: id,
    });
    if (existingArticle) {
      const article = await articleModel.findByIdAndUpdate(id, {
        $set: { isDeleted: true },
      });
      if (article) {
        res.status(200).json("article deleted successfully");
      } else {
        res.json({ error: "Error while deleting the article" });
      }
    } else {
      res.status(404).json({ error: "article doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error responding to your request" });
  }
};

// restore article

exports.restoreData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingArticle = await articleModel.findOne({
      isDeleted: true,
      _id: id,
    });
    if (existingArticle) {
      const article = await articleModel.findByIdAndUpdate(id, {
        $set: { isDeleted: false },
      });
      if (article) {
        res.status(200).json("article restored successfully");
      } else {
        res.json({ error: "Error while restoring the article" });
      }
    } else {
      res.status(404).json({ error: "article doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error responding to your request" });
  }
};
