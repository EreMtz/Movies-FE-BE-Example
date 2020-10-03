const { connect } = require('mongoose');

connect('mongodb://localhost:27017/movies')
  .then(function () {
    console.log('> Conectado a la base de datos');
  })
  .catch(function (error) {
    console.error('> No se puede conectar con la base de datos');
    console.log(error);
  });
