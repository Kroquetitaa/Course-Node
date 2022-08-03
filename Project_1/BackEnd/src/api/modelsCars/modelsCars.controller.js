const ModelsCars = require('./modelsCars.models');
const { setError } = require('../../helpers/error');

const getAllModelsCars = async(req, res, next) => {
    try {
        const modelsCars = await ModelsCars.find().populate('imagesCar');
        return res.json({
            status: 200,
            message: 'Recover all modelCars',
            data: { modelsCars }
        }) 
    } catch (error) {
        return next( setError(500, "Failed Cars by ID") );
    }
}

const getModelCarByID = async(req, res, next) => {
    try {
        const { id } = req.params;
        const modelCar = await ModelsCars.findById(id).populate('imagesCar');
        if(!modelCar) return next( setError(404, 'Model car not found'));
        return res.json({
            status: 200,
            message: 'Recover By ID',
            data: { modelCar }
        }) 
    } catch (error) {
        return next( setError(500, "Failed Cars by ID") );
    }
}

const createModelsCars = async(req, res, next) => {
    try {
        const ModelCarToSave = new ModelsCars(req.body);
        const modelCarDB = await ModelCarToSave.save();
        return res.json({
            status: 200,
            message: 'Created new model Car',
            data: { modelCarDB }
        }) 
    } catch (error) {
        return next( setError(500, "Failed Cars by ID") );
    }
}

module.exports = {getAllModelsCars, getModelCarByID, createModelsCars }