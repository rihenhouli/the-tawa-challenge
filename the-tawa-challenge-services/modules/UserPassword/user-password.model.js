const mongoose = require("mongoose");
const userPasswordSchema = new mongoose.Schema(
  {
    userPasswordValue: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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
  { collection: "UserPassword" },
  { timestamps: true }
);

const userPassword = mongoose.model("UserPassword", userPasswordSchema);
module.exports = userPassword;
