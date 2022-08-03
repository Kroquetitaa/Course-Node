const CarsRoutes = require('express').Router();
const { getAllCars, getCarsById, createCar } = require('./cars.controller');

CarsRoutes.get('/getAllCars', getAllCars);
CarsRoutes.get('/getCarsById/:id', getCarsById);
CarsRoutes.post('/create', createCar);

module.exports = CarsRoutes;