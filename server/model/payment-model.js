const mongoose = require("mongoose");

var paymentSchema = mongoose.Schema({
    STRIPE_SECRET_KEY: {
    type: String,
    required: true,
    default: "Key to be Uploaded",

  },

  STRIPE_PUBLISHABLE_KEY: {
    type: String,
    required: true,
    default: "Key to be Uploaded",

  },

  PAYPAL_SECRET_KEY: {
    type: String,
    required: true,
    default: "Key to be Uploaded",

  },

  PAYPAL_PUBLISHABLE_KEY: {
    type: String,
    required: true,
    default: "Key to be Uploaded",

  },

 
});

var paymentModel = mongoose.model("paymentTable", paymentSchema);

module.exports = paymentModel;
