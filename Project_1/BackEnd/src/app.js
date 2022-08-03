const express = require("express");
const cors = require("cors");
const { connectDB } = require("./helpers/db");

const PORT = process.env.PORT || 8000;
const CarsRoutes = require('./api/cars/cars.routes');
const ModelCarsRoute = require('./api/modelsCars/modelsCars.routes');
const ImagesCarRoutes = require('./api/imagesCar/imagesCar.routes');

const app = express();

connectDB();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ limit: '1mb', extended: true }));

app.use('/api/cars', CarsRoutes );
app.use('/api/modelsCars', ModelCarsRoute );
app.use('/api/imagesCars', ImagesCarRoutes );

app.use('*', (req, res, next) => {
  const error = new Error()
  error.status = 404
  error.message = 'Route not found'
  return next(error)
});
app.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || 'Unexpected error');
});
app.disable('x-powered-by');
app.listen(PORT, () => {
  console.log('Server is running in http://localhost:' + PORT)
})