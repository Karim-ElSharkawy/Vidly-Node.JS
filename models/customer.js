const mongoose = require('mongoose');
const Joi = require('joi');

const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    phone: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    isGold: {
        type: Boolean,
        default: false
    }
});

const Customer = mongoose.model('Customer', customerSchema);

function validateCustomer(customer) {
    const schema = {
        name: Joi.string().min(3).max(50).required(),
        phone: Joi.string().min(3).max(50).required(),
        isGold: Joi.boolean()
    }

    const result = Joi.validate(customer, schema);
    return result;
}

module.exports.customerSchema = customerSchema;
module.exports.Customer = Customer;
module.exports.validate = validateCustomer;