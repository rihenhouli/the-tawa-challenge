const mongoose = require("mongoose");
const articleLikeSchema = new mongoose.Schema(
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
  { collection: "ArticleLike" },
  { timestamps: true }
);

const articleLike = mongoose.model("ArticleLike", articleLikeSchema);
module.exports = articleLike;
