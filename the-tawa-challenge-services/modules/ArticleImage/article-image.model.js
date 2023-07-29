const mongoose = require("mongoose");
const articleImageSchema = new mongoose.Schema(
  {
    articleSection: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ArticleSection",
      required: false,
    },
    articleImageName: {
      type: String,
      required: true,
    },
    articleImagePath: {
      type: String,
      required: true,
    },
    articleImageAlt: {
      type: String,
      default: "article image",
      required: false,
    },
    isMain: {
      type: Boolean,
      default: false,
      required: false,
    },
    ref: {
      type: String,
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
  { collection: "ArticleImage" },
  { timestamps: true }
);

const articleImage = mongoose.model("ArticleImage", articleImageSchema);
module.exports = articleImage;
