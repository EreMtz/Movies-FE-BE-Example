const express = require('express');
const { getAll, create } = require('../services/movie');

const Router = express.Router();

// Endpoint, Servicio, Ruta, Recurso
Router.get('/', function (request, response) {
  getAll()
    .then(function (movies) {
      response.json({ data: movies });
    })
    .catch(function (error) {
      response.statusCode = 400;
      response.json({
        error: true,
        description: error.message || 'Ocurrió un error inesperado',
      });
    });
});

Router.post('/', function (request, response) {
  console.log(request.body);
  create(request.body)
    .then(function (movie) {
      response.json({ data: movie });
    })
    .catch(function (error) {
      response.statusCode = 400;
      response.json({
        error: true,
        description: error.message || 'Ocurrió un error inesperado',
      });
    });
});

module.exports = Router;
