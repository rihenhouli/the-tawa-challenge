const mongoose = require("mongoose");
const phoneNumberSchema = new mongoose.Schema(
  {
    phoneNumberValue: {
      type: Number,
      required: true,
    },
    countryCode: {
      type: Number,
      required: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    isMain: {
      type: Boolean,
      default: false,
      required: true,
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
  { collection: "PhoneNumber" },
  { timestamps: true }
);

const phoneNumber = mongoose.model("PhoneNumber", phoneNumberSchema);
module.exports = phoneNumber;
