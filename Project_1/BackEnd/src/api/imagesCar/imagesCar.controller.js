const ImagesCar = require('./imagesCar.models');
const { setError } = require('../../helpers/error');

const getAllImagesCar =  async(req, res, next) => {
    try {
        const images = await ImagesCar.find();
        return res.json({
            status: 200,
            message: 'Recover all images',
            data: { images }
        })
    } catch (error) {
        return next(setError(500, "Failed all images"));
    }
}

const getImagesCarById =  async(req, res, next) => {
    try {
        const { id } = req.params;
        const imagesCar = await ImagesCar.findById( id );
        if( !imagesCar ) return next( setError( 404, 'Images not found'))
        return res.json({
            status: 200,
            message: 'Recover all images',
            data: { imagesCar }
        })
    } catch (error) {
        return next(setError(500, "Failed image by ID"));
    }
}

const createImageCar = async ( req, res, next ) => {
    try {
        const ImagesCarToSave = new ImagesCar(req.body);
        const imagesCarDB = await ImagesCarToSave.save();
        return res.json({
            status: 201,
            message: 'Create model car',
            data: { imagesCarDB }
        })
    } catch (error) {
        return next(setError(500, "Failed create model car"));
    }
}

module.exports = {getAllImagesCar, getImagesCarById, createImageCar };