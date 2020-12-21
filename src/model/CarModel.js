const mongoose = require('../config/database')

const Schema = mongoose.Schema;

const CarSchema = new Schema({
    placa: {type: String, required:true},
    model: {type: String, required: true},
    brand: {type: String, required: true},
    type: {type: String, required: true},
    color: {type: String, required: false},
    combustivel: {type: String, required: false},
    renavam : {type: Number, required: false},
    codSecurity: {type: Number, required: false},  
})

module.exports = mongoose.model("Cars", CarSchema);