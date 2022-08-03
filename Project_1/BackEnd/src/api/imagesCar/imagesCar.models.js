const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    img: { type: String, required: true, unique: true}
})

module.exports = mongoose.model('imagesCar', schema );