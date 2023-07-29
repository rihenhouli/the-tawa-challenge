const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    userRole: {
      type: String, 
      required: true,
      default: "user"
    },
    userState: {
      type: String, 
      required: true,
      default: "created"
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
    collection: "User",
    timestamps: true
  }
);

const user = mongoose.model("User", userSchema);
module.exports = user;
