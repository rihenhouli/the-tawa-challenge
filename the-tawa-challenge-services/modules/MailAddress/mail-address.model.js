const mongoose = require("mongoose");
const mailAddressSchema = new mongoose.Schema(
  {
    mailAddressValue: {
      type: String,
      required: true,
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
  { collection: "MailAddress" },
  { timestamps: true }
);

const mailAddress = mongoose.model("MailAddress", mailAddressSchema);
module.exports = mailAddress;
