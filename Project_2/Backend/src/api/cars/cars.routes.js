const CarsRoutes = require('express').Router();
const { getAllCars, getCarByID, createCar } = require('./cars.controller');

CarsRoutes.get('/getAllcars', getAllCars);
CarsRoutes.get('/getCarById/:id', getCarByID);
CarsRoutes.post('/createCar', createCar);

module.exports = CarsRoutes;