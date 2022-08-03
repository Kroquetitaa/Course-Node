const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    cars: { type: String, unique: true,required: true },
    models: { type: String, required: true},
    gas: { type: String, enum: ["Gasolina", "Diesel"] },
    price: { type: Number},
    img: { type: String, required: true, unique: true}
});

module.exports = mongoose.model('cars', schema);