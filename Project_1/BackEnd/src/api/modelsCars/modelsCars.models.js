const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    models: { type: String, required: true},
    gas: { type: String, enum: ["Gasolina", "Diesel"] },
    price: { type: Number},
    imagesCar: [{type: Schema.Types.ObjectId, ref: "imagesCar", required: true}]
})

module.exports = mongoose.model('modelsCars', schema);