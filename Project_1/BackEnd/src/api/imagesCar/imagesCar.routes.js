const ImagesCarRoutes = require('express').Router();
const {getAllImagesCar, getImagesCarById, createImageCar } = require('./imagesCar.controller');

ImagesCarRoutes.get('/getAllImagesCar', getAllImagesCar );
ImagesCarRoutes.get('/getImagesCarById/:id', getImagesCarById);
ImagesCarRoutes.post('/createImageCar', createImageCar);

module.exports = ImagesCarRoutes;