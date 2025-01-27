const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const custSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    
});

const customer = mongoose.model('customer', custSchema);

module.exports = customer;
