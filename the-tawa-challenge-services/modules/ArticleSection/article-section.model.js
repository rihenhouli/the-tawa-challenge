const mongoose = require("mongoose");

const articleSectionSchema = new mongoose.Schema(
  {
    article: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
      required: false,
    },
    articleSectionName: {
      type: String,
      required: true,
    },
    articleSectionContent: {
      type: String,
      required: true,
    },
    addDate: {
      type: Date,
      required: true,
      default: new Date(),
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
  {
    collection: "ArticleSection",
    timestamps: true,
  }
);

const articleSection = mongoose.model("ArticleSection", articleSectionSchema);
module.exports = articleSection;
