const Cars = require('./cars.models');
const { setError } = require('../../helpers/error');

const getAllCars = async ( req, res, next ) => {
    try {
        const cars = await Cars.find().populate('modelsCars');
        return res.json({
            status: 200,
            message: 'Recover all Cars',
            data: { cars },
        })
    } catch (error) {
        return next( setError( 500, 'Failed all Cars') );
    }
}

const getCarsById = async (req, res, next ) => {
    try {
        const { id } = req.params;
        const car = await Cars.findById(id).populate('modelsCars');
        if( !car ) return next( setError(404, 'Cars not found'));
        return res.json({
            status: 200,
            message: 'Recover car by ID',
            data: { car }
        })
    } catch (error) {
        return next( setError(500, "Failed Cars by ID") );
    }
}

const createCar = async (req, res, next) => {
    try {
      const CarToSave = new Cars(req.body);
      const carDB = await CarToSave.save();
      return res.json({
        status: 201,
        message: 'Created new car',
        data: { carDB }
    });
  
    } catch (error) {
      return next(setError(500, "Failed create Car"));
    }
  }

module.exports = { getAllCars, getCarsById, createCar };