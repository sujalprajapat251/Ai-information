const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema(
  {
    companySize: {
      type: String,
      required: true,
      enum: ["1-10", "11-50", "51-200", "201-500", "500+"],
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    workEmail: {
      type: String,
      required: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    phoneNumber: {
      type: String,
      required: true,
      match: [/^\+?[0-9]{7,15}$/, "Please enter a valid phone number"],
    },
    businessNeeds: {
      type: String,
      required: false,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ContactUs", contactUsSchema);
