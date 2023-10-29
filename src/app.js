const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const userRouter = require('./routes/user.router');
const errorHandler = require('./utils/errorHandler');
require('dotenv').config();

// Esta es nuestra aplicación
const app = express();

// Middlewares 
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());

// Routing
app.use(userRouter);


// middlewares después de las rutas
app.use(errorHandler)


module.exports = app;
