const Cars = require('./cars.models');
const { setError } = require('../../helpers/error');

const getAllCars = async( req, res, next ) => {
    try {
        const cars = await Cars.find();
        return res.json({
            status: 200,
            message: '',
            data: { cars }
        })
    } catch (error) {
        return next( setError( 500, 'Failed all Cars') );
    }
}

const getCarByID = async( req, res, next ) => {
    try {
        const { id } = req.params;
        const car = await Cars.findById(id);
        return res.json({
            status: 200,
            message: '',
            data: { car }
        })
    } catch (error) {
        return next( setError( 500, 'Failed all Cars') );
    }
}

const createCar = async( req, res, next ) => {
    try {
        const carToSave = new Cars(req.body);
        const carDB = await carToSave.save();
        return res.json({
            status: 200,
            message: 'Create car',
            data: { carDB }
        })
    } catch (error) {
        return next( setError( 500, 'Failed creation Car') );
    }
}

module.exports = { getAllCars, getCarByID, createCar };