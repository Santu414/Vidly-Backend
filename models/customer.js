const mongoose = require("mongoose");
const Joi = require("joi");
const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 20,
    },
    phone: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 20,
    },
    isGold: {
      type: Boolean,
      dafault: false,
    },
  })
);

function validateCustomer(customer) {
  const schema = {
    name: Joi.string().min(3).required(),
    phone: Joi.string().min(3).required(),
    isGold: Joi.boolean(),
  };

  return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validateCustomer = validateCustomer;
