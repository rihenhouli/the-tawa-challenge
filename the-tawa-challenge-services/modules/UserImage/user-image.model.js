const mongoose = require("mongoose");
const userImageSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    userImageName: {
      type: String,
      required: true,
    },
    userImagePath: {
      type: String,
      required: true,
    },
    userImageAlt: {
      type: String,
      default: "user image",
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
    creationDate: {
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
  { collection: "UserImage" },
  { timestamps: true }
);

const userImage = mongoose.model("UserImage", userImageSchema);
module.exports = userImage;
