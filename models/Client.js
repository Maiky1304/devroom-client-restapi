const { model, Schema } = require('mongoose');

const schema = new Schema({
    name: String,
    address: String,
    about: String
});

const ClientModel = model('clients', schema);
module.exports = ClientModel;