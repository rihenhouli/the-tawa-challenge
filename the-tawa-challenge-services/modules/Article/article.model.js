const mongoose = require("mongoose");
const articleSchema = new mongoose.Schema(
  {
    articleTitle: {
      type: String,
      required: false,
    },
    articleCategory: {
      type: String,
      required: false,
    },
    isArchived: {
      type: Boolean,
      default: false,
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
      required: true,
    },
    publishDate: {
      type: Date,
      required: false,
    },
    createdBy: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { collection: "Article" },
  { timestamps: true }
);

const article = mongoose.model("Article", articleSchema);
module.exports = article;
