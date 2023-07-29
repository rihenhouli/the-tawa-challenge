const mongoose = require("mongoose");
const articleInterestSchema = new mongoose.Schema(
  {
    article: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
      required: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    creationDate: {
      type: Date,
      required: true,
      default: new Date(),
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
  { collection: "ArticleInterest" },
  { timestamps: true }
);

const articleInterest = mongoose.model("ArticleInterest", articleInterestSchema);
module.exports = articleInterest;
