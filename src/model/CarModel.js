const mongoose = require('../config/database')

const Schema = mongoose.Schema;

const CarSchema = new Schema({
    model: {type: String, required: true},
    type: {type: String, required: true},
    description: {type: String, required: true},
    cod_security: {type: Number, required: true},
    renavan: {type: Number, required: true},
})

module.exports = mongoose.model("Cars", CarSchema);