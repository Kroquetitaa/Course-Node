const ModelCarsRoute = require('express').Router();
const {getAllModelsCars, getModelCarByID, createModelsCars } = require('./modelsCars.controller');

ModelCarsRoute.get('/getAllModelsCars', getAllModelsCars);
ModelCarsRoute.get('/getModelCarByID/:id', getModelCarByID);
ModelCarsRoute.post('/createModelsCars', createModelsCars);

module.exports = ModelCarsRoute;