const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    cars: { type: String, unique: true,required: true },
    model: { type: String},
    modelsCars: [{ type: Schema.Types.ObjectId, ref: "modelsCars", required: true}],
});

module.exports = mongoose.model('brands', schema);